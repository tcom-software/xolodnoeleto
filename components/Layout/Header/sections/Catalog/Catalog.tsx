import React from "react";
import Link from "next/link";
import { CatalogContainer } from "./styles";

const Catalog = ({ catalog, modalType, modalRef, closeModal }) => {
  return (
    <CatalogContainer
      modalType={modalType}
      ref={modalType === "catalog" ? modalRef : null}
    >
      {catalog.map((e, i) => {
        return (
          <li key={i} className={"level-one-li"}>
            <p>{e.name}</p>
            <ul className="level-two-ul">
              {e.subCategories.map((elem, index) => (
                <li key={index} className={"level-two-li"}>
                  <p>{elem.name}</p>
                  <ul className="level-three-ul">
                    {elem.subCategories.map((element, indexTwo) => (
                      <li
                        key={indexTwo}
                        className={"level-three-li"}
                        onClick={closeModal}
                      >
                        <Link href={`/catalogue/${element.id}`}>
                          <a>{element.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </CatalogContainer>
  );
};

export default Catalog;

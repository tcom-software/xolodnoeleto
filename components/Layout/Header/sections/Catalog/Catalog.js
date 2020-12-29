import React from "react";
import Link from "next/link";
import { CatalogContainer } from "./styles";

const Catalog = ({ catalog, modalType, modalRef, closeModal }) => {
  return (
    <CatalogContainer
      modalType={modalType}
      suppressHydrationWarning={true}
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
                    {elem.subCategories.map((element, indexTwo) => {
                      return (
                        <li
                          key={indexTwo}
                          className={"level-three-li"}
                          onClick={closeModal}
                        >
                          <Link href={`/catalog/${element.id}`}>
                            <a className={"link-a-tag"}>{element.name}</a>
                          </Link>
                        </li>
                      );
                    })}
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

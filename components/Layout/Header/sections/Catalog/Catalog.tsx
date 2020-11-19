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
            <a>{e.name}</a>
            <ul className="level-two-ul">
              {e.subCategories.map((elem, index) => (
                <li key={index} className={"level-two-li"}>
                  {Object.keys(e.subCategories).length > 0 ? (
                    <>
                      <a>{elem.name}</a>
                      <ul className="level-three-ul">
                        {elem.subCategories.map((element, indexK) => (
                          <li
                            key={indexK}
                            className={"level-three-li"}
                            onClick={closeModal}
                          >
                            <Link key={index} href={`/catalogue/${element.id}`}>
                              <a>{element.name}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link key={index} href={`catalogue/${e.id}`}>
                      <a>{e.name}</a>
                    </Link>
                  )}
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

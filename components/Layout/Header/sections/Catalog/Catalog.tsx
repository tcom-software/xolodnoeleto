import React from "react";
import Link from "next/link";
import { SvgIcon } from "@famous";
import theme from "styles/theme";
import { CatalogUl } from "./styles";

const Catalog = ({ catalog, modalType, modalRef, closeModal }) => {
  return (
    <CatalogUl
      modalType={modalType}
      ref={modalType === "catalog" ? modalRef : null}
    >
      <div className="catalog-container">
        {catalog.map((e, i) => {
          return (
            <li key={i} className={"level-one-li"}>
              <a>{e.name}</a>
              <ul className="level-two-ul">
                {e.subCategories.map((elem, index) => (
                  <li key={index} className={"level-two-li"}>
                    {Object.keys(e.subCategories).length > 0 ? (
                      <>
                        <a>{e.name}</a>
                        <ul className="level-three-ul">
                          {e.subCategories.map((elem, index) => (
                            <li
                              key={index}
                              className={"level-three-li"}
                              onClick={closeModal}
                            >
                              <Link key={index} href={`/catalogue/${e.id}`}>
                                <a>{e.name}</a>
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
      </div>

      <SvgIcon
        type="box"
        width={15}
        height={15}
        color={theme.body.primaryColor}
        callback={() => {}}
      />
    </CatalogUl>
  );
};

export default Catalog;

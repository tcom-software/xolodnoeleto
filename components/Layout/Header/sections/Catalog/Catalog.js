import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sortCatalogMenu } from "@utils";
import { CatalogContainer } from "./styles";

const Catalog = ({ catalog, modalType, modalRef, closeModal, isMobile }) => {
  const [mobileState, setMobileState] = useState({
    one: "",
    two: "",
    three: "",
  });

  useEffect(() => {
    setMobileState({ one: "", two: "", three: "" });
  }, [modalType]);

  useEffect(() => {
    return () => {
      closeModal("");
    };
  }, []);

  return (
    <CatalogContainer
      modalType={modalType}
      suppressHydrationWarning={true}
      ref={modalType === "catalog" ? modalRef : null}
    >
      {catalog.map((e, i) => {
        let reversedSub;
        if (e.id === 1) {
          reversedSub = [...e.subCategories].reverse();
        } else {
          reversedSub = e.subCategories;
        }
        return (
          <li
            key={i}
            className={`level-one-li ${
              e.name === mobileState.one ? "active" : ""
            }`}
            onClick={() => {
              if (isMobile && e.name !== mobileState.one) {
                setMobileState({
                  ...mobileState,
                  one: e.name,
                });
              } else if (
                isMobile &&
                e.name === mobileState.one &&
                mobileState.two != ""
              ) {
                setMobileState({
                  ...mobileState,
                  one: mobileState.one,
                  two: "",
                });
              }
            }}
          >
            <p>{e.name}</p>
            <ul className="level-two-ul">
              {reversedSub.map((elem, index) => {
                if (
                  elem.id === 118 ||
                  elem.id === 82 ||
                  elem.id === 86 ||
                  elem.id === 44 ||
                  elem.id === 53 ||
                  elem.id === 64
                ) {
                  return null;
                } else {
                  const { id, name, subCategories } = elem;
                  const sortedSubSub = sortCatalogMenu(id, subCategories);

                  return (
                    <li
                      key={index}
                      className={`level-two-li ${
                        name === mobileState.two ? "active" : ""
                      }`}
                      onClick={() => {
                        if (isMobile && mobileState.two !== name) {
                          setMobileState({
                            ...mobileState,
                            two: name,
                          });
                        }
                      }}
                    >
                      <p>{name}</p>
                      <ul className="level-three-ul">
                        {sortedSubSub.map((element, indexTwo) => {
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
                  );
                }
              })}
            </ul>
          </li>
        );
      })}
    </CatalogContainer>
  );
};

export default Catalog;

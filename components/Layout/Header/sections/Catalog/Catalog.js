import React, { useEffect, useState } from "react";
import Link from "next/link";
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
      {[...catalog].reverse().map(({ id, name, subCategories }, i) => {
        return (
          <li
            key={id}
            className={`level-one-li ${
              name === mobileState.one ? "active" : ""
            }`}
            onClick={() => {
              if (isMobile && name !== mobileState.one) {
                setMobileState({
                  ...mobileState,
                  one: name,
                });
              } else if (
                isMobile &&
                name === mobileState.one &&
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
            <p>{name}</p>
            <ul className="level-two-ul">
              {[...subCategories]
                .reverse()
                .map(({ id, name, subCategories }) => {
                  return (
                    <li
                      key={id}
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
                        {[...subCategories].reverse().map(({ id, name }) => {
                          return (
                            <li
                              key={id}
                              className={"level-three-li"}
                              onClick={closeModal}
                            >
                              <Link href={`/catalog/${id}`}>
                                <a className={"link-a-tag"}>{name}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
            </ul>
          </li>
        );
      })}
    </CatalogContainer>
  );
};

export default Catalog;

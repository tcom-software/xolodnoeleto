import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import PopUp from "./PopUp";

import {
  actionSearch,
  searchInputValueAction,
  setNewRefForSearch,
} from "redux/actions/searchActions";

const Layout = ({
  children,
  actionSearch,
  searchInputValueAction,
  refForSearch,
  setNewRefForSearch,
}) => {
  const searchRef = useRef(null);

  useEffect(() => {
    setNewRefForSearch(searchRef);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        refForSearch !== null &&
        refForSearch.current &&
        !refForSearch.current.contains(event.target)
      ) {
        actionSearch("");
        searchInputValueAction("");
        setNewRefForSearch({ current: null });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refForSearch]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <PopUp />
    </>
  );
};

const mapStateToProps = ({ search: { refForSearch } }) => ({ refForSearch });

const mapDispatchToProps = (dispatch) => ({
  actionSearch: (searchWord, page) => dispatch(actionSearch(searchWord, page)),
  searchInputValueAction: (value) => dispatch(searchInputValueAction(value)),
  setNewRefForSearch: (ref) => dispatch(setNewRefForSearch(ref)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

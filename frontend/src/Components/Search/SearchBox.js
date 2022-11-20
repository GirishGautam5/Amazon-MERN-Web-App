import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./searchBoxstyles.css";

export default function SearchBox(props) {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    //navigate(`/search/name/${name}`);
    if (name) {
      navigate(`/search/name/${name}`);
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="navbar-search">
        <form className="form-search" onSubmit={submitHandler}>
          <div className="row">
            <input
              type="text"
              className="search-input"
              name="q"
              id="q"
              onChange={(e) => setName(e.target.value)}
            />

            <button className="button_search search" type="submit">
              <SearchIcon className="search-icon" />
              {/* <i className="fa fa-search"></i> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

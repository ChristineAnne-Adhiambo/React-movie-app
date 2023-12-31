import React, { useState } from "react";


const Search = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearchClick = () => {
    console.log(searchValue);
    onSearch(searchValue)
  };
  return (
    <div className="nav">
        <p className="M">M<span className="oo">oo</span>vie</p>
      <input className="input"
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={handleInput}
      />
      <button onClick={handleSearchClick} className="btnsearch">Search</button>
      {/* <h3 className="Home"></h3> */}
      {/* <h3 className="mylist">My List</h3> */}
      {/* <button>Sign In</button> */}
    </div>
  );
};
export default Search;







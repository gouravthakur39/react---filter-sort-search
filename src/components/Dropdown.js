import React, { Fragment } from "react";
import "./Dropdown.css";

function Dropdown(props) {
  const { changeHandler, uniqueCategory, sortHandler } = props;
  return (
    <Fragment>
      <div className="dropdown-container">
      <div className="dropdown">
        <label htmlFor="tag">Filter by: </label>
        <select name="tag" id="tag" onChange={changeHandler}>
          <option value="all">All</option>
          {uniqueCategory.map((item) => (
            <option value={item} key={item} >
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown">
        <label htmlFor="sort">Sort price by: </label>
        <select name="sort" id="sort" onChange={sortHandler}>
          <option value="default">Default</option>
          <option value="aesc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      </div>
    </Fragment>
  );
}

export default Dropdown;

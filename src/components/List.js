import React, { Fragment, useState } from "react";
import "./List.css";
import ListItem from "./ListItem";
import Dropdown from "./Dropdown";
import { DUMMY_EXPENSES } from "../Data.js";

function List() {
  const [data, setData] = useState(DUMMY_EXPENSES);
  const [filterBy, setFilterBy] = useState({ category: "all" });
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = data;

  if (filterBy.category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.tag === filterBy.category
    );
  }

  if (sortBy !== "default") {
    filteredProducts.sort(function (a, b) {
      if (sortBy === "aesc") {
        return parseInt(a.amount) - parseInt(b.amount);
      } else {
        return parseInt(b.amount) - parseInt(a.amount);
      }
    });
  }

  const tags = data.map((tagItem) => {
    return tagItem.tag;
  });

  const changeHandler = (e) => {
    setFilterBy(() => ({ category: e.target.value }));
  };
  const sortHandler = (e) => {
    setSortBy(e.target.value);
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  console.log(query);

  const searchProducts = (searchedProducts, query) => {
    if (!query) {
      console.log(searchedProducts);
      return searchedProducts;
    }
    return searchedProducts.filter((product) => {
      const productName = product.title.toLowerCase();
      return productName.includes(query);
    });
  };

  const searchedProducts = searchProducts(filteredProducts, query);
  console.log(searchedProducts);

  const uniqueCategory = [...new Set(tags)];
  const products = searchedProducts.map((item) => (
    <ListItem
      key={item.id}
      id={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      tag={item.tag}
    />
  ));

  return (
    <Fragment>
      <div className="header">
        <h1>Filter</h1>
      </div>
      <div className="search-box">
        <form action="/" method="get">
          <input type="search" id="search" name="s" placeholder="search..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <Dropdown
        uniqueCategory={uniqueCategory}
        changeHandler={changeHandler}
        sortHandler={sortHandler}
      />
      <div className="card-container">{products}</div>
    </Fragment>
  );
}

export default List;

import React, { useEffect, useState } from "react";
import productCategoryList from "assets/product-category.json";
import { SearchBarContainer } from "components/styles/SearchBar/SearchBarContainer";
import { amazonIcons } from "assets/icons";

export const SearchBar: React.FC = () => {
  const { SearchIcon } = amazonIcons;
  const [searchCategory, updateSearchCategory] =
    useState<string>("all-categories");

  //TO DO:
  //Search Bar product category select length
  //Should be responsive and need to remake it
  //Take it with another Ticket Not with RWA-18

  return (
    <SearchBarContainer>
      <select
        className="search-select-category"
        name="search-select-category"
        defaultValue={searchCategory}
        onChange={(e) => updateSearchCategory(e.target.value)}
      >
        {productCategoryList.map((productCategory) => {
          return (
            <option key={productCategory.key} value={productCategory.value}>
              {productCategory.name}
            </option>
          );
        })}
      </select>
      <input
        className="search-product"
        type="search"
        name="search-product"
        id=""
      />
      <button className="search-query-submit">
        <SearchIcon />
      </button>
    </SearchBarContainer>
  );
};

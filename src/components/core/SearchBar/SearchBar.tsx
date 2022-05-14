import React, { useEffect, useState } from "react";
import productCategoryList from "assets/product-category.json";
import { SearchBarContainer } from "components/styles/SearchBar/SearchBarContainer";
import { amazonIcons } from "assets/icons";

export const SearchBar: React.FC = () => {
  const { SearchIcon } = amazonIcons;
  const [searchCategory, updateSearchCategory] =
    useState<string>("all-categories");

  const handleSearchCategoryWidthClass = () => {
    if (searchCategory.length > 9 && searchCategory.length <= 12)
      return "search-select-cat-w-extend-a";
    if (searchCategory.length > 12 && searchCategory.length < 15)
      return "search-select-cat-w-extend-b";
    if (searchCategory.length >= 15 && searchCategory.length < 17)
      return "search-select-cat-w-extend-c";
    if (searchCategory.length >= 17) return "search-select-cat-w-extend-d";
  };

  return (
    <SearchBarContainer>
      <select
        className={`search-select-category ${
          handleSearchCategoryWidthClass() ?? ""
        }`}
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

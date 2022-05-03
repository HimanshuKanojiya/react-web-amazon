import React from "react";
import productCategoryList from "assets/product-category.json";
import { SearchBarContainer } from "components/styles/SearchBar/SearchBarContainer";
import { amazonIcons } from "assets/icons";

export const SearchBar: React.FC = () => {
  const { SearchIcon } = amazonIcons;

  return (
    <SearchBarContainer>
      <select
        className="search-select-category"
        name="search-select-category"
        defaultValue="all-categories"
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

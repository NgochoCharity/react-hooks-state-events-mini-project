import React from "react";
import Button from "./Button";
function CategoryFilter({categories, onFilter}) {
  const CatBtn = categories.map(cat => (<Button key={cat} onFilter = {onFilter} cat = {cat}/>))
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CatBtn}
    </div>
  );
}

export default CategoryFilter;
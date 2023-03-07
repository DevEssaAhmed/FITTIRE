import React from 'react'
import { useContext, Fragment } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesContext } from "../../contexts/category-context";


import { Link } from "react-router-dom";




const CategoryPreview = ({ title, products }) => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h2>
        <Link className="text-center text-4xl mt-48" to={`/shop/${title}`} >
          {title.toUpperCase()}
        </Link>
      </h2>
      </div>  
      <div className="flex flex-wrap justify-center ">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
   
    </>
  );
};

const HomeCategories = () => {
    const {categoriesMap} = useContext(CategoriesContext); 
  return (
    <div>
      <Fragment>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </Fragment>
    </div>
  );
}

export default HomeCategories
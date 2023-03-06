import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { CategoriesContext } from "../../contexts/category-context";

const ProductList = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  // console.log(products);

  return (
    <div >
      {/* {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })} */}

      {Object.keys(categoriesMap).map((title) => (
        <React.Fragment key={title}>
          <h1 className="text-center text-5xl">{title.toUpperCase()}</h1>
          <div className="flex flex-wrap justify-center">
            {categoriesMap[title].map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;

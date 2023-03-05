import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../../contexts/products-context";

const ProductList = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;

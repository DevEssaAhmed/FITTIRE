import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/category-context";
import ProductCard from "../../components/ProductCard/ProductCard";

const CategoryPage = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    (!products) ? <h1 className=" text-center text-4xl mt-48">No Products found for this category</h1> :
    
    <div className="mt-20">
      <h2 className="text-center text-5xl">{category.toUpperCase()}</h2>
      <div className="flex flex-wrap justify-center">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPage;

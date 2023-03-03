import React from 'react'
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard'
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductList from '../../components/ProductList/ProductList';

const ShopPage = () => {
  return (
    <div className="mt-20">
      <CategoriesCard />
      <ProductList/>
     {/* <ProductCard/> */}
    </div>
  );
}

export default ShopPage
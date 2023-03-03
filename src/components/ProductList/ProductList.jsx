import React from "react";
import itemsData from "../../data/shop-data.json";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
    return(
<div className="flex flex-wrap justify-center">
        {
            itemsData.map((item) => <ProductCard {...item} key={item.id} />)
        }
        </div>
        )
    };

export default ProductList;

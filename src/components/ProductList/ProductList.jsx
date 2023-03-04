import React,{useContext} from "react";
import itemsData from "../../data/shop-data.json";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../../contexts/products-context";

const ProductList = () => {
    const {products} = useContext(ProductsContext)
    return(
<div className="flex flex-wrap justify-center">
        {
            products.map((item) => <ProductCard {...item} key={item.id} />)
        }
        </div>
        )
    };

export default ProductList;

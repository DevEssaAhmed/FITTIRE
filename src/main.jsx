import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./contexts/user-context";
import "./index.css";
import { ProductsProvider } from "./contexts/products-context";
import { CartContext } from "./contexts/cart-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartContext>
          <App />
        </CartContext>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

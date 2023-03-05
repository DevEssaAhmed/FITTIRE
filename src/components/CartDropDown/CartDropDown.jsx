import React, { useContext } from "react";
import CartItem from "../../CartItem/CartItem";
import { CartContext } from "../../contexts/cart-context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div className=" absolute top-18 right-8 z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mt-6 text-center"> */}
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default CartDropDown;

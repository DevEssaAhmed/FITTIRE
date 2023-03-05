import React from "react";
import CartItem from "../../CartItem/CartItem";

const CartDropDown = () => {
  return (
    <div>
      <div className=" absolute top-18 right-8 z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* <div className="mt-6 text-center"> */}
        <CartItem />
      </div>
    </div>
    // </div>
  );
};

export default CartDropDown;

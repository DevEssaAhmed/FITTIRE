import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import CartDropDown from "../CartDropDown/CartDropDown";

import { UserContext } from "../../contexts/user-context";
import { auth, signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const [navColor, setColor] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { currentUser,setCurrentUser } = useContext(UserContext);


  //! This is not needed anymore 
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };

  return (
    <div className="fixed top-0   backdrop-blur-md  flex  items-center justify-between w-full h-20 px-4">
      <div className="ml-8">
        <Link to="/">
          <img className="w-48 hover:scale-105" src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex items-center  ml-5 text-[#47B5FF]">
          <li className="ml-5 hover:overline">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-5 hover:overline">
            <Link to="/shop">Shop </Link>
          </li>
          <li className="ml-5 hover:overline">
            <Link>Collection</Link>
          </li>
          <li className="ml-5">
            <Link to="" className="hover:text-[#1363DF]" href="">
              <i className="fa-solid fa-cart-shopping"></i>
              <CartDropDown/>
            </Link>
          </li>
          <li className="ml-5">
            {!currentUser ? (
              <Link to="/login">
                {" "}
                <button
                  className="nav-button
              bg-[#47B5FF] text-white px-4 py-2 rounded-md"
                  // onClick={() => setIsLoggedIn(false)}
                >
                  LogIn
                </button>
              </Link>
            ) : (
              <button
                className="nav-button  bg-[#47B5FF] text-white px-4 py-2 rounded-md"
                // onClick={() => setIsLoggedIn(true)}
                onClick={signOutUser}
              >
                LogOut
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

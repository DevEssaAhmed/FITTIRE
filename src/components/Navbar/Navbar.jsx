import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [navColor, setColor] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="fixed backdrop-blur-md  flex  items-center justify-between w-full h-20 px-4">
      <div className="ml-8">
        <img className="w-48" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center  ml-5 text-[#47B5FF]">
          <li className="ml-5">
            <Link>Home</Link>
          </li>
          <li className="ml-5">
            <Link>Shop </Link>
          </li>
          <li className="ml-5">
            <Link>Collection</Link>
          </li>
          <li className="ml-5">
            <Link
              to=""
              className={navColor ? "nav-links-scroll" : "nav-links"}
              href=""
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          <li className="ml-5">
            {isLoggedIn ? (
              <button
                className="nav-button
                bg-[#47B5FF] text-white px-4 py-2 rounded-md"
                onClick={() => setIsLoggedIn(false)}
              >
                LogIn
              </button>
            ) : (
              <button
                className="nav-button  bg-[#47B5FF] text-white px-4 py-2 rounded-md
                "
                onClick={() => setIsLoggedIn(true)}
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

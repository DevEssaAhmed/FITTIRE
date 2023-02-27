import React from "react";
import HeaderImg from "../../assets/header.png";

const Header = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex pt-48 p-20 justify-center item-center container mx-auto ">
        <div className="section">
          <h1 className="text-8xl text-[#1363DF] mb-8 font-bold">
            Fashion <span className="text-[#47B5FF]">Up</span>Your{" "}
            <span className="text-[#47B5FF]">Look</span>
          </h1>
          <p className="text-xl">
            Elevate your style with Fittire - your one-stop-shop for trendy and
            comfortable clothes online! Shop now for fast shipping and
            hassle-free returns.
          </p>
          <button className="mt-4 px-8 py-4 rounded-xl bg-[#1363df] text-white">
            SHOP NOW
          </button>
        </div>
        <div className="section">
          <img src={HeaderImg} alt="" />
        </div>
      </div>
      <div className="mx-auto p-4 m-12 text-center container">
        <h1 className="text-5xl mb-4 font-bold text-[#1363DF]">
          What We <span className="text-black">Do</span>
        </h1>
        <p>
          Fittire is your go-to destination for trendy and comfortable clothing
          online. We offer a wide range of styles and sizes for men and women,
          from workout clothes to casual wear. Our collections are carefully
          curated to keep up with the latest fashion trends and ensure you
          always look and feel your best. With fast and reliable shipping,
          hassle-free returns, and exceptional customer service, Fittire makes
          online clothes shopping a breeze. Shop now and elevate your wardrobe
          with our high-quality clothing at affordable prices!
        </p>
      </div>
    </div>
  );
};

export default Header;

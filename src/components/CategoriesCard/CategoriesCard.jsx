import React from 'react'

const CategoriesCard = () => {
  return (
    <div className="mx-auto  p-4 m-12 text-center container">
      <div className="">
        <h1 className="text-5xl mb-8 font-bold text-[#47B5FF]">
          Shop By Category
        </h1>
      </div>
      <div className="flex space-x-20 justify-center my-8">
        <h3 className="bg-[#F3F4F6] w-72 py-4">Men</h3>
        <h3 className="bg-[#F3F4F6] w-72 py-4">Women</h3>
        <h3 className="bg-[#F3F4F6] w-72 py-4">Children</h3>
      </div>
      <div className="flex space-x-20 justify-center">
        <h3 className="bg-[#F3F4F6] w-72 py-4">Shoes</h3>
        <h3 className="bg-[#F3F4F6] w-72 py-4">Bags</h3>
        <h3 className="bg-[#F3F4F6] w-72 py-4">Accessories</h3>
      </div>
    </div>
  );
}

export default CategoriesCard
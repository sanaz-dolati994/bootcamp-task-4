import React, { useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

function AddNewProduct() {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <div>
      <div className="pt-3 outline-none pr-5">
        <h2 className="text-white text-sm">Add New Product</h2>
        <div className="border rounded-lg bg-slate-700 w-[420px] h-56">
          <div className="pl-3">
            <div>
              <label className="text-sm text-slate-400">Title</label>
            </div>
            <input className="border w-52 border-slate-500 bg-slate-600 rounded-md focus:ring-1 ring-blue-500 outline-none" />

            <div className="mt-3">
              <label className="text-sm text-slate-400">Quantity</label>
              <div className="relative mt-1 mr-3 w-52 text-center border border-slate-500 bg-slate-600 rounded-md ">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className=" bg-slate-600 text-gray-400 focus:ring-1 ring-blue-500 outline-none w-52 rounded-md"
                />

                <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center ">
                  <button onClick={increaseQuantity} className="text-white  ">
                    <HiChevronUp size={10} />
                  </button>
                  <button onClick={decreaseQuantity} className="text-white   ">
                    <HiChevronDown size={10} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label className="text-sm text-slate-400">Category</label>
              <select
                placeholder="select category  "
                className="border border-slate-500 placeholder-gray-300 bg-slate-600 rounded-md focus:ring-1 ring-blue-500 outline-none w-[375px] text-sm"
              >
                <option className="text-sm text-slate-400">
                  Select category
                </option>
                <option className="text-sm text-slate-400">Category 1</option>
                <option className="text-sm text-slate-400">Category 2</option>
              </select>
            </div>

            <button className="border border-slate-500 bg-slate-600 rounded-md w-[375px] mt-3 text-white text-sm ">
              Add new Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewProduct;

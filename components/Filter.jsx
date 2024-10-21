import React, { useState } from "react";

function Filter({ sortBy, onSort, onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);

    onSearch(e.target.value);
  };

  return (
    <div className="pt-7">
      <div className="border-b">
        <h1 className="text-gray-500 text-sm">Filters</h1>
      </div>
      <div className="">
        <div className=" flex flex-row justify-between my-3">
          <label className="text-sm text-gray-500 pr-40">Search</label>
          <input
            value={search}
            onChange={handleSearchChange}
            className="border border-slate-500 bg-slate-800 rounded-md focus:ring-1 ring-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-row justify-between">
          <label className="text-sm text-gray-500">Sort</label>
          <select
            value={sortBy}
            onChange={onSort}
            className="border border-slate-500 bg-slate-800 rounded-md focus:ring-1 ring-blue-500 outline-none w-32"
          >
            <option className="text-gray-500 text-sm" value="latest">
              latest{" "}
            </option>
            <option className="text-gray-500  text-sm" value="earliest">
              {" "}
              earliest{" "}
            </option>
          </select>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <label className="text-sm text-gray-500">category</label>
          <select className="border border-slate-500 bg-slate-800 rounded-md focus:ring-1 ring-blue-500 outline-none w-14 text-sm ">
            <option className="text-sm text-slate-400">1</option>
            <option className="text-sm text-slate-400">2</option>
            <option className="text-sm text-slate-400">3</option>
            <option className="text-sm text-slate-400">4</option>
            <option className="text-sm text-slate-400">5</option>
            <option className="text-sm text-slate-400">6</option>
          </select>
        </div>
      </div>
      <div className="border-b font-bold text-gray-300">Product</div>
    </div>
  );
}

export default Filter;

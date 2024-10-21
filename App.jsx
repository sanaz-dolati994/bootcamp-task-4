import React, { useState } from "react";
import AddNewProduct from "./components/AddNewProduct";
import Filter from "./components/Filter";
import AddNewCategory from "./components/AddNewCategory";
function App() {
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    // سایر محصولات
  ];

  // فیلتر کردن محصولات براساس جستجو
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className=" min-h-screen bg-slate-800">
      <AddNewCategory />
      <div className="flex flex-row justify-center ">
        <AddNewProduct />

        <Filter
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
          onSearch={setSearchQuery}
        />
      </div>
    </div>
  );
}
export default App;

import React, { useState } from "react";

function AddNewCategory({ onAddCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleAddCategory = () => {
    // اطمینان از پر بودن فیلدها
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill in both title and description.");
      return;
    }

    const newCategory = {
      title,
      description,
    };

    onAddCategory(newCategory);

    setTitle("");
    setDescription("");
    setIsOpen(false);
  };

  return (
    <div className="pt-3 outline-none pl-[37px]">
      <h2 className="text-white text-sm cursor-pointer" onClick={toggleForm}>
        Add New Category?
      </h2>

      {isOpen && (
        <div className="border rounded-lg bg-slate-700 w-[420px] h-52 mt-3">
          <div className="pl-3">
            <div>
              <label className="text-sm text-slate-400">Title</label>
            </div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-slate-500 bg-slate-600 rounded-md focus:ring-1 ring-blue-500 outline-none"
            />
            <div>
              <label className="text-sm text-slate-400">Description</label>
            </div>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-slate-500 bg-slate-600 rounded-md focus:ring-1 ring-blue-500 outline-none py-3 w-[375px]"
            />

            <div className="flex flex-row justify-between mt-3">
              <button
                onClick={() => {
                  setTitle("");
                  setDescription("");
                  setIsOpen(false);
                }}
                className="border border-slate-500 bg-slate-600 rounded-md text-sm py-2 w-44 text-white"
              >
                Cancel
              </button>
              <div className="pr-8">
                <button
                  onClick={handleAddCategory}
                  className="border border-slate-500 bg-slate-600 rounded-md text-sm py-2 w-44 text-white"
                >
                  Add category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddNewCategory;

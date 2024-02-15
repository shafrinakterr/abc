/* eslint-disable react/prop-types */
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import UseDebounce from "../hooks/UseDebounce";

const Search = ({ onDebouce }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const handleToggleSearch = () => {
    setShowSearch(!showSearch);
  };
  
  const handleDoSearch = UseDebounce((text) => {
    onDebouce(text);
  }, 500);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleDoSearch(e.target.value);
  };
  
  return (
    <div className="flex items-center space-x-3 lg:space-x-2">
      {showSearch && (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="relative  overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <input
                type="search"
                id="search-dropdown"
                value={search}
                onChange={handleChange}
                className="z-20 block rounded-full text-black shadow-inner  border-black shadow-black w-full px-4 py-2  pr-10 focus:outline-none"
                placeholder="Search News"
                required
              />

              <button
                type="submit"
                className="absolute right-2 top-0 h-full rounded-e-lg  md:right-4"
              >
                <IoMdSearch className="text-2xl text-black" alt="Search" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      )}
      {showSearch ? (
        <RxCross2 className="text-2xl" onClick={() => setShowSearch(false)} />
      ) : (
        <IoMdSearch
          className="text-2xl"
          onClick={handleToggleSearch}
          alt="Search"
        />
      )}
    </div>
  );
};

export default Search;

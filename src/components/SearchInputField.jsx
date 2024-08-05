import {IoSearchOutline} from "react-icons/io5";

const SearchInputField = () => {
  return (
    <div className="flex items-center border border-gray-300 py-2 rounded-sm">
      <button
        className="flex-shrink-0 text-xl text-white py-1 px-2 rounded"
        type="button"
      >
        <IoSearchOutline />
      </button>
      <input
        className="appearance-none bg-transparent border-none w-full text-slate-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchInputField;

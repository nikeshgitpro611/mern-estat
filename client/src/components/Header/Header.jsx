import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineContentPasteSearch } from "react-icons/md";
// import  "./Header.css";
const Header = () => {
  const headerLink =
    "hidden sm:inline text-slate-700 hover:underline cursor-pointer";
  return (
    <header className="bg-slate-200 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-sm flex flex-wrap">
            <span className="text-slate-500">Logo</span>
            <span className="text-slate-700">Company</span>
          </h1>
        </Link>
        <form
          action=""
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="search here..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <MdOutlineContentPasteSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to='/'>
          <li className={headerLink}>Home</li>
          </Link>
          <Link to='/about'>
          <li className={headerLink}>About</li>
          </Link>
          <Link to='/sign-in'>
          <li className="sm:inline text-slate-700 hover:underline cursor-pointer">
            Sign In
          </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

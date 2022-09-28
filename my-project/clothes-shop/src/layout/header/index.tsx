import { SearchIcon, HeartIcon, CartIcon } from "../../components";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
const Header = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onToggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu, setIsOpenMenu]);

  const onOpenMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, [setIsOpenMenu]);

  const onCloseMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, [setIsOpenMenu]);

  return (
    <header className="w-full">
      <div className="h-9 bg-gray-100">
        <div className="container flex justify-between items-center h-full">
          <ul className="flex">
            <li className="px-2 text-sm hover:opacity-60 cursor-pointer">EN</li>
            <span className="text-xs mt-0.5">|</span>
            <li className="px-2 text-sm hover:opacity-60 cursor-pointer">RU</li>
          </ul>
          <ul className="flex">
            <li className="px-2 text-sm hover:opacity-60">
              <Link to="/help">Help</Link>
            </li>
            <span className="text-xs mt-0.5">|</span>
            <li className="px-2 text-sm hover:opacity-60">
              <Link to="/login">Sign In</Link>
            </li>
            <span className="text-xs mt-0.5">|</span>
            <li className="px-2 text-sm hover:opacity-60">
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sticky w-full top-0">
        <div className="relative bg-white">
          <div className="relative container h-16 flex justify-between items-center w-full">
            <div className="flex flex-col justify-center h-full">
              <Link
                to="/"
                className="mb-1 font-bold text-3xl tracking-wide hover:opacity-60"
              >
                Logo
              </Link>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  className="py-2 pb-2.5 px-12 h-10 rounded-[100px] outline-none max-w-[180px] w-full text-base leading-[1.5] placeholder:text-gray-400 bg-gray-100 hover:bg-gray-200 hover:placeholder:text-gray-500 font-normal"
                  placeholder="Search"
                ></input>
                <button className="absolute left-2 top-2">
                  <SearchIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="ml-6">
                <button className="rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-200">
                  <HeartIcon className="w-6 h-6 mt-1" />
                </button>
              </div>
              <div className="ml-5">
                <button className="rounded-full w-10 h-10 mt-1 flex justify-center items-center hover:bg-gray-200">
                  <CartIcon className="w-6 h-6 mb-0.5" />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-[50%] translate-x-[-50%]">
            <ul
              className="flex items-center h-16"
              onMouseOver={onOpenMenu}
              onMouseLeave={onCloseMenu}
            >
              <li className="px-3 text-lg font-normal cursor-pointer">
                New & Featured
              </li>
              <li className="px-3 text-lg font-normal cursor-pointer">Men</li>
              <li className="px-3 text-lg font-normal cursor-pointer">Woman</li>
              <li className="px-3 text-lg font-normal cursor-pointer">Kids</li>
              <li className="px-3 text-lg font-normal cursor-pointer">Sale</li>
            </ul>
          </div>
          <div
            onMouseOver={onOpenMenu}
            onMouseLeave={onCloseMenu}
            className={`${
              isOpenMenu ? "min-h-52 h-full" : "h-0 invisible"
            } top-[60px] transition-height duration-500 ease-in-out absolute bg-white w-full`}
          >
            {isOpenMenu && <div>Menu</div>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

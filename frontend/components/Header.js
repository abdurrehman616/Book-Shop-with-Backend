import React from "react";
import Link from "next/Link";

export const Header = () => {
  return (
    <div className="navbar shadow-lg bg-white text-neutral-content w-full lg:px-12">
      <div className="flex-1 px-2  mx-2 ">
        <Link href="/">
          <span className="text-lg font-bold text-black cursor-pointer">
            My Book Shop
          </span>
        </Link>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch text-black">
          <Link href="/">
            <span className="btn btn-ghost btn-sm rounded-btn">Home</span>
          </Link>
          <a className="btn btn-ghost btn-sm rounded-btn">My Books</a>
          <Link href="/browser">
            <span className="btn btn-ghost btn-sm rounded-btn">Browser</span>
          </Link>
          <a className="btn btn-ghost btn-sm rounded-btn">Community</a>
        </div>
      </div>
      <div className="flex-none pr-2">
        <button className="btn btn-info">Sign up</button>
      </div>
      <div className="flex-none">
        <Link href="/checkout">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

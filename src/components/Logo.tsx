import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <Link
        href="/"
        className="flex items-center justify-center rounded-full w-16 h-16 bg-dark text-white dark:border-1 dark:border-solid dark:border-dark"
        aria-label="Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 p-2"
        >
          <path d="M3 12L12 3l9 9" />
          <path d="M9 21V12h6v9" />
        </svg>
      </Link>
    </div>
  );
};
//ana sayfada üstteki logo ana sayfaya götürür
export default Logo;

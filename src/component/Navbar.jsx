import React from "react";

const Navbar = () => {
  const links = [
    { name: "Home", link: "#" },
    { name: "FAQ", link: "#" },
    { name: "Changelog", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Download", link: "#" },
    { name: "Contact", link: "#" },
  ];
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 hidden md:inline">
            CS — Ticket System
          </h1>
          <h1 className="text-2xl font-bold text-gray-800 md:hidden">CSTM</h1>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 font-semibold text-white transition-all rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] "
          >
            <span className="mr-2">+</span> New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

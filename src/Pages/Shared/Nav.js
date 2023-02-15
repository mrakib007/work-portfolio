import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">Rakib Hasan</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link >Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Works</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

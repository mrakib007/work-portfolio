import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Item 1</Link>
            </li>
            <li>
              <Link>Item 2</Link>
            </li>
            <li>
              <Link>Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

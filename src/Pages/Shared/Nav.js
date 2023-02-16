import React, { useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const Nav = () => {
  // const [click,setClick] = useState(false);
  // const handleClick = () => setClick(click)
  // const closeMenu = () => setClick(false);
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <Link  className="btn btn-ghost normal-case text-xl">Rakib Hasan</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link id="home">Home</Link>
            </li>
            <li>
              <Link id="about">About</Link>
            </li>
            <li>
              <Link href="#works">Works</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

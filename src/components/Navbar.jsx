import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <section>
      <nav className="flex flex-row justify-between items-center p-4 pt-6">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <p className="font-bold uppercase font-serif">SoundArc</p>
        </div>
        <div className="flex">
          <div>
            <ul className="flex border-2 border-zinc-100 space-x-6 px-8  font-medium uppercase bg-zinc-950 p-3 rounded-full text-zinc-100">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">Product</a>
              </li>
              <li>
                <a href="#services">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <button className=" cursor-pointer uppercase flex items-center gap-2 py-2 text-black bg-zinc-100 pl-4 pr-0.5 rounded-full">
              order now
            <span className="bg-zinc-950 text-zinc-100 px-2 py-1 rounded-full">
              <FontAwesomeIcon icon={faArrowTrendUp} />
            </span>

            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

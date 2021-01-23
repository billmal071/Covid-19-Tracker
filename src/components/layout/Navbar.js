import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {

  const hamburger = () => {
    console.log('menu button clicked');
    if (document.getElementById('menu-content').classList.contains('hidden')) {
      document.getElementById('menu-content').classList.add('flex');
      document.getElementById('menu-content').classList.remove('hidden');
    } else {
      document.getElementById('menu-content').classList.remove('flex');
      document.getElementById('menu-content').classList.add('hidden');
    }
  }

  return (
    <div className="sticky top-0">
      <nav className="flex flex-row justify-between p-5 bg-black shadow-md">
        <h1 className="self-center">
          <NavLink exact to="/home" className="text-white text-xl lg:text-3xl hover:text-gray-600 font-bold">Covid-19 App</NavLink>
        </h1>
        <ul className="lg:flex flex-row hidden">
          <li>
            <NavLink exact to="/home" className="px-2 text-white text-xl hover:text-gray-400 font-bold"
                     activeStyle={{color: 'gray'}}>Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/covid-daily" className="px-2 text-white text-xl hover:text-gray-400 font-bold"
                     activeStyle={{color: 'gray'}}>Covid Daily</NavLink>
          </li>
          <li>
            <NavLink exact to="/" className="px-2 text-white text-xl hover:text-gray-400 font-bold"
                     activeStyle={{color: 'gray'}}>Covid Stats</NavLink>
          </li>
        </ul>
        <div id="menu" className="flex lg:hidden cursor-pointer" onClick={() => hamburger()}>
          <i className="fas fa-bars fa-2x text-white">
          </i>
        </div>
      </nav>
      <ul className="hidden flex-col py-4 pl-2 bg-black" id="menu-content">
        <li className="my-2">
          <NavLink exact to="/home" className="px-2 hover:text-gray-400 text-lg md:text-xl text-white font-bold"
                   activeStyle={{color: 'gray'}}>Home</NavLink>
        </li>
        <li className="my-2">
          <NavLink exact to="/covid-daily" className="px-2 hover:text-gray-400 text-lg md:text-xl text-white font-bold"
                   activeStyle={{color: 'gray'}}>Covid Daily</NavLink>
        </li>
        <li className="my-2">
          <NavLink exact to="/" className="px-2 hover:text-gray-400 text-lg md:text-xl text-white font-bold"
                   activeStyle={{color: 'gray'}}>Covid Stats</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

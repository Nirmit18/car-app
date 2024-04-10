import React from "react";

const Navbar = (props) => {
  return (
    <nav className="bg-blue-900 text-white p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-lg">Car Details</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

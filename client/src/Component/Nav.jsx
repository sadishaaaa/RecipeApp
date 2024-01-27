import React from "react";

const Nav = () => {
  const navItems = [
    { title: "Home", url: "/" },
    { title: "Recipe", url: "/" },
  ];
  return (
    <nav>
      <div className="text-xl">
        <div>
          <a
            href="/"
            className="text-2xl text-secondary font-semibold flex item-center space-x-3"
          >
            Recipez
          </a>
          <ul className="md:flex space-x-12">
            {navItems.map(({ title, url }) => (
              <a key={title} href={url} className="block hover:text-gray-300">
                {title}
              </a>
            ))}
          </ul>
        </div>

        {/* signup and login */}
        <div className="space-x-12 hidden md:flex items-center">
          <button
            className="bg-secondary py-2 px-4 transition-all duration-300 rounded hoverLtext-white hover:bg-indigo-600"
            type="button"
          >
            Log In
          </button>
          <button type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

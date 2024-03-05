import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/jsai-logo.png";

//TODO set redirect to home page on logo click
function Header() {
  const navigate = useNavigate();

  const handleNavigatoToHomePage = () => {
    navigate("/");
  };

  return (
    <header
      id="page-header"
      className="relative flex flex-none items-center py-8"
    >
      <div className="container mx-auto flex flex-col space-y-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 xl:max-w-7xl">
        <div className="logo-div">
          <a
            href="javascript:void(0)"
            className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            onClick={handleNavigatoToHomePage}
          >
            <img className="logo" src={logo} alt="AI Javascript" />
          </a>
        </div>
        <nav className="space-x-3 md:space-x-6">
          <a
            href="javascript:void(0)"
            className=" hover:text-yellow-300 text-l font-medium leading-relaxed text-gray-600  "
          >
            <span>About</span>
          </a>
          <a
            href="javascript:void(0)"
            className="text-l font-medium leading-relaxed text-gray-600  hover:text-yellow-300 "
          >
            <span>Pricing</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

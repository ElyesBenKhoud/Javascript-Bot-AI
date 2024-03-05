import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/jsai-logo.png";

function Header() {
  const navigate = useNavigate();

  const handleNavigatoToHomePage = () => {
    navigate("/");
  };

  return (
    <header
      id="page-header"
      className="relative flex flex-none items-center py-8"
      data-testid="header"
      style={{ userSelect: "none" }}
    >
      <div className="container mx-auto flex flex-col space-y-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 xl:max-w-7xl">
        <div className="logo-div">
          <button
            className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            onClick={handleNavigatoToHomePage}
          >
            <img className="logo" src={logo} alt="AI Javascript" />
          </button>
        </div>
        <nav className="space-x-3 md:space-x-6">
          <button className=" hover:text-yellow-300 text-l font-medium leading-relaxed text-gray-600  ">
            <span>About</span>
          </button>
          <button className="text-l font-medium leading-relaxed text-gray-600  hover:text-yellow-300 ">
            <span>Pricing</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

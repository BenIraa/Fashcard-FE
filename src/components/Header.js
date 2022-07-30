import React from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = ({handleLogout}) => {
  return (
    <>
    <div class="w-60 h-full shadow-md bg-white px-1 absolute">
    <ul class="relative">
      <li class="relative">
        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
         <Link to="create" className="hover:text-blue-200 transition duration-300">
            Create Card
          </Link> 
        </a>
      </li>
      <li class="relative">
        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
        <Link to="viewCards" className="hover:text-blue-200 transition duration-300">
            View Cards
          </Link>
        </a>
      </li>
      <li class="relative">
        <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-200 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">

        <button
          onClick={handleLogout}
            className="text-blue  border border-solid border-white rounded py-2.5 px-5 bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200"
          >
            Sign Out
          </button>
        </a>
      </li>
    </ul>
  </div>







    </>
  );
};

export default LandingHeader;

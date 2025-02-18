import PropTypes from 'prop-types';
import { useState } from 'react';
import logo from '/images/logo.png';

function Header({ page }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pages = [
    'home.Trang chủ',
    'about.Về Canary',
    'events.Sự kiện',
    'stories.Câu chuyện',
    'donate.Ủng hộ',
  ];
  const baseName = '/Canary-Charity-Club/';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-20 shadow-md shadow-gray-200 bg-primary text-primary-paragraph">
      <div
        className="absolute left-5 sm:left-10 md:left-20 lg:left-36 w-20 h-20 bg-cover bg-center"
        style={{ backgroundImage: `url("${logo}")` }}
      ></div>
      <div className="flex justify-between items-center h-full px-4">
        <div className="hidden md:block flex-grow">
          <ul className="flex justify-center h-full">
            {pages
              .map((page) => page.split('.'))
              .map((pg, index) => (
                <li key={`page_${index}`} className="w-28 h-full">
                  <a
                    href={pg[0] === "home" ? `${baseName}#/` : `${baseName}#/${pg[0]}`}
                    className={
                      page === pg[0]
                        ? 'text-secondary font-bold hover:text-secondary-hover'
                        : 'hover:text-primary-hover'
                    }
                  >
                    {pg[1]}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="md:hidden absolute right-10">
          <button
            onClick={toggleDropdown}
            className="text-primary-paragraph focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="block md:hidden absolute left-0 right-0 bg-primary">
          <ul className="flex flex-col items-center">
            {pages
              .map((page) => page.split('.'))
              .map((pg, index) => (
                <li key={`dropdown_page_${index}`} className="w-full text-center">
                  <a
                    href={pg[0] === "home" ? `${baseName}#/` : `${baseName}#/${pg[0]}`}
                    className={
                      page === pg[0]
                        ? 'text-secondary font-bold hover:text-secondary-hover block py-2'
                        : 'hover:text-primary-hover block py-2'
                    }
                  >
                    {pg[1]}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  page: PropTypes.string,
};

export default Header;
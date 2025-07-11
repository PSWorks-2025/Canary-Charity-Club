import PropTypes from "prop-types";
import { useState, useContext } from "react";
import GlobalContext from "../../contexts/global";
import logo from "/images/logo.png";
import { useNavigate } from "react-router-dom";
import useDocData from "../../hooks/useDocData";
function Header() {
  const navigate = useNavigate();

  const globalComponentsData = useDocData('Global', 'components');

  const { currentPage, basePath } = useContext(GlobalContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pages = {
    home:   "Trang chủ",
    about:  "Về Canary",
    events: "Sự kiện",
    stories:"Câu chuyện",
    donate: "Ủng hộ",
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-20 shadow-md shadow-gray-200 bg-primary text-primary-paragraph">
      <div
        className="absolute left-5 sm:left-10 md:left-20 lg:left-36 w-20 h-20 bg-cover bg-center"
        style={{ backgroundImage: `url("${globalComponentsData?.logo || logo}")` }}
      ></div>
      <div className="flex justify-between items-center text-center h-full px-4">
        <div className="hidden md:block h-full flex-grow">
          <ul className="flex justify-center h-full">
            {Object.entries(pages)
              .map(([pageId, pageName]) => (
                <li key={`page_${pageId}`} className="w-28 h-full">
                  <button
                    type="button"
                    onClick={() => navigate(`${basePath}/${pageId}`)}
                    className={` w-full h-full transition-colors duration-200 cursor-pointer 
                      ${
                        currentPage === pageId
                          ? "text-secondary font-bold hover:text-primary hover:bg-secondary"
                          : "hover:text-primary-hover hover:bg-primary-darken"
                      }
                      `}
                  >
                    {pageName}
                  </button>
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
            {Object.entries(pages)
              .map(([pageId, pageName]) => (
                <li
                  key={`dropdown_page_${pageId}`}
                  className="w-full text-center"
                >
                  <button
                    type="button"
                    onClick={() => navigate(`${basePath}/${pageId}`)}
                    className={` w-full h-full transition-colors duration-200 cursor-pointer 
                      ${
                        currentPage === pageId
                          ? "text-secondary font-bold hover:text-primary hover:bg-secondary"
                          : "hover:text-primary-hover hover:bg-primary-darken"
                      }
                      `}
                  >
                    {pageName}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;

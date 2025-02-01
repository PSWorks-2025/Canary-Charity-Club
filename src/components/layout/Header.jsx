import PropTypes from "prop-types";

import logo from "/images/logo.png";

function Header({ page }) {
  const pages = [
    "home.Trang chủ",
    "about.Về Canary",
    "events.Sự kiện",
    "stories.Câu chuyện",
    "donate.Ủng hộ",
  ];
  const baseName = "/Canary-Charity-Club/"
  return (
    <div className="w-full h-20 shadow-md shadow-gray-200 bg-primary text-primary-paragraph">
      <div
        className="absolute left-36 w-20 h-20 bg-cover bg-center"
        style={{ backgroundImage: `url("${logo}")` }}
      ></div>
      <ul
        className="
        grow-1
        flex
        justify-center
        h-full
        [&>li]:w-28
        [&>li]:h-full
        [&>li>a]:flex
        [&>li>a]:w-full
        [&>li>a]:h-full
        [&>li>a]:justify-center
        [&>li>a]:items-center
        [&>li>a]:transition
        "
      >
        {pages
          .map((page) => page.split("."))
          .map((pg, index) => (
            <li key={`page_${index}`}>
              <a
                href={pg[0] === "home" ? `${baseName}` : `${baseName+pg[0]}`}
                className={
                  page === pg[0]
                    ? "text-secondary font-bold hover:text-secondary-hover"
                    : "hover:text-primary-hover"
                }
              >
                {pg[1]}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

Header.propTypes = {
  page: PropTypes.string,
};

export default Header;

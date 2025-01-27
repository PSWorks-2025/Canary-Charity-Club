import logo from '/images/logo.png'

function Header() {
  return (
    <div className="w-full h-20 shadow-md shadow-gray-200 bg-primary text-primary-paragraph">
      <div className="absolute left-36 w-20 h-20 bg-cover bg-center" style={{backgroundImage: `url("${logo}")`}}></div>
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
        [&>li>a]:hover:text-primary-hover
        [&>li>a]:transition
        "
      >
        <li>
          <a href="#">
            <div>Trang chủ</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>Về Canary</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>Sự kiện</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>Câu chuyện</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div>Ủng hộ</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;

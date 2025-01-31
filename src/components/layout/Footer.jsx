import logo from '/images/logo.png';

function Footer() {
  return (
    <>
      <div className="w-full h-32"></div>
      <div className="w-full px-30 py-8 bg-secondary text-secondary-paragraph">
        <div className="w-full flex">
            <div className="w-1/2 px-10">
              <div className="h-16 flex items-center">
                <div className="h-11 bg-primary-bg rounded-full w-11 bg-cover bg-center" style={{backgroundImage: `url("${logo}")`}}></div>
                <div className="ml-4 font-bold ">
                  CANARY
                </div>
              </div>
              <p>Website CANARY - Nền tảng gây quỹ cộng đồng trực tuyến tiện lợi, tin cậy và minh bạch.</p>
              <br />
              <p>Hotline: 0333.456.789</p>
              <p>Email: kenlee@gmail.com</p>
              <p>Địa chỉ: lô A2 Trần Đăng Ninh, P.Hòa Cường Bắc, Q.Hải Châu, Đà Nẵng</p>
            </div>
            <div className="w-1/2 px-10 [&>a]:block [&>a]:hover:text-secondary-hover [&>a]:transition">
              <div className="h-16 flex items-center font-bold">
                Truyền thông
              </div>
              <a href="https://www.facebook.com">Facebook</a>
              <a href="https://www.youtube.com">Youtube</a>
              <a href="https://www.tiktok.com">Tiktok</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

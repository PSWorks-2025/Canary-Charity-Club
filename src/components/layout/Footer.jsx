import useDocData from '../../hooks/useDocData';
import logo from '/images/logo.png';

function Footer() {
  const globalComponentsData = useDocData('Global', 'components');

  return (
    <>
      <div className="w-full px-30 py-8 bg-secondary text-secondary-paragraph mt-16">
        <div className="w-full flex">
          <div className="w-1/2 px-10">
            <div className="h-16 flex items-center">
              <div
                className="h-11 bg-primary rounded-full w-11 bg-cover bg-center"
                style={{ backgroundImage: `url("${globalComponentsData?.logo || logo}")` }}
              ></div>
              <div className="ml-4 font-bold ">CANARY</div>
            </div>
            <p>
              Website CANARY - Nền tảng gây quỹ cộng đồng trực tuyến tiện lợi,
              tin cậy và minh bạch.
            </p>
            <br />
            <p>Hotline: {globalComponentsData?.hotline || '+84 000 000 001'}</p>
            <p>Email: {globalComponentsData?.email || 'kenlee@gmail.com'}</p>
            <p>
              Địa chỉ: {globalComponentsData?.address || 'Số 1, Đường ABC, Quận XYZ, TP. Hồ Chí Minh'}
            </p>
          </div>
          <div className="w-1/2 px-10 [&>a]:block [&>a]:hover:text-secondary-hover [&>a]:hover:translate-x-1 [&>a]:transition">
            <div className="h-16 flex items-center font-bold">Truyền thông</div>
            <a href={globalComponentsData?.social_media?.facebook || '/'}>Facebook</a>
            <a href={globalComponentsData?.social_media?.youtube || '/'}>Youtube</a>
            <a href={globalComponentsData?.social_media?.tiktok || '/'}>Tiktok</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

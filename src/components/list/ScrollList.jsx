import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import PropTypes from 'prop-types'


export function ScrollListItem({ imageUrl, title, description, href }) {
  return (
    <div className="w-88 mr-7 h-full">
      <div className="w-full h-60 bg-cover bg-center rounded-lg" style={{backgroundImage: `url("${imageUrl}")`}}></div>
      <div className="font-bold text-2xl pt-5 text-primary-title">
        {title}
      </div>
      <p className="w-full text-base/5 py-5 text-primary-paragraph">
        {description}
      </p>
      <a href={href} className="text-secondary font-semibold">
        Đọc thêm
        <IoIosArrowForward className="inline-block mb-0.5" />
      </a>
    </div>
  )
}

ScrollListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string
}

export function ScrollList({ children }) {

  const numberOfPages = Math.ceil(children.length / 3);

  const [page, setPage] = useState(0);


  return (
    <div className="w-278 h-124 relative">
      <button onClick={() => setPage(Math.max(page - 1, 0))} className="w-12 h-12 absolute -left-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer">
        <IoIosArrowBack className="w-6 h-6"/>
      </button>
      <button onClick={() => setPage(Math.min(page + 1, numberOfPages-1))} className="w-12 h-12 absolute -right-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer">
        <IoIosArrowForward className="w-6 h-6"/>
      </button>
      <div className="w-full h-full overflow-hidden">
        <div className="w-10000 h-full flex transition-all duration-750" style={{marginLeft : `calc(${-285 * page} * var(--spacing))`}}>
          {children}
        </div>
      </div>
    </div>
  )
}

ScrollList.propTypes = {
  children: PropTypes.array
}
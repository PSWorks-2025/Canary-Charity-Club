import PropTypes from 'prop-types'
import './global.css'

import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'

function Layout({ child }) {
  return (
    <>
      <Header />
      {child}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  child: PropTypes.element
}

export default Layout

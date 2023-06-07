import './index.css'

const Header = () => (
  <nav className="header-con">
    <img
      className="head-logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="head-gestures-con">
      <li className="head-title-sty">Home</li>
      <li className="head-title-sty">Products</li>
      <li className="head-title-sty">Cart</li>
      <button type="button" className="head-btn-sty">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header

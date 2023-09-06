import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import ReactPopUp from '../ReactPopUp'

import './index.css'

const Header = () => {
  console.log('')

  return (
    <div>
      <nav className="navbar row apart align-item">
        <div>
          <Link to="/">
            <img
              className="site-logo"
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
            />
          </Link>
        </div>
        <div>
          <ReactPopUp>
            <div className="">
              <ul>
                <li>
                  <Link to="/" className="link">
                    <div>
                      <AiFillHome />
                      Home
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    <BsInfoCircleFill />
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </ReactPopUp>
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default Header

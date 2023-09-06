import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {ImCross} from 'react-icons/im'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = ({children}) => {
  console.log(children)
  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button
            className="trigger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="icon" />
          </button>
        }
        modal="true"
        // position="right"
      >
        {close => (
          <div className="col  modal-container">
            <div className="row ">
              <button
                data-testid="closeButton"
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                <ImCross className="icon-cross" />
              </button>
            </div>
            {children}
          </div>
        )}
      </Popup>
    </div>
  )
}
export default ReactPopUp

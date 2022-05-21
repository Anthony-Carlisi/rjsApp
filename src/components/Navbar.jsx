import './Styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faBars,
  faCalendar,
  faMagnifyingGlass,
  faBell,
} from '@fortawesome/free-solid-svg-icons'
import logo from './assets/solidifyLogo.png'
function Navbar() {
  return (
    <nav className='navContainer'>
      <div className='navLeft'>
        <div className='navIconContainer'>
          <FontAwesomeIcon icon={faBars} className='navIcons' />
        </div>
        <img className='navLogo' src={logo} alt='' />
      </div>
      <div className='navSearch'>
        <input type='text' placeholder='Search' className='navSearchBox' />
        <div className='navIconContainer'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='navIcons' />
        </div>
      </div>
      <div className='navRight'>
        <div className='navIconContainer'>
          <FontAwesomeIcon icon={faPhone} className='navIcons' />
        </div>
        <div className='navIconContainer'>
          <FontAwesomeIcon icon={faEnvelope} className='navIcons' />
        </div>
        <div className='navIconContainer'>
          <FontAwesomeIcon icon={faCalendar} className='navIcons' />
        </div>
        <div className='navIconContainer'>
          <FontAwesomeIcon icon={faBell} className='navIcons' />
        </div>
        <div className='navAvatarContainer'>
          <p className='navAvatarText'>B</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

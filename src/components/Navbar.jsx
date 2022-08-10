import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isShrunk, setShrunk] = useState(false)
  const [drawerToggle, setDrawerToggle] = useState(false)
  const mediaQuery = useMediaQuery('(min-width: 1100px)')

  // console.log(mobileMediaQuery)
  const styles = {
    navContainer: {
      display: 'flex',
      position: 'sticky',
      top: '0px',
      backgroundColor: '#ffffff',
      fontFamily: 'Lato',
      borderBottom: (isShrunk || !mediaQuery) && '1px solid rgb(218, 218, 218)',
      padding: '0px 15px',
      minHeight: '70px',
      zIndex: '5',
    },
    link: {
      alignSelf: 'center',
      padding: '0 10px',
      cursor: 'pointer',
      maxHeight: '70px',
      color: 'rgb(74, 74, 74)',
    },
    logo: {
      height: '53px',
      width: '200px',
      marginTop: !isShrunk && mediaQuery ? '50px' : '0',
      transition: '0.2s',
      transform: isShrunk && mediaQuery && 'scale(0.8)',
    },
    flexGrow: {
      flex: '1',
      display: 'flex',
    },
    button: {
      alignSelf: 'center',
      fontSize: '1rem',
      position: 'relative',
      cursor: 'pointer',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      transformOrigin: 'center center',
      padding: '0px 10px',
      borderRadius: '5px',
      color: 'rgb(255, 255, 255)',
      backgroundColor: '#23c686',
      border: '1px solid transparent',
      transition: 'all 0.3s ease 0s, transform 0.5s ease 0s',
      boxShadow: 'rgb(35 198 134 / 50%) 0px 10px 40px -10px',
      height: '40px',
      top: isShrunk ? '0px' : '-100px',
    },
    drawer: {
      height: '100%' /* 100% Full-height */,
      width: drawerToggle
        ? '15rem'
        : '0' /* 0 width - change this with JavaScript */,
      position: 'fixed' /* Stay in place */,
      zIndex: '10' /* Stay on top */,
      top: '0' /* Stay at the top */,
      left: '0',
      backgroundColor: '#111' /* Black*/,
      overflowX: 'hidden' /* Disable horizontal scroll */,
      paddingTop: '60px' /* Place content 60px from the top */,
      transition:
        '0.5s' /* 0.5 second transition effect to slide in the sidenav */,
    },
    overlay: {
      height: '100%',
      width: drawerToggle ? '100%' : '0',
      position: 'fixed',
      zIndex: '9',
    },
  }

  const handleToggle = () => {
    setDrawerToggle(!drawerToggle)
  }

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 60 ||
            document.documentElement.scrollTop > 60)
        )
          return true

        if (
          isShrunk &&
          document.body.scrollTop < 5 &&
          document.documentElement.scrollTop < 5
        )
          return false

        return isShrunk
      })
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <div style={styles.drawer}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div style={styles.overlay} onClick={handleToggle}></div>

      <nav style={styles.navContainer}>
        <div
          style={Object.assign({}, styles.flexGrow, {
            justifyContent: 'flex-start',
          })}
        >
          {mediaQuery ? (
            <>
              <a
                style={styles.link}
                href='https://google.com'
                target='_blank'
                rel='noreferrer'
              >
                Financing options
              </a>
              <a
                style={styles.link}
                href='https://google.com'
                target='_blank'
                rel='noreferrer'
              >
                Calculators
              </a>
              <a
                style={styles.link}
                href='https://google.com'
                target='_blank'
                rel='noreferrer'
              >
                How it works
              </a>
            </>
          ) : (
            <div style={styles.link}>
              <FontAwesomeIcon
                type='button'
                onClick={handleToggle}
                icon={faBars}
                style={{ fontSize: '20px' }}
              />
            </div>
          )}
        </div>
        <div
          style={Object.assign({}, styles.flexGrow, {
            justifyContent: 'center',
            alignSelf: 'center',
          })}
        >
          <img style={styles.logo} src={logo} alt='Solidify USA Logo' />
        </div>
        <div
          style={Object.assign({}, styles.flexGrow, {
            justifyContent: 'flex-end',
            minWidth: '100px',
          })}
        >
          {mediaQuery && (
            <a
              style={styles.link}
              href='https://google.com'
              target='_blank'
              rel='noreferrer'
            >
              My Account
            </a>
          )}
          <button style={styles.button}>
            {mediaQuery ? 'Check Qualifications' : 'Qualify'}
          </button>
        </div>
      </nav>
    </>
  )
}
export default Navbar

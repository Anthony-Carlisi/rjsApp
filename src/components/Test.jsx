import { useState } from 'react'
import './Test.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faPhone,
  faUser,
  faInfo,
  faCircleArrowUp,
} from '@fortawesome/free-solid-svg-icons'

function Test() {
  const [headerDropDown, setHeaderDropDown] = useState(false)

  const headerDropDownMenu = () => {
    headerDropDown === false
      ? setHeaderDropDown(true)
      : setHeaderDropDown(false)
  }

  const imageArray = [
    'https://picsum.photos/10',
    'https://picsum.photos/20',
    'https://picsum.photos/30',
    'https://picsum.photos/40',
    'https://picsum.photos/10',
    'https://picsum.photos/20',
    'https://picsum.photos/30',
    'https://picsum.photos/40',
    'https://picsum.photos/10',
    'https://picsum.photos/20',
    'https://picsum.photos/20',
    'https://picsum.photos/20',
    'https://picsum.photos/20',
    'https://picsum.photos/20',
    'https://picsum.photos/20',
    'https://picsum.photos/20',
    'https://picsum.photos/20',
    'https://picsum.photos/20',
  ]

  var imgMargin

  imageArray.length > 9
    ? (imgMargin = 300 / (imageArray.length - 1))
    : (imgMargin = -20)
  console.log(imgMargin)
  return (
    <>
      <header>
        <div onClick={headerDropDownMenu}>
          <ul>
            {imageArray.map((image, index) => {
              return (
                <li
                  key={index}
                  style={
                    index !== 0
                      ? { marginRight: imgMargin }
                      : { marginRight: 0 }
                  }
                >
                  <img src={image} alt='test' />
                </li>
              )
            })}
          </ul>
          <div>
            <span className='headerTitle'>
              Anthony Carlisi, John Smith, Joe Shomoco quod.
            </span>
            <span>
              {headerDropDown === true ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronRight} />
              )}
            </span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Test

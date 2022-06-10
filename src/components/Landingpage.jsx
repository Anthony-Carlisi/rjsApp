import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faShop,
  faBuilding,
  faHandshake,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import './Styles.css'
import HowMuchCard from './HowMuchCard'

function Landingpage() {
  const [entityType, setEntityType] = useState('')
  const navigate = useNavigate()

  // const upperCase = (sentence) => {
  //   const words = sentence.split(' ')
  //   for (let i = 0; i < words.length; i++) {
  //     words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  //   }
  //   return words.join(' ')
  // }

  const entityInfo = [
    {
      value: 'Limited Liability Company',
      icon: faBriefcase,
    },
    {
      value: 'S Corporation',
      icon: faShop,
    },
    {
      value: 'C Corporation',
      icon: faBuilding,
    },
    {
      value: 'Partnership',
      icon: faHandshake,
    },
    {
      value: 'Sole Proprietor',
      icon: faUserTie,
    },
  ]

  return (
    <div>
      <form>
        <div className='flexBoxHeader'>
          <h1 className='headerTopTitle'>What type of business do you own?</h1>
          <p className='headerTitle'>
            Just answer a few questions to see your options. It’s free & won’t
            impact your credit score.
          </p>
        </div>
        <div className='flexBox'>
          {entityInfo.map(({ value, icon }, index) => (
            <ul key={index}>
              <li>
                <button
                  className='entityTypeCard'
                  type='button'
                  value={value.toLowerCase()}
                  onClick={(e) => {
                    e.preventDefault()
                    setEntityType(e.target.value)
                  }}
                >
                  <FontAwesomeIcon size='3x' color='#1f4058' icon={icon} />
                  <div>{value}</div>
                </button>
              </li>
            </ul>
          ))}
        </div>
      </form>
    </div>
  )
}

export default Landingpage

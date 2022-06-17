import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faShop,
  faBuilding,
  faHandshake,
  faUserTie,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import './Styles.css'

function Landingpage() {
  // eslint-disable-next-line
  const [entityType, setEntityType] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [requestedAmount, setRequestedAmount] = useState('')
  const [month, setMonth] = useState('')
  const [continueButtonState, setContinueButtonState] = useState(true)
  const [monthSelect, setMonthSelect] = useState(false)

  // List of entity info
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

  // List of Months
  const months = [
    {
      value: 'January',
    },
    {
      value: 'February',
    },
    {
      value: 'March',
    },
    {
      value: 'April',
    },
    {
      value: 'May',
    },
    {
      value: 'June',
    },
    {
      value: 'July',
    },
    {
      value: 'August',
    },
    {
      value: 'September',
    },
    {
      value: 'October',
    },
    {
      value: 'November',
    },
    {
      value: 'December',
    },
  ]

  // Sets Value for Currency
  const currencyValueDisplay = (e) => {
    // Convert to number
    const value = Number(e.target.value.replace(/,/g, ''))
    // Error Check
    if (isNaN(value)) {
      return setRequestedAmount((prev) => {
        return prev
      })
    }
    // Mask input with commas removed decimals
    const currencyValue = (value / 1).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    // If value = 0 removes 0 and disables continue button
    if (currencyValue <= 0 || !currencyValue) {
      setRequestedAmount('')
      setContinueButtonState(true)
      return
    }
    // If pass value is set and continue button is enabled
    setRequestedAmount(currencyValue)
    setContinueButtonState(false)
  }

  // Button to go back to previous question
  const prevQuestionButton = (
    <div
      className='previous-question'
      type='button'
      onClick={() => {
        setCurrentQuestion(currentQuestion - 1)
        setContinueButtonState(false)
      }}
    >
      <FontAwesomeIcon
        className='previous-question-icon'
        color='#1f4058'
        icon={faArrowLeft}
      />
      <div>Previous</div>
    </div>
  )

  const continueButton = (
    <button
      onClick={() => {
        setCurrentQuestion(currentQuestion + 1)
        setContinueButtonState(true)
      }}
      className={`continue-button ${
        continueButtonState === true
          ? 'continue-button-disabled'
          : 'continue-button-enabled'
      }`}
      disabled={continueButtonState}
      type='button'
    >
      CONTINUE
      <span>
        <FontAwesomeIcon
          className={continueButtonState ? 'display-none' : 'continue-icon'}
          icon={faArrowRight}
        />
      </span>
    </button>
  )

  // Button to go back to previous question
  const monthsCard = <div> Months Card</div>

  const questions = [
    {
      header: (
        <div className='header-title'>
          <h1>What type of business do you own?</h1>
          <p>
            Just answer a few questions to see your options. It’s free & won’t
            impact your credit score.
          </p>
        </div>
      ),
      // Company Type Question
      question: (
        <div className='flex-box-wrapper'>
          {entityInfo.map(({ value, icon }, index) => (
            <ul key={index}>
              <li>
                <button
                  className='company-type-card'
                  type='button'
                  value={value.toLowerCase()}
                  onClick={(e) => {
                    e.preventDefault()
                    setEntityType(value.toLowerCase())
                    setCurrentQuestion(currentQuestion + 1)
                  }}
                >
                  <FontAwesomeIcon size='3x' color='#1f4058' icon={icon} />
                  <div>{value}</div>
                </button>
              </li>
            </ul>
          ))}
        </div>
      ),
    },
    {
      header: (
        <div className='header-title'>
          <h1>How much money do you need?</h1>
        </div>
      ),
      // Requested Amount Question
      question: (
        <div>
          <div className='input-container symbol' style={{ width: 300 }}>
            <div className={requestedAmount && 'filled'}>$</div>
            <input
              type='text'
              onKeyPress={(e) => {
                if (e.key === 'Enter' && requestedAmount) {
                  setCurrentQuestion(currentQuestion + 1)
                  setContinueButtonState(true)
                }
              }}
              value={requestedAmount}
              onChange={currencyValueDisplay}
            />
            <label className={`symbol ${requestedAmount && 'filled'}`}>
              Loan Amount
            </label>
          </div>
          {continueButton}
        </div>
      ),
    },
    {
      header: (
        <div className='header-title'>
          <h1>When did you start your business?</h1>
          <p>If you don't remember the month, take your best guess.</p>
        </div>
      ),
      // Month & Year Questions
      question: (
        <div>
          <div className='input-container' style={{ width: 170 }}>
            <input
              type='text'
              // value={month}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && month) {
                  setCurrentQuestion(currentQuestion + 1)
                }
              }}
              // onChange={currencyValueDisplay}
              onClick={() => {
                setMonthSelect(true)
              }}
            />
            <label className={month && 'filled'}>Select Month</label>
          </div>
          <div className='flex-box-wrapper' style={{ width: 300 }}>
            {months.map(({ value }, index) => (
              <ul key={index}>
                <li>
                  <button
                    className='months-card'
                    type='button'
                    value={value.toLowerCase()}
                    onClick={(e) => {
                      e.preventDefault()
                      // setEntityType(value.toLowerCase())
                      // setCurrentQuestion(currentQuestion + 1)
                    }}
                  >
                    <div>{value}</div>
                  </button>
                </li>
              </ul>
            ))}
          </div>
          {monthSelect && monthsCard}
          {continueButton}
        </div>
      ),
    },
  ]

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className='form-wrapper'>
          {currentQuestion > 0 ? prevQuestionButton : ''}
          {questions[currentQuestion].header}
          {questions[currentQuestion].question}
        </div>
      </form>
    </div>
  )
}

export default Landingpage

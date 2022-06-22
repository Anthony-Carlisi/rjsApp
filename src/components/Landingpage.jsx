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
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons'
import './Styles.css'
import InputField from './assets/InputField'

function Landingpage() {
  // eslint-disable-next-line
  const [entityType, setEntityType] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [requestedAmount, setRequestedAmount] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [continueButtonState, setContinueButtonState] = useState(true)
  const [monthSelect, setMonthSelect] = useState(false)
  const [inputError, setInputError] = useState({
    label: '',
    value: false,
  })

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && continueButtonState === false) {
      setCurrentQuestion(currentQuestion + 1)
      setContinueButtonState(true)
    }
  }

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
  const onChangeRequestedAmount = (e) => {
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
      setInputError({ value: false })
      setContinueButtonState(true)
      return
    }
    // If pass value is set and continue button is enabled
    setRequestedAmount(currencyValue)

    if (currencyValue.toString().length >= 4) {
      setContinueButtonState(false)
      setInputError({ value: false })
    } else {
      setContinueButtonState(true)
      setInputError({ label: 'Four Digits Minimum', value: true })
    }
  }

  const onChangeYear = (e) => {
    // Convert to number
    const value = Number(e.target.value)
    // Error Check
    if (isNaN(value)) {
      return setYear((prev) => {
        return prev
      })
    }
    const valueLength = value.toString().length
    // Error Check to see if year is between 1900 - current year
    const yearCheck = value < 1900 || value > 2022
    // If value is 0 clears field
    if (value === 0) {
      setInputError({ value: false })
      setYear('')
      return
    }
    // If date is less than 4 digits error message
    valueLength < 4
      ? setInputError({ label: 'Four Digits', value: true })
      : setInputError({ value: false })

    // Error Check set input error if year check is true
    if (valueLength === 4 && yearCheck === true)
      setInputError({ label: 'Enter Valid Year', value: true })

    // Sets the Year
    setYear(value)

    // If month is filled and year has 4 values continue button enabled
    if (month && yearCheck === false && valueLength === 4) {
      setContinueButtonState(false)
      setInputError({ value: false })
    } else {
      setContinueButtonState(true)
    }
  }

  // Button to go back to previous question
  const prevQuestionButton = (
    <div
      className='previous-question-container'
      type='button'
      onClick={() => {
        setCurrentQuestion(currentQuestion - 1)
        // Error check on first question answer and back
        if (currentQuestion !== 1) setContinueButtonState(false)
      }}
    >
      <FontAwesomeIcon
        className='previous-question-icon'
        color='#1f4058'
        icon={faArrowLeft}
      />
      Previous
    </div>
  )

  const continueButton = (
    <button
      onClick={() => {
        setContinueButtonState(true)
        setCurrentQuestion(currentQuestion + 1)
      }}
      className={`continue-button ${
        continueButtonState === true
          ? 'continue-button-disabled'
          : 'continue-button-enabled'
      }`}
      disabled={continueButtonState}
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

  const errorHandle = () => {
    // console.log(test)
  }

  const questions = [
    {
      header: (
        <div className='header-title-container'>
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
                  <FontAwesomeIcon
                    size='2x'
                    className='entity-icon'
                    color='#1f4058'
                    icon={icon}
                  />
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
        <div className='header-title-container'>
          <h1>How much money do you need?</h1>
        </div>
      ),
      // Requested Amount Question
      question: (
        <div className='flex-column-center'>
          <InputField
            value={requestedAmount}
            label={'Loan Amount'}
            type={'tel'}
            size={12}
            enableIcon={true}
            icon={faDollarSign}
            onChange={onChangeRequestedAmount}
            onKeyPress={onKeyPress}
            enableError={inputError.value}
            errorLabel={inputError.label}
          />
          {continueButton}
        </div>
      ),
    },
    {
      header: (
        <div className='header-title-container'>
          <h1>When did you start your business?</h1>
          <p>If you don't remember the month, take your best guess.</p>
        </div>
      ),
      // Month & Year Questions
      question: (
        <div className='flex-column-center'>
          <div className='flex-center'>
            <InputField
              value={month}
              label={'Select Month'}
              type={'text'}
              size={12}
              inputMode={'none'}
              onChange={errorHandle}
              onClick={() => {
                setMonthSelect(true)
              }}
            />

            <InputField
              value={year}
              label={'YYYY'}
              type={'tel'}
              maxLength={4}
              size={7}
              onChange={onChangeYear}
              onKeyPress={onKeyPress}
              enableError={inputError.value}
              errorLabel={inputError.label}
            />
          </div>
          <div className={!monthSelect ? 'display-none' : 'months-container'}>
            {months.map(({ value }, index) => (
              <ul key={index}>
                <li>
                  <button
                    className='months-card'
                    type='button'
                    value={value.toLowerCase()}
                    onClick={(e) => {
                      e.preventDefault()
                      setMonth(value)
                      setMonthSelect(false)
                      if (year && inputError.value === false)
                        setContinueButtonState(false)
                    }}
                  >
                    <div>{value}</div>
                  </button>
                </li>
              </ul>
            ))}
          </div>
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
        <div className='form-container'>
          {currentQuestion > 0 ? prevQuestionButton : ''}
          {questions[currentQuestion].header}
          {questions[currentQuestion].question}
        </div>
      </form>
    </div>
  )
}

export default Landingpage

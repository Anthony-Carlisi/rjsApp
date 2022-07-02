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
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import './Styles.css'
import InputField from './InputField'

function Landingpage() {
  const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]

  // List of Months
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // List of Months
  const purposes = [
    'Expansion',
    'Working Capital',
    'Payroll',
    'Purchase a Business',
    'Equipment',
    'Real Estate',
    'Buy Out a Partner',
    'Start a Business',
    'Fiance Accounts Receivables',
    'Other',
  ]

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

  // eslint-disable-next-line
  const [entityType, setEntityType] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [amount, setAmount] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [month, setMonth] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [year, setYear] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [monthly, setMonthly] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [firstName, setFirstName] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [lastName, setLastName] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [companyName, setCompanyName] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [phone, setPhone] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [email, setEmail] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [purpose, setPurpose] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: [],
  })
  const [state, setState] = useState({
    errorEnabled: true,
    errorLabel: '',
    value: '',
  })
  const [monthSelect, setMonthSelect] = useState(false)
  const [stateSelect, setStateSelect] = useState(false)
  const [stateSearch, setStateSearch] = useState(states)

  const onKeyPress = (e, errorEnabled) => {
    const errorCheck = Array.isArray(errorEnabled)
      ? !errorEnabled.includes(true)
      : !errorEnabled

    if (e.key === 'Enter') e.preventDefault()

    if (e.key === 'Enter' && errorCheck) setCurrentQuestion(currentQuestion + 1)
  }

  const currencyValue = (value) => {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  }

  // Sets Value for Currency
  const onChangeAmount = (e) => {
    const value = Number(e.target.value.replace(/,|\D/g, ''))

    setAmount((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value =
        value === 0
          ? ((updatedState.value = ''), (updatedState.errorLabel = ''))
          : currencyValue(value)

      if (value.toString().length >= 4) {
        updatedState.errorEnabled = false
      } else {
        updatedState.errorEnabled = true
        updatedState.errorLabel = 'Four Digits Minimum'
      }

      return updatedState
    })
  }

  const onClickMonth = (value) => {
    setMonthSelect(false)
    setMonth((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value = value
      updatedState.errorEnabled = false

      return updatedState
    })
  }

  const onClickState = (e) => {
    e.preventDefault()
    setState((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value = e.target.value
      updatedState.errorEnabled = false

      return updatedState
    })
  }

  const onChangeYear = (e) => {
    const value = Number(e.target.value.replace(/\D/g, ''))
    const yearCheck = value < 1900 || value > 2022

    setYear((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value =
        value === 0
          ? ((updatedState.value = ''), (updatedState.errorLabel = ''))
          : value

      if (value.toString().length >= 4 && !yearCheck) {
        updatedState.errorEnabled = false
      } else if (value.toString().length === 4 && yearCheck) {
        updatedState.errorEnabled = true
        updatedState.errorLabel = 'Enter Valid Year'
      } else {
        updatedState.errorEnabled = true
        updatedState.errorLabel = 'Four Digits'
      }

      return updatedState
    })
  }

  const onChangeMonthly = (e) => {
    const value = Number(e.target.value.replace(/,|\D/g, ''))

    setMonthly((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value =
        value === 0
          ? ((updatedState.value = ''), (updatedState.errorLabel = ''))
          : currencyValue(value)

      if (value.toString().length >= 3) {
        updatedState.errorEnabled = false
      } else {
        updatedState.errorEnabled = true
        updatedState.errorLabel = 'Three Digits Minimum'
      }
      return updatedState
    })
  }

  const onChangeState = (e) => {
    const value = e.target.value
    setState((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value = value
      updatedState.errorEnabled = true

      const newSearchArray = states.filter((x) =>
        x.toLowerCase().includes(value.toLowerCase())
      )
      setStateSearch(newSearchArray)

      return updatedState
    })
  }

  const onChangeFirstName = (e) => {
    setFirstName((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value = e.target.value.replace(/[0-9]/g, '')
      updatedState.value
        ? (updatedState.errorEnabled = false)
        : (updatedState.errorEnabled = true)

      return updatedState
    })
  }

  const onChangeLastName = (e) => {
    setLastName((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value = e.target.value.replace(/[0-9]/g, '')
      updatedState.value
        ? (updatedState.errorEnabled = false)
        : (updatedState.errorEnabled = true)

      return updatedState
    })
  }

  const onChangeCompanyName = (e) => {
    setCompanyName((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value = e.target.value
      updatedState.value
        ? (updatedState.errorEnabled = false)
        : (updatedState.errorEnabled = true)

      return updatedState
    })
  }
  const onChangePhone = (e) => {
    let x = e.target.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
    const value = !x[2]
      ? x[1]
      : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')

    setPhone((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value =
        value === 0
          ? ((updatedState.value = ''), (updatedState.errorLabel = ''))
          : value

      if (value.toString().length >= 14) {
        updatedState.errorEnabled = false
      } else {
        updatedState.errorEnabled = true
        updatedState.errorLabel = 'Please enter a valid phone number'
      }

      return updatedState
    })
  }
  const onChangeEmail = (e) => {
    const value = e.target.value

    setEmail((prev) => {
      let updatedState = Object.assign({}, prev)
      updatedState.value = value

      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )

      if (pattern.test(value)) {
        updatedState.errorEnabled = false
      } else {
        updatedState.errorEnabled = true
        updatedState.errorLabel = 'Please enter a valid email address'
      }

      return updatedState
    })
  }

  const onClickPurpose = (value) => {
    setPurpose((prev) => {
      let updatedState = Object.assign({}, prev)

      updatedState.value.includes(value) === true
        ? (updatedState.value = updatedState.value.filter(
            (item) => item !== value
          ))
        : (updatedState.value = [...updatedState.value, value])

      // Error check to see if value is filled if filled errorEnabled is set to false
      !updatedState.value.length
        ? (updatedState.errorEnabled = true)
        : (updatedState.errorEnabled = false)

      return updatedState
    })
  }

  const errorHandle = () => {
    // console.log(test)
  }

  // Button to go back to previous question
  const prevQuestionButton = (
    <div
      className='previous-question-container'
      type='button'
      onClick={() => {
        setCurrentQuestion(currentQuestion - 1)
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

  const ContinueButton = ({ onClick, errorEnabled, type }) => {
    const errorCheck = Array.isArray(errorEnabled)
      ? !errorEnabled.every((value) => value === false)
      : errorEnabled
    return (
      <button
        type={type}
        onClick={onClick}
        className={`continue-button ${
          errorCheck === true
            ? 'continue-button-disabled'
            : 'continue-button-enabled'
        }`}
        disabled={errorCheck}
      >
        CONTINUE
        <span>
          <FontAwesomeIcon
            className={errorCheck ? 'display-none' : 'continue-icon'}
            icon={faArrowRight}
          />
        </span>
      </button>
    )
  }

  const questions = [
    {
      header: {
        title: `What type of business do you own?`,
        subTitle: `Just answer a few questions to see your options. It’s free & won’t
        impact your credit score.`,
      },
      // Company Type Question
      question: (
        <div className='flex-box-wrapper'>
          {entityInfo.map(({ value, icon }, index) => (
            <ul key={index}>
              <li>
                <button
                  className='company-type-card'
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
      header: {
        title: `How much money do you need?`,
      },
      // Requested Amount Question
      question: (
        <div className='flex-column-center'>
          <InputField
            value={amount.value}
            label={'Loan Amount'}
            type={'tel'}
            size={20}
            height='45px'
            onChange={onChangeAmount}
            onKeyPress={(e) => onKeyPress(e, amount.errorEnabled)}
            errorEnabled={amount.errorEnabled}
            errorLabel={amount.errorLabel}
          />
          <ContinueButton
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            errorEnabled={amount.errorEnabled}
          />
        </div>
      ),
    },
    {
      header: {
        title: `When did you start your business?`,
        subTitle: `If you don't remember the month, take your best guess.`,
      },
      // Month & Year Questions
      question: (
        <div className='flex-column-center'>
          <div className='flex-center'>
            <InputField
              value={month.value}
              label={'Select Month'}
              type={'text'}
              size={12}
              height='45px'
              inputMode={'none'}
              onChange={errorHandle}
              onFocus={() => {
                setMonthSelect(true)
              }}
              onBlur={() =>
                setTimeout(() => {
                  setMonthSelect(false)
                }, 300)
              }
              onKeyPress={(e) => {
                e.preventDefault()
                onKeyPress(e, [year.errorEnabled, month.errorEnabled])
              }}
            />

            <InputField
              value={year.value}
              label={'YYYY'}
              type={'tel'}
              maxLength={4}
              size={7}
              height='45px'
              errorEnabled={year.errorEnabled}
              errorLabel={year.errorLabel}
              onChange={onChangeYear}
              onKeyPress={(e) => {
                onKeyPress(e, [year.errorEnabled, month.errorEnabled])
              }}
            />
          </div>
          <div className={!monthSelect ? 'display-none' : 'months-container'}>
            {months.map((value, index) => (
              <ul key={index}>
                <li>
                  <button
                    className='months-card'
                    value={value}
                    onClick={(e) => {
                      e.preventDefault()
                      onClickMonth(value)
                    }}
                  >
                    <div>{value}</div>
                  </button>
                </li>
              </ul>
            ))}
          </div>
          <ContinueButton
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            errorEnabled={[year.errorEnabled, month.errorEnabled]}
          />
        </div>
      ),
    },
    {
      header: {
        title: `What's your average monthly revenue over the last 3 months?`,
      },
      // Requested Amount Question
      question: (
        <div className='flex-column-center'>
          <InputField
            value={monthly.value}
            label={'Average monthly revenue'}
            type={'tel'}
            size={25}
            height='45px'
            maxLength={11}
            enableIcon={true}
            icon={faDollarSign}
            onChange={onChangeMonthly}
            onKeyPress={(e) => onKeyPress(e, monthly.errorEnabled)}
            errorEnabled={monthly.errorEnabled}
            errorLabel={monthly.errorLabel}
          />
          <ContinueButton
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            errorEnabled={monthly.errorEnabled}
          />
        </div>
      ),
    },
    {
      header: {
        title: `What are you getting financing for?`,
        subTitle: `Select your loan purpose(s)`,
      },
      // Company Type Question
      question: (
        <div className='flex-column-center'>
          <div className='flex-box-wrapper'>
            {purposes.map((value, index) => (
              <ul key={index}>
                <li>
                  <button
                    className={
                      purpose.value.includes(value) === true
                        ? 'company-type-card company-type-card-active'
                        : 'company-type-card'
                    }
                    value={value}
                    onClick={(e) => {
                      e.preventDefault()
                      onClickPurpose(value)
                    }}
                  >
                    <div>{value}</div>
                  </button>
                </li>
              </ul>
            ))}
          </div>
          <ContinueButton
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            errorEnabled={purpose.errorEnabled}
          />
        </div>
      ),
    },
    {
      header: {
        title: `What's the name of your business?`,
        subTitle: `This information will only be shared with our authorized lending
        partners if you choose to view your lending options.`,
      },
      // Requested Amount Question
      question: (
        <div className='flex-column-center'>
          <InputField
            value={companyName.value}
            label={'Business name'}
            type={'text'}
            height='45px'
            size={30}
            onChange={onChangeCompanyName}
            onKeyPress={(e) => onKeyPress(e, [companyName.errorEnabled])}
            errorEnabled={companyName.errorEnabled}
            errorLabel={companyName.errorLabel}
          />
          <ContinueButton
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            errorEnabled={companyName.errorEnabled}
          />
        </div>
      ),
    },
    {
      header: {
        title: `Which state is your business in?`,
      },
      // Requested Amount Question
      question: (
        <div className='flex-column-center'>
          <InputField
            value={state.value}
            label={'Search and select a state'}
            type={'text'}
            height='45px'
            size={30}
            onChange={onChangeState}
            onFocus={() => {
              setStateSelect(true)
            }}
            onBlur={() =>
              setTimeout(() => {
                setStateSelect(false)
              }, 300)
            }
            onKeyPress={(e) => onKeyPress(e, [state.errorEnabled])}
            errorEnabled={state.errorEnabled}
            errorLabel={state.errorLabel}
            dropdownEnabled={stateSelect}
            dropdownOptions={stateSearch}
            onClickButton={onClickState}
          />

          <ContinueButton
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            errorEnabled={state.errorEnabled}
          />
        </div>
      ),
    },
    {
      header: {
        title: `What's your name?`,
      },
      // Requested Amount Question
      question: (
        <div className='flex-column-center'>
          <InputField
            value={firstName.value}
            label={'First Name'}
            type={'text'}
            height='45px'
            size={30}
            onChange={onChangeFirstName}
            onKeyPress={(e) =>
              onKeyPress(e, [firstName.errorEnabled, lastName.errorEnabled])
            }
            errorEnabled={firstName.errorEnabled}
          />
          <InputField
            value={lastName.value}
            label={'Last Name'}
            type={'text'}
            height='45px'
            size={30}
            onChange={onChangeLastName}
            onKeyPress={(e) =>
              onKeyPress(e, [firstName.errorEnabled, lastName.errorEnabled])
            }
            errorEnabled={lastName.errorEnabled}
          />
          <ContinueButton
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            errorEnabled={[firstName.errorEnabled, lastName.errorEnabled]}
          />
        </div>
      ),
    },
    {
      header: {
        title: `Congratulations, you have funding partner matches!`,
      },
      // Requested Amount Question
      question: (
        <div className='flex-column-center'>
          <ContinueButton
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          />
        </div>
      ),
    },
    {
      header: {
        title: `What's the best way to reach you?`,
      },
      // Requested Amount Question
      question: (
        <div className='flex-column-center'>
          <InputField
            value={phone.value}
            label={'Your phone number'}
            type={'tel'}
            size={25}
            height='45px'
            maxLength={14}
            enableIcon={true}
            icon={faPhone}
            onChange={onChangePhone}
            onKeyPress={(e) =>
              onKeyPress(e, [phone.errorEnabled, email.errorEnabled])
            }
            errorEnabled={phone.errorEnabled}
            errorLabel={phone.errorLabel}
          />
          <InputField
            value={email.value}
            label={'Your Email'}
            type={'email'}
            height='45px'
            size={25}
            enableIcon={true}
            icon={faEnvelope}
            onChange={onChangeEmail}
            onKeyPress={(e) =>
              onKeyPress(e, [phone.errorEnabled, email.errorEnabled])
            }
            errorEnabled={email.errorEnabled}
            errorLabel={email.errorLabel}
          />
          <ContinueButton
            type={'submit'}
            errorEnabled={[phone.errorEnabled, email.errorEnabled]}
          />
        </div>
      ),
    },
  ]

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('submitted')
          console.log([entityType, amount.value])
        }}
      >
        <div className='form-container'>
          {currentQuestion > 0 ? prevQuestionButton : ''}
          <div className='header-title-container'>
            <h1>{questions[currentQuestion].header.title}</h1>
            {questions[currentQuestion].header.subTitle && (
              <p>{questions[currentQuestion].header.subTitle}</p>
            )}
          </div>
          {questions[currentQuestion].question}
        </div>
      </form>
    </div>
  )
}

export default Landingpage

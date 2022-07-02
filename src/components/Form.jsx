import { useState } from 'react'
import {
  Slide,
  Center,
  PrevButton,
  FormContainer,
  Button,
  DropDownRow,
} from './styles/Form.styled'
import InputField from './InputField'
import CardSelect from './CardSelect'
import {
  minMaxLength,
  currencyValue,
  validEmail,
  findObject,
} from './utils/Validations'
import AutoComplete from './AutoComplete'
import Sandbox from './Sandbox'
import {
  faBriefcase,
  faShop,
  faBuilding,
  faHandshake,
  faUserTie,
  faArrowLeft,
  faArrowRight,
  faDollarSign,
  // faPhone,
  // faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Form() {
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
    {
      value: 'Expansion',
    },
    {
      value: 'Working Capital',
    },
    {
      value: 'Payroll',
    },
    {
      value: 'Purchase a Business',
    },
    {
      value: 'Equipment',
    },
    {
      value: 'Real Estate',
    },
    {
      value: 'Buy Out a Partner',
    },
    {
      value: 'Start a Business',
    },
    {
      value: 'Fiance Accounts Receivables',
    },
    {
      value: 'Other',
    },
  ]
  const [form, setForm] = useState({
    companyType: '',
    loanAmount: '',
    month: '',
    year: '',
    monthly: '',
    loanPurposes: [],
    companyName: '',
    state: '',
    stateSuggestion: states,
  })
  const [formErrors, setFormErrors] = useState({
    loanAmount: '',
    month: '',
    monthSelect: false,
    year: '',
    monthly: '',
    loanPurposes: '',
    companyName: '',
    state: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    let Value
    switch (name) {
      case 'companyName':
        setForm({ ...form, companyName: value })

        minMaxLength(value, 3)
          ? setFormErrors({
              ...formErrors,
              [name]: `3 Characters minimum`,
            })
          : delete formErrors[name]
        break
      case 'state':
        setForm({ ...form, state: value })
        break

      case 'companyType':
        e.preventDefault()
        setForm({ ...form, companyType: value })
        break

      case 'loanPurposes':
        e.preventDefault()

        if (form.loanPurposes.includes(value) === true) {
          setForm({
            ...form,
            loanPurposes: form.loanPurposes.filter((item) => item !== value),
          })
          if (form.loanPurposes.length <= 1) {
            setFormErrors({ ...formErrors, loanPurposes: '' })
          }
        } else {
          setForm({
            ...form,
            loanPurposes: [...form.loanPurposes, value],
          })
          delete formErrors.loanPurposes
        }
        break

      case 'month':
        e.preventDefault()
        setForm({ ...form, month: value })
        delete formErrors[name]
        break

      case 'monthSelect':
        e.type === 'blur'
          ? setTimeout(() => {
              setFormErrors({
                ...formErrors,
                monthSelect: false,
              })
            }, 300)
          : setFormErrors({
              ...formErrors,
              monthSelect: true,
            })
        break

      case 'email':
        setForm({ ...form, email: value })

        validEmail(value)
          ? setFormErrors({
              ...formErrors,
              [name]: `Enter a Valid Email`,
            })
          : delete formErrors[name]
        break

      case 'loanAmount':
        Value = value.replace(/\D/g, '')
        setForm({ ...form, loanAmount: Value })

        minMaxLength(Value, 4)
          ? setFormErrors({
              ...formErrors,
              [name]: `4 digits minimum`,
            })
          : delete formErrors[name]
        break

      case 'monthly':
        Value = value.replace(/\D/g, '')
        setForm({ ...form, monthly: Value })

        minMaxLength(Value, 4)
          ? setFormErrors({
              ...formErrors,
              [name]: `4 digits minimum`,
            })
          : delete formErrors[name]
        break

      case 'year':
        setForm({ ...form, year: value.replace(/\D/g, '') })
        const yearCheck = value < 1900 || value > 2022

        if (minMaxLength(value, 4)) {
          setFormErrors({
            ...formErrors,
            [name]: `4 digits minimum`,
          })
        } else if (yearCheck) {
          setFormErrors({
            ...formErrors,
            [name]: `Enter a Valid Year`,
          })
        } else {
          delete formErrors[name]
        }
        break

      default:
        break
    }
  }

  const PrevQuestion = () => (
    <PrevButton
      type='button'
      onClick={() => {
        // setCurrentQuestion(currentQuestion - 1)
      }}
    >
      <FontAwesomeIcon id={'icon'} color='#1f4058' icon={faArrowLeft} />
      Previous
    </PrevButton>
  )

  return (
    <FormContainer>
      <Slide>
        <PrevQuestion />
        <h1>What type of business do you own?</h1>
        <p id='sub'>
          Just answer a few questions to see your options. It’s free & won’t
          impact your credit score.
        </p>
        <CardSelect
          onClick={handleChange}
          array={entityInfo}
          name={'companyType'}
        />
      </Slide>

      <Slide>
        <PrevQuestion />
        <h1>How much money do you need?</h1>
        <Center>
          <InputField
            value={currencyValue(Number(form.loanAmount))}
            label={'Loan Amount'}
            type={'tel'}
            size={20}
            name='loanAmount'
            onChange={handleChange}
            errorLabel={formErrors.loanAmount}
          />
        </Center>
        <Center>
          <Button
            // onClick={onClick}
            disabled={formErrors.hasOwnProperty('loanAmount')}
          >
            CONTINUE
            {!formErrors.hasOwnProperty('loanAmount') && (
              <FontAwesomeIcon id={'icon'} icon={faArrowRight} />
            )}
          </Button>
        </Center>
      </Slide>

      <Slide>
        <PrevQuestion />
        <h1>When did you start your business?</h1>
        <p id='sub'>If you don't remember the month, take your best guess</p>
        <Center>
          <InputField
            value={form.month}
            label={'Select Month'}
            type={'text'}
            size={12}
            name={'monthSelect'}
            inputMode={'none'}
            onFocus={handleChange}
            onBlur={handleChange}
            errorLabel={formErrors.month}
          />

          <InputField
            value={form.year}
            label={'YYYY'}
            type={'tel'}
            name={'year'}
            maxLength={4}
            size={7}
            errorLabel={formErrors.year}
            onChange={handleChange}
          />
        </Center>
        <Center>
          {formErrors.monthSelect && (
            <DropDownRow>
              {months.map((value, index) => (
                <ul key={index}>
                  <li>
                    <button
                      className='months-card'
                      value={value}
                      name={'month'}
                      onClick={handleChange}
                    >
                      <div>{value}</div>
                    </button>
                  </li>
                </ul>
              ))}
            </DropDownRow>
          )}
        </Center>
        <Center>
          <Button
            onClick={handleChange}
            disabled={findObject(formErrors, ['year', 'month'])}
            name={'month'}
          >
            CONTINUE
            {!findObject(formErrors, ['year', 'month']) && (
              <FontAwesomeIcon id={'icon'} icon={faArrowRight} />
            )}
          </Button>
        </Center>
      </Slide>

      <Slide>
        <PrevQuestion />
        <h1>What's your average monthly revenue over the last 3 months?</h1>
        <Center>
          <InputField
            value={currencyValue(Number(form.monthly))}
            label={'Average monthly revenue'}
            type={'tel'}
            size={20}
            name='monthly'
            icon={faDollarSign}
            onChange={handleChange}
            errorLabel={formErrors.monthly}
          />
        </Center>
        <Center>
          <Button
            // onClick={onClick}
            disabled={formErrors.hasOwnProperty('monthly')}
          >
            CONTINUE
            {!formErrors.hasOwnProperty('monthly') && (
              <FontAwesomeIcon id={'icon'} icon={faArrowRight} />
            )}
          </Button>
        </Center>
      </Slide>

      <Slide>
        <PrevQuestion />
        <h1>What are you getting financing for?</h1>
        <p id='sub'>Select your loan purpose(s)</p>
        <CardSelect
          onClick={handleChange}
          array={purposes}
          name={'loanPurposes'}
          currentValues={form.loanPurposes}
        />
        <Center>
          <Button
            // onClick={onClick}
            disabled={formErrors.hasOwnProperty('loanPurposes')}
          >
            CONTINUE
            {!formErrors.hasOwnProperty('loanPurposes') && (
              <FontAwesomeIcon id={'icon'} icon={faArrowRight} />
            )}
          </Button>
        </Center>
      </Slide>

      <Slide>
        <PrevQuestion />
        <h1>What's the name of your business?</h1>
        <p id='sub'>
          This information will only be shared with our authorized lending
          partners if you choose to view your lending options.
        </p>
        <Center>
          <InputField
            value={form.companyName}
            label={'Business name'}
            type={'tel'}
            size={20}
            name='companyName'
            onChange={handleChange}
            errorLabel={formErrors.companyName}
          />
        </Center>
        <Center>
          <Button
            // onClick={onClick}
            disabled={formErrors.hasOwnProperty('companyName')}
          >
            CONTINUE
            {!formErrors.hasOwnProperty('companyName') && (
              <FontAwesomeIcon id={'icon'} icon={faArrowRight} />
            )}
          </Button>
        </Center>
      </Slide>

      <Slide>
        <PrevQuestion />
        <h1>Which state is your business in?</h1>
        <Center>
          <Sandbox
            value={form.state}
            label={'Search and select a state'}
            size={30}
            name='state'
            onChange={handleChange}
            errorLabel={formErrors.state}
          />
        </Center>
        <AutoComplete input={form.state} options={states} />

        <Center>
          <Button
            // onClick={onClick}
            disabled={formErrors.hasOwnProperty('state')}
          >
            CONTINUE
            {!formErrors.hasOwnProperty('state') && (
              <FontAwesomeIcon id={'icon'} icon={faArrowRight} />
            )}
          </Button>
        </Center>
      </Slide>

      <div className='mb-3'>
        <button type='submit'>Create Account</button>
      </div>
    </FormContainer>
  )
}

export default Form

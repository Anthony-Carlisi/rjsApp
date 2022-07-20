import { useState } from 'react'
import { months, purposes, entityInfo, states } from './utils/StaticData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputField from './InputField'
import CardSelect from './CardSelect'
import {
  Slide,
  Center,
  PrevButton,
  FormContainer,
  Button,
} from './styles/Form.styled'
import {
  minMaxLength,
  currencyValue,
  validEmail,
  findObject,
  findInArray,
  filterOptions,
} from './utils/Validations'
import {
  faArrowLeft,
  faArrowRight,
  faDollarSign,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

function Form() {
  const [form, setForm] = useState({
    companyType: '',
    loanAmount: '',
    month: '',
    year: '',
    monthly: '',
    loanPurposes: [],
    companyName: '',
    state: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })
  const [formErrors, setFormErrors] = useState({
    loanAmount: '',
    month: '',
    year: '',
    monthly: '',
    loanPurposes: '',
    companyName: '',
    state: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })
  const [index, setIndex] = useState({
    month: 0,
    state: 0,
  })
  const [options, setOptions] = useState({
    month: months,
    state: states,
  })
  const [currentStep, setCurrentStep] = useState(6)

  const handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'month':
        setForm({ ...form, [name]: value })
        setIndex({ ...index, [name]: 0 })
        setOptions({ ...options, [name]: filterOptions(months, value) })
        if (findInArray(months, value).length === 1) {
          setForm({ ...form, [name]: findInArray(months, value)[0] })
          delete formErrors[name]
        } else {
          setFormErrors({
            ...formErrors,
            [name]: 'Please select or enter month',
          })
        }
        break

      case 'state':
        setForm({ ...form, [name]: value })
        setIndex({ ...index, [name]: 0 })
        setOptions({ ...options, [name]: filterOptions(states, value) })
        if (findInArray(states, value).length === 1) {
          setForm({ ...form, [name]: findInArray(states, value)[0] })
          delete formErrors[name]
        } else {
          setFormErrors({
            ...formErrors,
            [name]: 'Please select or enter state',
          })
        }
        break

      case 'companyType':
      case 'firstName':
      case 'lastName':
      case 'companyName':
        e.preventDefault()
        setForm({ ...form, [name]: value })

        value
          ? delete formErrors[name]
          : setFormErrors({ ...formErrors, [name]: '' })

        break

      case 'loanPurposes':
        e.preventDefault()
        if (form.loanPurposes.includes(value) === true) {
          setForm({
            ...form,
            loanPurposes: form.loanPurposes.filter((item) => item !== value),
          })

          if (form.loanPurposes.length <= 1)
            setFormErrors({ ...formErrors, loanPurposes: '' })
        } else {
          setForm({
            ...form,
            loanPurposes: [...form.loanPurposes, value],
          })
          delete formErrors.loanPurposes
        }
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

      case 'phone':
        var x = e.target.value
          .replace(/\D/g, '')
          .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
        e.target.value = !x[2]
          ? x[1]
          : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')

        e.target.value.length === 14
          ? delete formErrors[name]
          : setFormErrors({
              ...formErrors,
              [name]: `Enter valid phone number`,
            })
        setForm({ ...form, [name]: e.target.value })

        break

      case 'monthly':
      case 'loanAmount':
        setForm({ ...form, [name]: value.replace(/\D/g, '') })
        minMaxLength(value.replace(/\D/g, ''), 4)
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
    <PrevButton type='button' name={'prevButton'} onClick={handleClick}>
      <FontAwesomeIcon id={'icon'} color='#1f4058' icon={faArrowLeft} />
      Previous
    </PrevButton>
  )

  const ContinueButton = ({ fieldCheck }) => {
    return (
      <Button
        onClick={handleClick}
        name={'continueButton'}
        disabled={findObject(formErrors, fieldCheck)}
      >
        CONTINUE
        {!findObject(formErrors, fieldCheck) && (
          <FontAwesomeIcon id={'icon'} icon={faArrowRight} />
        )}
      </Button>
    )
  }
  const handleClick = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'continueButton':
        e.preventDefault()
        setCurrentStep(currentStep + 1)
        break
      case 'companyType':
        e.preventDefault()
        setForm({ ...form, [name]: value })
        setCurrentStep(currentStep + 1)
        break
      case 'prevButton':
        e.preventDefault()
        if (currentStep === 0) return
        setCurrentStep(currentStep - 1)
        break

      default:
        break
    }
  }

  const handleKeyDown = (e) => {
    const { name } = e.target
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        if (index[name] === 0) return
        setIndex({ ...index, [name]: index[name] - 1 })
        break

      case 'ArrowDown':
        e.preventDefault()
        if (index[name] === options[name].length - 1) return
        setIndex({ ...index, [name]: index[name] + 1 })

        break
      case 'Tab':
      case 'Enter':
        e.preventDefault()
        setForm({ ...form, [name]: options[name][index[name]] })
        setIndex({ ...index, [name]: 0 })
        delete formErrors[name]
        break
      default:
        break
    }
  }

  const handleDropdownClick = (input, name) => {
    setForm({ ...form, [name]: input })
    delete formErrors[name]
  }

  const steps = [
    <Slide>
      <h1>What type of business do you own?</h1>
      <p id='sub'>
        Just answer a few questions to see your options. It’s free & won’t
        impact your credit score.
      </p>
      <CardSelect
        onClick={handleClick}
        array={entityInfo}
        name={'companyType'}
      />
    </Slide>,
    <Slide>
      <PrevQuestion />
      <h1>How much money do you need?</h1>
      <Center>
        <InputField
          value={currencyValue(Number(form.loanAmount))}
          label={'Loan Amount'}
          type={'tel'}
          size={8}
          name='loanAmount'
          onChange={handleChange}
          error={formErrors.loanAmount}
          placeholder={'50,000'}
          LeadingIcon={faDollarSign}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['loanAmount']} />
      </Center>
    </Slide>,
    <Slide>
      <PrevQuestion />
      <h1>When did you start your business?</h1>
      <p id='sub'>If you don't remember the month, take your best guess</p>
      <Center>
        <InputField
          value={form.month}
          label={'Select or enter month'}
          size={18}
          name={'month'}
          onChange={handleChange}
          error={formErrors.month}
          placeholder={'January'}
          autoComplete={'off'}
          options={filterOptions(months, form.month)}
          onClickDropdown={handleDropdownClick}
          onKeyDown={handleKeyDown}
          optionsIndex={index.month}
        />
        <InputField
          value={form.year}
          label={'YYYY'}
          type={'tel'}
          name={'year'}
          maxLength={4}
          size={7}
          error={formErrors.year}
          onChange={handleChange}
          placeholder={'2018'}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['year', 'month']} />
      </Center>
    </Slide>,
    <Slide>
      <PrevQuestion />
      <h1>What's your average monthly revenue over the last 3 months?</h1>
      <Center>
        <InputField
          value={currencyValue(Number(form.monthly))}
          label={'Average monthly revenue'}
          type={'tel'}
          size={25}
          name='monthly'
          LeadingIcon={faDollarSign}
          onChange={handleChange}
          error={formErrors.monthly}
          placeholder={'60,000'}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['monthly']} />
      </Center>
    </Slide>,
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
        <ContinueButton fieldCheck={['loanPurposes']} />
      </Center>
    </Slide>,
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
          type={'text'}
          size={20}
          name='companyName'
          onChange={handleChange}
          error={formErrors.companyName}
          placeholder={'Solidify USA LLC'}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['companyName']} />
      </Center>
    </Slide>,
    <Slide>
      <PrevQuestion />
      <h1>Which state is your business in?</h1>
      <Center>
        <InputField
          value={form.state}
          label={'Search and select a state'}
          size={30}
          name='state'
          onChange={handleChange}
          error={formErrors.state}
          placeholder={'New York'}
          autoComplete={'off'}
          options={filterOptions(states, form.state)}
          onClickDropdown={handleDropdownClick}
          onKeyDown={handleKeyDown}
          optionsIndex={index.state}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['state']} />
      </Center>
    </Slide>,
    <Slide>
      <PrevQuestion />
      <h1>What's your name?</h1>
      <Center>
        <InputField
          value={form.firstName}
          label={'First Name'}
          type={'text'}
          size={20}
          name='firstName'
          onChange={handleChange}
          error={formErrors.firstName}
          placeholder={'John'}
        />
      </Center>

      <Center>
        <InputField
          value={form.lastName}
          label={'Last Name'}
          type={'text'}
          size={20}
          name='lastName'
          onChange={handleChange}
          error={formErrors.lastName}
          placeholder={'Doe'}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['firstName', 'lastName']} />
      </Center>
    </Slide>,
    <Slide>
      <PrevQuestion />
      <h1>What's the best way to reach you?</h1>
      <Center>
        <InputField
          value={form.phone}
          label={'Your mobile phone number'}
          type={'tel'}
          size={20}
          name='phone'
          onChange={handleChange}
          error={formErrors.phone}
          placeholder={'(555) 555-5555'}
          LeadingIcon={faPhone}
        />
      </Center>

      <Center>
        <InputField
          value={form.email}
          label={'Your email address'}
          type={'text'}
          size={20}
          name='email'
          onChange={handleChange}
          error={formErrors.email}
          placeholder={'getmefunded@test.com'}
          LeadingIcon={faEnvelope}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['phone', 'email']} />
      </Center>
    </Slide>,
  ]

  return <FormContainer>{steps[currentStep]}</FormContainer>
}

export default Form

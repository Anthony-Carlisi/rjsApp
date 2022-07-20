import { useState } from 'react'
import { states, entityInfo, months, purposes } from './utils/StaticData'
import {
  Slide,
  Center,
  FormContainer,
  Button,
  PrevButton,
} from './styles/Form2.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faEnvelope,
  faPhone,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons'
import {
  minMaxLength,
  currencyValue,
  validEmail,
  findObject,
  findInArray,
} from './utils/Validations'
import CardSelect from './CardSelect'
import { Autocomplete, TextField, InputAdornment } from '@mui/material'

function Form2() {
  const [form, setForm] = useState({
    companyType: '',
    state: '',
    loanAmount: '',
    month: '',
    year: '',
    monthly: '',
    loanPurposes: [],
    companyName: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })
  const [formErrors, setFormErrors] = useState({
    state: null,
    loanAmount: null,
    month: null,
    year: null,
    monthly: null,
    loanPurposes: null,
    companyName: null,
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
  })
  const [currentStep, setCurrentStep] = useState(0)

  const handleChange = (e) => {
    const { value, name } = e.target
    switch (name) {
      case 'monthly':
      case 'loanAmount':
        setForm({ ...form, [name]: value.replace(/\D/g, '') })
        minMaxLength(value.replace(/\D/g, ''), 4)
          ? setFormErrors({ ...formErrors, [name]: true })
          : delete formErrors[name]
        break
      case 'year':
        setForm({ ...form, [name]: value.replace(/\D/g, '') })
        const yearCheck = value < 1900 || value > 2022

        minMaxLength(value, 4) || yearCheck
          ? setFormErrors({ ...formErrors, [name]: true })
          : delete formErrors[name]

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

      case 'firstName':
      case 'lastName':
      case 'companyName':
        e.preventDefault()
        setForm({ ...form, [name]: value })

        value
          ? delete formErrors[name]
          : setFormErrors({ ...formErrors, [name]: true })

        break

      case 'email':
        setForm({ ...form, email: value })
        validEmail(value)
          ? setFormErrors({ ...formErrors, [name]: true })
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
          : setFormErrors({ ...formErrors, [name]: true })

        setForm({ ...form, [name]: e.target.value })

        break

      default:
        break
    }
  }

  const ContinueButton = ({ fieldCheck }) => {
    return (
      <Button
        onClick={() => {
          setCurrentStep(currentStep + 1)
        }}
        disabled={findObject(formErrors, fieldCheck)}
      >
        CONTINUE
        {!findObject(formErrors, fieldCheck) && (
          <FontAwesomeIcon id={'icon'} icon={faAngleRight} />
          // <ArrowForwardIosIcon id={'icon'} />
        )}
      </Button>
    )
  }

  const PrevQuestion = () => (
    <PrevButton
      type='button'
      name={'prevButton'}
      onClick={() => setCurrentStep(currentStep - 1)}
    >
      <FontAwesomeIcon id={'icon'} color='#1f4058' icon={faAngleLeft} />
      Previous
    </PrevButton>
  )

  const steps = [
    //First Question Card type of Entity info
    <Slide>
      <h1>What type of business do you own?</h1>
      <p id='sub'>
        Just answer a few questions to see your options. It’s free & won’t
        impact your credit score.
      </p>
      <CardSelect
        onClick={(e) => {
          e.preventDefault()
          setForm({ ...form, companyType: e.target.value })
          setCurrentStep(currentStep + 1)
        }}
        array={entityInfo}
      />
    </Slide>,
    // Second Question Loan Amount Needed
    <Slide>
      <PrevQuestion />
      <h1>How much money do you need?</h1>
      <Center>
        <TextField
          value={currencyValue(Number(form.loanAmount))}
          label={'Loan Amount'}
          type={'tel'}
          name='loanAmount'
          onChange={handleChange}
          error={formErrors.loanAmount}
          helperText={formErrors.loanAmount ? '3 digits minimum' : ' '}
          placeholder={'50,000'}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <FontAwesomeIcon icon={faDollarSign} />
              </InputAdornment>
            ),
          }}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['loanAmount']} />
      </Center>
    </Slide>,
    // Third Question what month and year
    <Slide>
      <PrevQuestion />
      <h1>Which state is your business in?</h1>
      <Center>
        <Autocomplete
          id='combo-box-demo'
          sx={{ width: 300 }}
          options={months}
          value={form.month}
          onChange={(e, value) => {
            setForm({ ...form, month: value })
            delete formErrors.month
          }}
          isOptionEqualToValue={(option, value) =>
            value === undefined || value === '' || option.id === value.id
          }
          onInputChange={(e, value) => {
            if (findInArray(months, value).length === 1) {
              setForm({ ...form, month: findInArray(months, value)[0] })
              delete formErrors.month
            } else {
              setFormErrors({ ...formErrors, month: true })
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              name={'month'}
              error={formErrors.month}
              helperText={formErrors.month ? 'Please select month' : ' '}
              label='Search and select month'
            />
          )}
        />
        <TextField
          value={form.year}
          label={'YYYY'}
          type={'tel'}
          name={'year'}
          error={formErrors.year}
          helperText={formErrors.year ? 'Please Enter Valid Year' : ' '}
          onChange={handleChange}
          placeholder={'2018'}
          inputProps={{ maxLength: 4 }}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['year', 'month']} />
      </Center>
    </Slide>,
    // Fourth question monthly revenue
    <Slide>
      <PrevQuestion />
      <h1>What's your average monthly revenue over the last 3 months?</h1>
      <Center>
        <TextField
          value={currencyValue(Number(form.monthly))}
          sx={{ width: 300 }}
          label={'Average monthly revenue'}
          type={'tel'}
          name='monthly'
          onChange={handleChange}
          error={formErrors.monthly}
          helperText={formErrors.monthly ? '3 digits minimum' : ' '}
          placeholder={'60,000'}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <FontAwesomeIcon icon={faDollarSign} />
              </InputAdornment>
            ),
          }}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['monthly']} />
      </Center>
    </Slide>,
    // Fifth Question loan purposes
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
    // Sixth Question company name
    <Slide>
      <PrevQuestion />
      <h1>What's the name of your business?</h1>
      <p id='sub'>
        This information will only be shared with our authorized lending
        partners if you choose to view your lending options.
      </p>
      <Center>
        <TextField
          value={form.companyName}
          sx={{ width: 300 }}
          label={'Business name'}
          name='companyName'
          onChange={handleChange}
          error={formErrors.companyName}
          helperText={formErrors.companyName ? '3 Characters minimum' : ' '}
          placeholder={'Solidify USA LLC'}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['companyName']} />
      </Center>
    </Slide>,
    // Seventh Question which state
    <Slide>
      <PrevQuestion />
      <h1>Which state is your business in?</h1>
      <Center>
        <Autocomplete
          id='combo-box-demo'
          sx={{ width: 300 }}
          options={states}
          value={form.state}
          onChange={(e, value) => {
            setForm({ ...form, state: value })
            delete formErrors.state
          }}
          isOptionEqualToValue={(option, value) =>
            value === undefined || value === '' || option.id === value.id
          }
          onInputChange={(e, value) => {
            if (findInArray(states, value).length === 1) {
              setForm({ ...form, state: findInArray(states, value)[0] })
              delete formErrors.state
            } else {
              setFormErrors({ ...formErrors, state: true })
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              name={'state'}
              error={formErrors.state}
              helperText={formErrors.state ? 'Please select state' : ' '}
              label='Search and select your state'
            />
          )}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['state']} />
      </Center>
    </Slide>,
    // Eighth Question whats your name
    <Slide>
      <PrevQuestion />
      <h1>What's your name?</h1>
      <Center>
        <TextField
          value={form.firstName}
          sx={{ width: 300 }}
          label={'First Name'}
          type={'text'}
          name='firstName'
          onChange={handleChange}
          error={formErrors.firstName}
          helperText={formErrors.firstName ? '2 characters minimum' : ' '}
          placeholder={'John'}
        />
      </Center>

      <Center>
        <TextField
          value={form.lastName}
          sx={{ width: 300 }}
          label={'Last Name'}
          type={'text'}
          name='lastName'
          onChange={handleChange}
          error={formErrors.lastName}
          helperText={formErrors.lastName ? '2 characters minimum' : ' '}
          placeholder={'Doe'}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['firstName', 'lastName']} />
      </Center>
    </Slide>,
    // Ninth Question whats your contact info
    <Slide>
      <PrevQuestion />
      <h1>What's the best way to reach you?</h1>
      <Center>
        <TextField
          value={form.phone}
          sx={{ width: 300 }}
          label={'Your mobile phone number'}
          type={'tel'}
          name='phone'
          onChange={handleChange}
          error={formErrors.phone}
          helperText={formErrors.phone ? 'Enter valid phone number' : ' '}
          placeholder={'(555) 555-5555'}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <FontAwesomeIcon icon={faPhone} />
              </InputAdornment>
            ),
          }}
        />
      </Center>

      <Center>
        <TextField
          value={form.email}
          sx={{ width: 300 }}
          label={'Your email address'}
          type={'text'}
          name='email'
          onChange={handleChange}
          error={formErrors.email}
          helperText={formErrors.email ? 'Enter valid email address' : ' '}
          placeholder={'getmefunded@test.com'}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputAdornment>
            ),
          }}
        />
      </Center>
      <Center>
        <ContinueButton fieldCheck={['phone', 'email']} />
      </Center>
    </Slide>,
  ]

  return <FormContainer>{steps[currentStep]}</FormContainer>
}

export default Form2

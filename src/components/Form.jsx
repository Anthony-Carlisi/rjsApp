import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Autocomplete } from '@mui/material'
import { states, entityInfo, months, purposes } from '../utils/StaticData'
import {
  Slide,
  Row,
  FormContainer,
  Button,
  PrevButton,
  CustomTextField,
} from './styles/Form.styled'

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
  numericOnly,
  lettersOnly,
  phoneValue,
  findEmptyValues,
} from '../utils/Validations'
import CardSelect from './CardSelect'
import InputField from './InputField'
function Form() {
  const [form, setForm] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const [currentStep, setCurrentStep] = useState(0)

  const handleChange = (e, input, field) => {
    let name = field ? field : e.target.name
    let value = input ? input : e.target.value
    let error = ''
    // Switch for field names
    switch (name) {
      case 'monthly':
      case 'loanAmount':
        value = numericOnly(value)
        if (minMaxLength(value, 4)) error = '4 digits minimum'
        value = currencyValue(Number(value))
        break

      case 'year':
        value = numericOnly(value)
        if (value < 1900 || value > 2022) error = 'Enter valid year'
        break

      case 'firstName':
      case 'lastName':
      case 'companyName':
        value = lettersOnly(value)
        break

      case 'email':
        if (validEmail(value)) error = 'Enter valid email'
        break

      case 'phone':
        value = numericOnly(value)
        if (minMaxLength(value, 10)) error = 'Enter valid phone number'
        value = phoneValue(value)
        break

      case 'loanPurposes':
        e.preventDefault()
        if (form[name] && form[name].includes(value))
          value = form[name].filter((item) => item !== value)
        else {
          value = form[name] ? [...form[name], value] : [value]
        }
        break

      case 'month':
        if (value && findInArray(months, value).length !== 1)
          error = 'Please select month'
        break

      case 'state':
        if (value && findInArray(states, value).length !== 1)
          error = 'Please select state'
        break

      case 'companyType':
        e.preventDefault()
        setCurrentStep(currentStep + 1)
        break

      default:
        break
    }
    //Global validation checks
    if (minMaxLength(value, 1)) {
      error = 'Cannot be empty'
    }
    // Sets Errors
    if (error) setFormErrors({ ...formErrors, [name]: error })
    // Deletes Errors
    if (!error && formErrors[name]) delete formErrors[name]
    // Sets Values
    setForm({ ...form, [name]: value })
  }

  const ContinueButton = ({ fieldCheck }) => {
    return (
      <Button
        onClick={() => {
          setCurrentStep(currentStep + 1)
        }}
        disabled={
          findObject(formErrors, fieldCheck) ||
          findEmptyValues(form, fieldCheck)
            ? true
            : false
        }
      >
        CONTINUE
        {findObject(formErrors, fieldCheck) || findEmptyValues(form, fieldCheck)
          ? false
          : true && (
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
        name={'companyType'}
        onClick={handleChange}
        options={entityInfo}
        currentValues={form.companyType}
      />
    </Slide>,
    // Second Question Loan Amount Needed
    <Slide>
      <PrevQuestion />
      <h1>How much money do you need?</h1>
      <InputField
        value={form.loanAmount || ''}
        label={'Loan Amount'}
        type={'tel'}
        name='loanAmount'
        onChange={handleChange}
        leadingIcon={faDollarSign}
        error={formErrors.loanAmount}
        placeholder={'50,000'}
      />
      <ContinueButton fieldCheck={['loanAmount']} />
    </Slide>,
    // Third Question what month and year
    <Slide>
      <PrevQuestion />
      <h1>Which state is your business in?</h1>
      <Row>
        <Autocomplete
          autoSelect
          sx={{ width: 300, mx: 2, my: 2 }}
          options={months}
          value={form.month || ''}
          onChange={(e, value) => handleChange(e, value, 'month')}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(params) => (
            <CustomTextField
              {...params}
              name={'month'}
              error={formErrors.month ? true : false}
              helperText={formErrors.month}
              label='Search and select month'
            />
          )}
        />
        <InputField
          size={10}
          maxLength={4}
          value={form.year || ''}
          label={'YYYY'}
          type={'tel'}
          name={'year'}
          onChange={handleChange}
          error={formErrors.year}
          placeholder={'2018'}
        />
      </Row>
      <ContinueButton fieldCheck={['year', 'month']} />
    </Slide>,
    // Fourth question monthly revenue
    <Slide>
      <PrevQuestion />
      <h1>What's your average monthly revenue over the last 3 months?</h1>
      <InputField
        value={form.monthly || ''}
        label={'Loan Amount'}
        type={'tel'}
        name='monthly'
        onChange={handleChange}
        leadingIcon={faDollarSign}
        error={formErrors.monthly}
        placeholder={'60,000'}
      />
      <ContinueButton fieldCheck={['monthly']} />
    </Slide>,
    // Fifth Question loan purposes
    <Slide>
      <PrevQuestion />
      <h1>What are you getting financing for?</h1>
      <p id='sub'>Select your loan purpose(s)</p>
      <CardSelect
        onClick={handleChange}
        options={purposes}
        name={'loanPurposes'}
        currentValues={form.loanPurposes}
      />
      <ContinueButton fieldCheck={['loanPurposes']} />
    </Slide>,
    // Sixth Question company name
    <Slide>
      <PrevQuestion />
      <h1>What's the name of your business?</h1>
      <p id='sub'>
        This information will only be shared with our authorized lending
        partners if you choose to view your lending options.
      </p>
      <InputField
        value={form.companyName || ''}
        label={'Business name'}
        name='companyName'
        onChange={handleChange}
        leadingIcon={faDollarSign}
        error={formErrors.companyName}
        placeholder={'Solidify USA LLC'}
      />
      <ContinueButton fieldCheck={['companyName']} />
    </Slide>,
    // Seventh Question which state
    <Slide>
      <PrevQuestion />
      <h1>Which state is your business in?</h1>
      <Autocomplete
        autoSelect
        sx={{ width: 300, mx: 2, my: 2 }}
        options={states}
        value={form.state || ''}
        onChange={(e, value) => handleChange(e, value, 'state')}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            name={'state'}
            error={formErrors.state ? true : false}
            helperText={formErrors.state}
            label='Search and select your state'
          />
        )}
      />
      <ContinueButton fieldCheck={['state']} />
    </Slide>,
    // Eighth Question whats your name
    <Slide>
      <PrevQuestion />
      <h1>What's your name?</h1>
      <InputField
        value={form.firstName || ''}
        label={'First Name'}
        name='firstName'
        onChange={handleChange}
        error={formErrors.firstName}
        placeholder={'John'}
      />
      <InputField
        value={form.lastName || ''}
        label={'Last Name'}
        name='lastName'
        onChange={handleChange}
        error={formErrors.lastName}
        placeholder={'Doe'}
      />
      <ContinueButton fieldCheck={['firstName', 'lastName']} />
    </Slide>,
    // Ninth Question whats your contact info
    <Slide>
      <PrevQuestion />
      <h1>What's the best way to reach you?</h1>
      <InputField
        value={form.phone || ''}
        label={'Your mobile phone number'}
        type={'tel'}
        name='phone'
        onChange={handleChange}
        error={formErrors.phone}
        placeholder={'(555) 555-5555'}
        leadingIcon={faPhone}
      />
      <InputField
        value={form.email || ''}
        label={'Your email address'}
        name='email'
        onChange={handleChange}
        error={formErrors.email}
        placeholder={'getmefunded@solidifyusa.com'}
        leadingIcon={faEnvelope}
      />
      <ContinueButton fieldCheck={['phone', 'email']} />
    </Slide>,
  ]

  return <FormContainer>{steps[currentStep]}</FormContainer>
}

export default Form

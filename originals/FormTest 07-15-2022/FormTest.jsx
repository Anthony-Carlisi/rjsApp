import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Autocomplete, InputAdornment } from '@mui/material'
import { states, entityInfo, months, purposes } from './utils/StaticData'
import {
  Slide,
  Center,
  FormContainer,
  Button,
  PrevButton,
  CustomTextField,
} from './styles/Form2.styled'
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
} from './utils/Validations'
import CardSelect from './CardSelect'

function Form2() {
  const [form, setForm] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const [currentStep, setCurrentStep] = useState(0)

  const handleChange = (e, input, field) => {
    console.log(input)
    console.log(field)
    let name = e.target.name ? e.target.name : field
    let value = e.target.value ? e.target.value : input
    let error = ''
    // Switch for field names
    switch (name) {
      case 'monthly':
      case 'loanAmount':
        // Sanitize field (removes Letters and special characters)
        value = numericOnly(value)
        // Validation Checks
        if (minMaxLength(value, 4)) error = '4 digits minimum'
        //Mask Field
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
      value = ''
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
      />
    </Slide>,
    // Second Question Loan Amount Needed
    <Slide>
      <PrevQuestion />
      <h1>How much money do you need?</h1>
      <CustomTextField
        value={form.loanAmount || ''}
        label={'Loan Amount'}
        type={'tel'}
        name='loanAmount'
        onChange={handleChange}
        error={formErrors.loanAmount ? true : false}
        helperText={formErrors.loanAmount}
        placeholder={'50,000'}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <FontAwesomeIcon icon={faDollarSign} />
            </InputAdornment>
          ),
        }}
      />

      <ContinueButton fieldCheck={['loanAmount']} />
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
        <CustomTextField
          value={form.year || ''}
          label={'YYYY'}
          type={'tel'}
          name={'year'}
          error={formErrors.year ? true : false}
          helperText={formErrors.year}
          onChange={handleChange}
          placeholder={'2018'}
          inputProps={{ maxLength: 4 }}
        />
      </Center>
      <ContinueButton fieldCheck={['year', 'month']} />
    </Slide>,
    // Fourth question monthly revenue
    <Slide>
      <PrevQuestion />
      <h1>What's your average monthly revenue over the last 3 months?</h1>
      <CustomTextField
        value={form.monthly || ''}
        sx={{ width: 300 }}
        label={'Average monthly revenue'}
        type={'tel'}
        name='monthly'
        onChange={handleChange}
        error={formErrors.monthly ? true : false}
        helperText={formErrors.monthly}
        placeholder={'60,000'}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <FontAwesomeIcon icon={faDollarSign} />
            </InputAdornment>
          ),
        }}
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
        currentValues={form.loanPurposes || []}
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
      <CustomTextField
        value={form.companyName || ''}
        sx={{ width: 300 }}
        label={'Business name'}
        name='companyName'
        onChange={handleChange}
        placeholder={'Solidify USA LLC'}
        error={formErrors.companyName ? true : false}
        helperText={formErrors.companyName}
      />
      <ContinueButton fieldCheck={['companyName']} />
    </Slide>,
    // Seventh Question which state
    <Slide>
      <PrevQuestion />
      <h1>Which state is your business in?</h1>
      <Autocomplete
        id='combo-box-demo'
        sx={{ width: 300 }}
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
      <CustomTextField
        value={form.firstName || ''}
        sx={{ width: 300 }}
        label={'First Name'}
        type={'text'}
        name='firstName'
        onChange={handleChange}
        error={formErrors.firstName ? true : false}
        helperText={formErrors.firstName}
        placeholder={'John'}
      />
      <CustomTextField
        value={form.lastName || ''}
        sx={{ width: 300 }}
        label={'Last Name'}
        type={'text'}
        name='lastName'
        onChange={handleChange}
        placeholder={'Doe'}
        error={formErrors.lastName ? true : false}
        helperText={formErrors.lastName}
      />
      <ContinueButton fieldCheck={['firstName', 'lastName']} />
    </Slide>,
    // Ninth Question whats your contact info
    <Slide>
      <PrevQuestion />
      <h1>What's the best way to reach you?</h1>
      <CustomTextField
        value={form.phone || ''}
        sx={{ width: 300 }}
        label={'Your mobile phone number'}
        type={'tel'}
        name='phone'
        onChange={handleChange}
        error={formErrors.phone ? true : false}
        helperText={formErrors.phone}
        placeholder={'(555) 555-5555'}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <FontAwesomeIcon icon={faPhone} />
            </InputAdornment>
          ),
        }}
      />
      <CustomTextField
        value={form.email || ''}
        sx={{ width: 300 }}
        label={'Your email address'}
        type={'text'}
        name='email'
        onChange={handleChange}
        error={formErrors.email ? true : false}
        helperText={formErrors.email}
        placeholder={'getmefunded@solidifyusa.com'}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <FontAwesomeIcon icon={faEnvelope} />
            </InputAdornment>
          ),
        }}
      />
      <ContinueButton fieldCheck={['phone', 'email']} />
    </Slide>,
  ]

  return <FormContainer>{steps[currentStep]}</FormContainer>
}

export default Form2

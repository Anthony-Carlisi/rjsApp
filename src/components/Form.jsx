import { useState } from 'react'
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
} from './utils/Validations'

import { months, purposes, entityInfo, states } from './utils/StaticData'
import {
  faArrowLeft,
  faArrowRight,
  faDollarSign,
  // faPhone,
  // faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputField from './InputField'
import CardSelect from './CardSelect'
import Sandbox from './Sandbox'

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
  const [autoComplete, setAutoComplete] = useState({
    filteredSuggestions: [],
    activeSuggestionIndex: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    let Value
    switch (name) {
      case 'companyName':
        setForm({ ...form, name: value })
        minMaxLength(value, 3)
          ? setFormErrors({
              ...formErrors,
              [name]: `3 Characters minimum`,
            })
          : delete formErrors[name]
        break

      case 'state':
        setForm({ ...form, [name]: value })
        // Filter our suggestions that don't contain the user's input
        const unLinked = states.filter(
          (state) => state.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
        setAutoComplete({
          ...autoComplete,
          activeSuggestionIndex: 0,
          filteredSuggestions: unLinked,
        })
        break

      case 'month':
        setForm({ ...form, [name]: value })
        // Filter our suggestions that don't contain the user's input
        const unLinked2 = months.filter(
          (state) => state.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
        setAutoComplete({
          ...autoComplete,
          activeSuggestionIndex: 0,
          filteredSuggestions: unLinked2,
        })
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

      case 'email':
        setForm({ ...form, email: value })

        validEmail(value)
          ? setFormErrors({
              ...formErrors,
              [name]: `Enter a Valid Email`,
            })
          : delete formErrors[name]
        break

      case 'monthly':
      case 'loanAmount':
        Value = value.replace(/\D/g, '')
        console.log(name)
        setForm({ ...form, [name]: Value })
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

  const ContinueButton = ({ fieldCheck }) => {
    return (
      <Button
        onClick={handleChange}
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
    const name = e.target.getAttribute('name')
    switch (name) {
      case 'state':
      case 'month':
        console.log(name)

        setForm({ ...form, [name]: e.target.getAttribute('value') })
        break

      default:
        break
    }
    // console.log(e.target.getAttribute('value'))
    // setForm({ ...form, state: e.target.getAttribute('value') })
  }

  const handleKeyDown = (e) => {
    const { name } = e.target
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault()
        if (autoComplete.activeSuggestionIndex === 0) return
        setAutoComplete({
          ...autoComplete,
          activeSuggestionIndex: autoComplete.activeSuggestionIndex - 1,
        })
        break
      case 'ArrowDown':
        e.preventDefault()
        if (
          autoComplete.activeSuggestionIndex ===
          autoComplete.filteredSuggestions.length - 1
        )
          return

        setAutoComplete({
          ...autoComplete,
          activeSuggestionIndex: autoComplete.activeSuggestionIndex + 1,
        })

        break
      case 'Tab':
      case 'Enter':
        e.preventDefault()
        setForm({
          ...form,
          [name]:
            autoComplete.filteredSuggestions[
              autoComplete.activeSuggestionIndex
            ],
        })

        break
      default:
        break
    }
  }

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
      </Slide>

      <Slide>
        <PrevQuestion />
        <h1>When did you start your business?</h1>
        <p id='sub'>If you don't remember the month, take your best guess</p>
        <Center>
          {/* <InputField
            value={form.month}
            label={'Select Month'}
            type={'text'}
            size={12}
            name={'month'}
            onChange={handleChange}
            error={formErrors.month}
            placeholder={'January'}
          /> */}
          <Sandbox
            value={form.month}
            label={'Select Month'}
            size={12}
            name={'month'}
            onChange={handleChange}
            error={formErrors.month}
            placeholder={'January'}
            autoComplete={'off'}
            filteredSuggestions={autoComplete.filteredSuggestions}
            DropdownClick={handleClick}
            onKeyDown={handleKeyDown}
            activeSuggestionIndex={autoComplete.activeSuggestionIndex}
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
      </Slide>

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
          <ContinueButton fieldCheck={['loanPurposes']} />
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
            error={formErrors.companyName}
            placeholder={'Solidify USA LLC'}
          />
        </Center>
        <Center>
          <ContinueButton fieldCheck={['companyName']} />
        </Center>
      </Slide>

      <Slide>
        <PrevQuestion />
        <h1>Which state is your business in?</h1>
        <Center>
          <Sandbox
            onClick={handleClick}
            value={form.state}
            label={'Search and select a state'}
            size={30}
            name='state'
            onChange={handleChange}
            error={formErrors.state}
            placeholder={'New York'}
            autoComplete={'off'}
            filteredSuggestions={autoComplete.filteredSuggestions}
            DropdownClick={handleClick}
            onKeyDown={handleKeyDown}
            activeSuggestionIndex={autoComplete.activeSuggestionIndex}
          />
        </Center>
        <Center>
          <ContinueButton fieldCheck={['state']} />
        </Center>
      </Slide>

      <div className='mb-3'>
        <button type='submit'>Create Account</button>
      </div>
    </FormContainer>
  )
}

export default Form

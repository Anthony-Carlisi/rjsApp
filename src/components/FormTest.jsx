import { useState } from 'react'
import {
  Slide,
  Center,
  PrevButton,
  FormContainer,
  Button,
  InputContainer,
} from './styles/Form.styled'
import { findObject, filterOptions, findInArray } from './utils/Validations'
import Dropdown from './Dropdown'

import { months, states } from './utils/StaticData'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sandbox from './Sandbox'
import InputField from './InputField'

function FormTest() {
  const [form, setForm] = useState({
    month: '',
    state: '',
    test: '',
  })
  const [formErrors, setFormErrors] = useState({
    month: '',
    state: '',
  })
  const [index, setIndex] = useState({
    month: 0,
    state: 0,
  })
  const [options, setOptions] = useState({
    month: months,
    state: states,
  })

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
            [name]: 'Please Select or enter month',
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
            [name]: 'Please Select or enter state',
          })
        }
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

  return (
    <FormContainer>
      <Slide>
        <h1>When did you start your business?</h1>
        <p id='sub'>If you don't remember the month, take your best guess</p>
        <Center>
          <Sandbox
            value={form.month}
            label={'Select Month'}
            size={12}
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
          <Sandbox
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
          <ContinueButton fieldCheck={['state', 'month']} />
        </Center>
      </Slide>
    </FormContainer>
  )
}

export default FormTest

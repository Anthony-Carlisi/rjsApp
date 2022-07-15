import { useState } from 'react'
import {
  Slide,
  Center,
  PrevButton,
  FormContainer,
  Button,
  InputContainer,
} from './styles/Form.styled'
import { findObject } from './utils/Validations'
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
  })
  const [formErrors, setFormErrors] = useState({
    month: '',
    state: '',
  })
  const [filtered, setFiltered] = useState({
    month: months,
    state: states,
  })
  const [display, setDisplay] = useState({
    month: false,
    state: false,
  })
  const [index, setIndex] = useState({
    month: 0,
    state: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'month':
      case 'state':
        setForm({ ...form, [name]: value })
        break
      default:
        break
    }
  }

  const updateInput = (input, name) => {
    setForm({ ...form, [name]: input })
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

  const handleFocus = (e) => {
    const { name } = e.target
    setDisplay({ ...display, [name]: true })
  }
  const handleBlur = (e) => {
    const { name } = e.target
    setDisplay({ ...display, [name]: false })
  }
  const handleClick = (e) => {
    const { name } = e.target
    // console.log(e.target)
  }
  const handleMouseLeave = (e) => {
    const { name } = e.target
    console.log('e.target')
  }

  return (
    <FormContainer>
      <Slide>
        <h1>When did you start your business?</h1>
        <p id='sub'>If you don't remember the month, take your best guess</p>
        <Center>
          <InputContainer>
            <InputField
              value={form.month}
              label={'Select Month'}
              size={12}
              name={'month'}
              onChange={handleChange}
              error={formErrors.month}
              placeholder={'January'}
              autoComplete={'off'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onMouseLeave={handleMouseLeave}
            />
            <Dropdown
              options={filtered.month}
              display={display.month}
              index={index.month}
              name={'month'}
              onClick={handleClick}
            />
          </InputContainer>

          {/* <Sandbox
            value={form.month}
            label={'Select Month'}
            size={12}
            name={'month'}
            onChange={handleChange}
            error={formErrors.month}
            placeholder={'January'}
            autoComplete={'off'}
            options={months}
            updateInput={updateInput}
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
            options={states}
            updateInput={updateInput}
          /> */}
        </Center>
        <Center>
          <ContinueButton fieldCheck={['state', 'month']} />
        </Center>
      </Slide>
    </FormContainer>
  )
}

export default FormTest

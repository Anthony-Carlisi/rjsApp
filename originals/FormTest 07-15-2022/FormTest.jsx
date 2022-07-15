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
    test: '',
  })
  const [formErrors, setFormErrors] = useState({
    month: '',
    state: '',
  })

  const handleChange = (e, name, input) => {
    console.log(e)
    console.log(name)
    console.log(input)
    if (!name) name = e.target.name
    // if (!value) value = e.target.value
    // const { name, value } = e.target
    switch (name) {
      case 'month':
      case 'state':
        // setForm({ ...form, [name]: value })
        break
      default:
        break
    }
  }

  const updateInput1 = (input, name) => {
    switch (name) {
      case 'month':
      case 'state':
        setForm({ ...form, [name]: input })
        break
      default:
        break
    }
  }

  // const updateInput = (input, name) => {
  //   setForm({ ...form, [name]: input })
  // }

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
          /> */}
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
            updateInput={handleChange}
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

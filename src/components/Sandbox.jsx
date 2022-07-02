import {
  Container,
  Label,
  Input,
  Icon,
  InputContainer,
  ErrorLabel,
  Dropdown,
  Border,
} from './styles/Sandbox.styled'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

function Sandbox({
  onChange,
  value,
  label,
  onKeyPress,
  errorLabel,
  type,
  maxLength,
  size,
  icon,
  onClick,
  inputMode,
  onFocus,
  onBlur,
  name,
}) {
  return (
    <Container>
      <Border>
        {icon && <Icon icon={icon} />}
        <InputContainer>
          <Label>{label}</Label>
          <Input
            size={size}
            onFocus={onFocus}
            onBlur={onBlur}
            type={type}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onClick={onClick}
            inputMode={inputMode}
            name={name}
          />
        </InputContainer>
      </Border>
      {errorLabel && <ErrorLabel>{errorLabel}</ErrorLabel>}
      {/* {options1 && (
          <Dropdown width={size}>
            {options1.map((value, index) => (
              <ul key={index}>
                <li>
                  <button value={value} onClick={handleClick}>
                    {value}
                  </button>
                </li>
              </ul>
            ))}
          </Dropdown>
        )} */}
    </Container>
  )
}

export default Sandbox

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: flex;
  position: relative;
  width: min-content;
  flex-direction: column;
  /* height: min-content; */
  height: 40px;
  margin: 10px 10px 20px 10px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  &:focus-within {
    label {
      transform: translateY(-15%) scale(0.8);
      color: #0a53e4;
    }
    input {
      border: blue 1px solid;
    }
    #icon {
      color: #fff;
      background: #484eea;
    }
  }
`

export const Icon = styled(FontAwesomeIcon)`
  align-self: center;
  padding: 12px;
  border-radius: 4px 0 0 4px;

  background: ${({ filled }) => (filled ? '#484eea' : '#dee3e7')};
  color: ${({ filled }) => (filled ? '#fff' : '#1f4058')};
`
export const Input = styled.input`
  padding: 24px 16px 8px 16px;
  font-size: 16px;
  background: #fff;
  border-radius: ${({ icon }) => (icon ? '0 4px 4px 0' : '4px')};
  outline: none;
  border: none;
  border: ${({ errorLabel, value }) => {
      if (!errorLabel && !value) {
        return 'white'
      } else if (errorLabel && value) {
        return 'red'
      } else if (value) {
        return 'green'
      } else {
        return 'white'
      }
    }}
    1px solid;
`
export const Label = styled.label`
  position: absolute;
  display: flex;
  pointer-events: none;
  background: none;
  width: 100%;
  height: 100%;
  color: #6f81a5;
  font-size: 20px;
  align-items: center;
  left: ${({ icon }) => (icon ? '55px' : '16px')};
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${({ filled }) => filled && 'translateY(-15%) scale(0.8)'};
`
export const ErrorLabel = styled.p`
  position: absolute;
  bottom: -32px;
  color: red;
  font-size: 14px;
  background: none;
  padding: 2px;
`
export const InputContainer = styled.div`
  display: flex;
`

export const DropDown = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  margin-top: 60px;

  background-color: #fff;
  /* height: 200px; */
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  overflow: auto;
  z-index: 10;

  button {
    padding: 10px 20px;
    text-align: start;
    font-size: 16px;
    background: none;
    border: none;
    width: 100% !important;
  }

  button:hover {
    background-color: #cecdcd;
  }
`

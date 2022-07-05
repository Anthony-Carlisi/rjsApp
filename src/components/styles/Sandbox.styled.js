import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: flex;
  position: relative;
  width: min-content;
  border: 1px solid red;
  margin: 10px;
  border-radius: 4px;

  :focus-within {
    label {
      background-color: white;
      padding: 0 5px;
      transform: translateY(-60%) translateX(-5%) scale(0.8);
      height: 5px;
    }

    input::placeholder {
      color: #cbd5e0;
    }
  }
`

export const Label = styled.label`
  display: flex;
  position: absolute;
  padding: 0 10px;
  align-items: center;
  height: 100%;
  font-size: 18px;
  pointer-events: none;
  transition: all 0.2s ease;
  ${({ filled }) => {
    if (filled) {
      return `
      transform: translateY(-60%) translateX(-5%) scale(0.8); 
      background-color: white;
      padding: 0 5px;
      height: 5px
      `
    }
  }};
`
export const Input = styled.input`
  padding: 10px;
  background: none;
  font-size: 16px;

  ::placeholder {
    color: transparent;
    transition: color 0.4s ease;
  }
`
export const Icon = styled(FontAwesomeIcon)`
  color: red;
  align-self: center;
  padding: 5px;
`

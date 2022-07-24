import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Border = styled.div`
  display: flex;
  position: relative;
  border: 1px solid;
  border-radius: 5px;
  background-color: white;
  margin: 16px;
  border-color: ${({ error }) => (error ? 'red' : '#c1c2c2')};

  :focus-within {
    border-color: ${({ error }) => (error ? 'red' : '#007bff')};
  }

  :focus-within label {
    color: ${({ error }) => (error ? 'red' : '#007bff')};
    top: 0;
    left: 0rem;
    transform: translateY(-50%) scale(0.9) !important;
  }

  label {
    color: ${({ error }) => error && 'red'};
  }
`
export const Input = styled.input`
  font-size: 1rem;
  border-radius: 5px;
  padding: 1rem 0;
  padding-left: 0.7rem;
  padding-left: ${({ icon }) => icon && '0rem'};
  -webkit-tap-highlight-color: transparent;

  :not(:placeholder-shown) + label {
    top: 0;
    left: 0rem;
    transform: translateY(-50%) scale(0.9) !important;
  }

  :not(:focus)::placeholder {
    opacity: 0;
  }

  /* transition: 0.1s ease-out; */
`
export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  color: #767676;
  left: 0rem;
  left: ${({ icon }) => icon && '1.2rem'};
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`
export const IconWrapper = styled.div`
  align-self: center;
`
export const Icon = styled(FontAwesomeIcon)`
  padding: 0 0.7rem;
  color: #767676;
  cursor: ${({ onClick }) => onClick && 'pointer'};
`

export const Error = styled.div`
  position: absolute;
  bottom: -18px;
  color: red;
  font-size: 0.9rem;
`

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  position: relative;
  /* border: 1px solid gray; */
`
export const Input = styled.input`
  font-size: 1rem;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem 0.7rem;
  color: gray;
  transition: 0.1s ease-out;

  :focus {
    border-color: #6200ee;
  }

  :focus + label {
    color: #6200ee;
    top: 0;
    transform: translateY(-50%) scale(0.9) !important;
  }

  :not(:placeholder-shown) + label {
    top: 0;
    transform: translateY(-50%) scale(0.9) !important;
  }

  /* :not(:placeholder-shown) {
    border-color: #6200ee;
  } */

  :not(:focus)::placeholder {
    opacity: 0;
  }
`
export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  color: gray;
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`

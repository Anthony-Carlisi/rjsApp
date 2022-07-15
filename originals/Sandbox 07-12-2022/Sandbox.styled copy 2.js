import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`

export const Border = styled.div`
  display: flex;
  position: relative;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  margin: 0 10px;

  li[aria-selected='true'] {
    background: pink;
    cursor: pointer;
  }

  :focus-within {
    border-color: #6200ee;
  }

  :focus-within label {
    color: #6200ee;
    top: 0;
    left: 0rem;
    transform: translateY(-50%) scale(0.9) !important;
  }
  :focus-within #Dropdown {
    display: flex;
  }
  /* input:not(:empty) #Dropdown {
    display: flex;
    font-size: 28px;
  } */
`
export const Input = styled.input`
  font-size: 1rem;
  border-radius: 5px;
  padding: 1rem 0;
  padding-left: 0.7rem;
  padding-left: ${({ icon }) => icon && '0rem'};

  :not(:placeholder-shown) + label {
    top: 0;
    left: 0rem;
    transform: translateY(-50%) scale(0.9) !important;
  }

  /* transition: 0.1s ease-out; */
`
export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0rem;
  left: ${({ icon }) => icon && '1.2rem'};
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
export const IconWrapper = styled.div`
  align-self: center;
`
export const Icon = styled(FontAwesomeIcon)`
  padding: 0 0.7rem;
  cursor: ${({ onClick }) => onClick && 'pointer'};
`

export const Error = styled.div`
  position: absolute;
  bottom: -20px;
  color: red;
`

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  width: 100%;
  top: 0px;
  z-index: 10;
  margin-top: 55px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  overflow: auto;
  max-height: 200px;

  :hover {
    display: flex;
  }
  :visited {
    display: none;
  }

  :target {
    display: none;
  }
`

export const List = styled.li`
  padding: 10px 20px;
  text-align: start;
  font-size: 16px;
  /* background: none; */
  border: none;
  width: 100% !important;
  cursor: pointer;
  /* background-color: #cecdcd; */
  background-color: ${({ suggestion }) => suggestion && '#cecdcd'};

  :hover {
    background-color: #cecdcd;
  }
`

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: flex;
  position: relative;
  width: min-content;
`

export const Border = styled.div`
  display: flex;
  position: relative;
  width: min-content;
  border-radius: 4px;
  border: red 1px solid;
  overflow: hidden;
`
export const InputContainer = styled.div`
  display: flex;
`
export const Label = styled.label`
  position: absolute;
  display: flex;
  align-self: center;
  top: 0;
  pointer-events: none;
`
export const Input = styled.input`
  padding-top: 10%;
`

export const Icon = styled(FontAwesomeIcon)`
  padding: 8px;

  background: ${({ filled }) => (filled ? '#484eea' : '#dee3e7')};
  color: ${({ filled }) => (filled ? '#fff' : '#1f4058')};
`

export const ErrorLabel = styled.p`
  position: absolute;
  bottom: -16px;
  color: red;
`

export const Dropdown = styled.div`
  position: absolute;
  /* top: 0; */
  margin-top: 3.4rem;
  width: 100%;
  background-color: #fff;
  /* height: auto; */
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

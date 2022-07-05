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
  margin: 0 10px;

  :focus-within {
    label {
      transform: translateY(-30%) scale(0.8);
      color: #0a53e4;
    }
  }
`
export const InputContainer = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  height: 44px;
`
export const Label = styled.label`
  position: absolute;
  display: flex;
  align-self: center;
  font-size: 20px;
  pointer-events: none;
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  transform: ${({ filled }) => filled && 'translateY(-30%) scale(0.9)'};
`
export const Input = styled.input`
  padding-top: 7%;
  font-size: 16px;
`

export const Icon = styled(FontAwesomeIcon)`
  padding: 14px;

  background: ${({ filled }) => (filled ? '#484eea' : '#dee3e7')};
  color: ${({ filled }) => (filled ? '#fff' : '#1f4058')};
`

export const ErrorLabel = styled.p`
  position: absolute;
  bottom: -20px;
  color: red;
`

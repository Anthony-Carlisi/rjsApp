import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
  display: flex;
  position: relative;
  margin: 10px 10px 20px 10px;
  height: ${({ height }) => height};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  label {
    left: ${({ enableIcon, height }) => enableIcon && height};
  }

  &:focus-within {
    #iconContainer {
      background-color: #484eea;
    }
    #label {
      transform: translateY(-20%) scale(0.8);
      color: #0a53e4;
    }
    #icon {
      color: #fff;
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  background-color: ${({ filled }) => (filled ? '#484eea' : '#dee3e7')};
  border-radius: 4px 0 0 4px;
  color: ${({ filled }) => (filled ? '#fff' : '#1f4058')};
`

export const Icon = styled(FontAwesomeIcon)`
  background: none;
`
export const Input = styled.input`
  padding: 24px 16px 8px 16px;
  font-size: 16px;
  background: #fff;
  border: none;
  border-radius: 4px;
`
export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  background: none;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    align-items: center;
    position: relative;
    left: 16px;
    width: 100%;
    height: 100%;
    color: #6f81a5;
    font-size: 20px;
    background: none;
    transform: ${({ filled }) => filled && 'translateY(-20%) scale(0.8)'};
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`
export const ErrorLabel = styled.p`
  position: absolute;
  bottom: -18px;
  color: red;
  font-size: 14px;
  background: none;
`
export const DropDown = styled.div`
  position: absolute;
  width: 100%;

  background-color: #fff;
  height: 200px;
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

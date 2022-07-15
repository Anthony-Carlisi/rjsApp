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

  :focus-within {
    border-color: #6200ee;
  }

  :focus-within label {
    color: #6200ee;
    top: 0;
    left: 0rem;
    transform: translateY(-50%) scale(0.9) !important;
  }
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
  :not(:focus)::placeholder {
    opacity: 0;
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

// export const TIcon = styled(FontAwesomeIcon)`
//   display: flex;
//   padding: 0 0.7rem;
//   position: absolute;
//   cursor: ${({ onClick }) => onClick && 'pointer'};
//   top: 50%;
//   transform: translateY(-50%);
//   right: 0px;
// `
// export const Error = styled.div`
//   position: absolute;
// `

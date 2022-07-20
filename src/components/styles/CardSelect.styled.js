import styled from 'styled-components'

export const FlexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const Card = styled.button`
  margin: 10px;
  width: 140px;
  height: 100px;
  border-radius: 5px;
  border: solid #dee3e7 1px;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
  ${({ value, currentValues }) => {
    if (currentValues && currentValues.includes(value))
      return `transform: scale(1.1);
    transition-duration: 0.2s;
    background: #c7def9;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-color: #007bff;`
  }};

  @media (hover: hover) {
    :hover {
      transform: scale(1.1);
      transition-duration: 0.2s;
      background: #c7def9;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-color: #007bff;
    }
  }

  h3 {
    margin-top: 5px;
    margin-bottom: 0;
    pointer-events: none;
  }

  #icon {
    pointer-events: none;
  }
`

import styled from 'styled-components'

export const DropdownContainer = styled.div`
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

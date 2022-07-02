import styled from 'styled-components'

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: gray; */

  h1 {
    text-align: center;
    color: #265373;
  }

  #sub {
    text-align: center;
    color: #46494b;
  }
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`
export const PrevButton = styled.div`
  cursor: pointer;
  width: 80px;

  :hover {
    #icon {
      transition-duration: 0.2s;
      transform: translateX(-3px);
    }
  }

  #icon {
    padding: 0 4px;
  }
`
export const FormContainer = styled.form`
  max-width: 800px;
  background-color: #fbfcfc;
  margin: auto;
`
export const DropDownRow = styled.div`
  display: flex;
  /* margin-top: 200px; */
  flex-flow: row wrap;
  position: absolute;
  top: 0px;
  width: 335px;
  background-color: #fff;
  font-size: 20px;
  border-radius: 4px;
  border: solid #dee3e7 1px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  z-index: 10;

  div {
    pointer-events: none;
  }

  button {
    width: 100px;
    height: 40px;
    margin: 5px 5px;
    font-size: 16px;
    border-radius: 5px;
    border: solid #dee3e7 1px;
    background: #fdfdfd;
    cursor: pointer;

    :hover {
      background: #c7def9;
      border-color: #007bff !important;
      box-shadow: 0 2px 2px 0 #dee3e7;
    }
  }
`
export const Button = styled.button`
  transform: scale(1.1);
  transition-duration: 0.2s;
  font-size: 24px;
  margin-top: 5px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-style: italic;
  color: #fff;
  background-color: #1f4058;

  :disabled {
    background-color: #cecdcd;
  }

  #icon {
    margin: 0 5px;
  }

  :hover {
    #icon {
      transition-duration: 0.2s;
      transform: translateX(8px);
    }
  }
`

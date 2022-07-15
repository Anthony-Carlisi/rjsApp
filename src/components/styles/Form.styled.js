import styled from 'styled-components'

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: gray; */

  h1 {
    text-align: center;
    color: #265373;
    margin: 10px 20px;
  }

  #sub {
    text-align: center;
    color: #46494b;
    margin: 10px 20px;
  }
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 10px 20px;
`
export const InputContainer = styled.div`
  display: flex;
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
export const Button = styled.button`
  transform: scale(1.1);
  transition-duration: 0.2s;
  font-size: 24px;
  margin: 10px 20px;
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

import styled from 'styled-components'
import { TextField } from '@mui/material'

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
export const Row = styled.div`
  display: flex;
  justify-content: center;
`
export const PrevButton = styled.button`
  cursor: pointer;
  width: 100px;
  background: none;
  padding: 10px;
  font-size: 1rem;
  align-self: flex-start;

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
  display: flex;
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
export const CustomTextField = styled(TextField)({
  '& .MuiFormHelperText-root.Mui-error': {
    position: 'absolute',
    top: '100%',
  },
})

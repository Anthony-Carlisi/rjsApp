import styled, { css } from 'styled-components'

export const Body = styled.div`
  color: #4a4a4a;
  header {
    margin-top: ${({ mediaQuery }) => (mediaQuery ? '4rem' : '1.6rem')};
  }
  h1 {
    font-size: ${({ mediaQuery }) => (mediaQuery ? '3rem' : '1.8rem')};
  }
  button {
    margin-top: ${({ mediaQuery }) => (mediaQuery ? '60px' : '20px')};
  }
`
export const baseSection = css`
  font-family: 'lato';
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`
export const Section = styled.section`
  ${baseSection}
`
export const BgSection = styled.section`
  ${baseSection}
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 40rem;
`
export const Header = styled.header`
  margin: 0 25px;
`
export const H1 = styled.h1`
  font-family: 'Merriweather';
`
export const H2 = styled.h2`
  font-size: 1.2rem;
  margin-top: 20px;
`
export const Button = styled.button`
  align-self: center;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 15px 40px;
  border-radius: 5px;
  color: #ffffff;
  background-color: #23c686;
  border: 1px solid transparent;
  box-shadow: rgb(35 198 134 / 50%) 0px 10px 40px -10px;
  font-weight: 600;
`
export const Stars = styled.div`
  margin-top: 20px;
  display: inline-block;
  font-size: ${({ mediaQuery }) => (mediaQuery ? '8rem' : '4rem')};
  line-height: 1;

  &:before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      #23c686 ${({ percent }) => percent}%,
      #f6f6f6 ${({ percent }) => percent}%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

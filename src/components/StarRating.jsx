import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

function StarRating({ percent, forwardedRef }) {
  return (
    <StarContainer ref={forwardedRef} percent={percent}>
      <StarBackground>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />

        <StarFront id='StarFront'>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </StarFront>
      </StarBackground>
    </StarContainer>
  )
}

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 3em;
  justify-content: center;
  margin-top: 50px;

  div {
    font-size: 8rem;
    @media (max-width: 1100px) {
      font-size: 4rem;
    }
  }

  #StarFront {
    width: ${({ percent }) => percent}%;
  }
`
const StarBackground = styled.div`
  display: flex;
  color: #ebebeb;
  position: relative;
`
const StarFront = styled.div`
  display: flex;
  color: #23c686;
  overflow: hidden;
  position: absolute;
  text-shadow: 2px 2px 5px #23c686;
  top: 0;
  transition: width 0.5s;
`

export default StarRating

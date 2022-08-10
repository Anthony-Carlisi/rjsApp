import styled from 'styled-components'
import { useRef } from 'react'

function ReviewCard({ review, name, tag, avatar }) {
  const ref = useRef(null)

  const onMouseLeave = () => {
    ref.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Card>
      <CardHeader>
        <Avatar src={avatar}></Avatar>
        <CardTitle>
          <p>{name}</p>
          <p>{tag}</p>
        </CardTitle>
      </CardHeader>
      <CardBody onMouseLeave={onMouseLeave} ref={ref}>
        {review}
      </CardBody>
    </Card>
  )
}

const CardBody = styled.p`
  height: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 1100px) {
    &:hover {
      overflow: scroll;
      display: flex;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
`

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px; ;
`

const Avatar = styled.img`
  max-width: 54px;
  max-height: 54px;
`

const Card = styled.div`
  color: #4a4a4a;
  font-family: 'lato';
  font-weight: 100;
  background-color: white;

  display: flex;
  flex-direction: column;
  height: 202px;
  width: 350px;
  min-width: 340px;
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 8px 0px,
    rgb(0 0 0 / 16%) 0px 31px 30px -18px;
  border-radius: 10px;
  margin: 15px;
  padding: 20px;
  /* margin-top: 4rem; */
  font-size: 16px;
`
const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`

export default ReviewCard

import Navbar from '../components/Navbar'
import bg from '../assets/bg.svg'
import StarRating from '../components/StarRating'
import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../utils/StaticData'
import IconLOC from '../assets/IconLOC.svg'
import IconMCA from '../assets/IconMCA.svg'
import IconWrench from '../assets/IconWrench.svg'
function Homepage() {
  const [percent, setPercent] = useState(0)
  const starRatingRef = useRef()
  const calledOnce = useRef(false)
  const isVisible = useOnScreen(starRatingRef)

  useEffect(() => {
    if (calledOnce.current) return

    if (isVisible) {
      setPercent((4.6 / 5) * 100)
      calledOnce.current = true
    }
  }, [isVisible])

  return (
    <>
      <Navbar />
      <Body>
        <TitleSection background={bg}>
          <Header>
            <H1 style={{ maxWidth: '600px' }}>
              Forget Everything You Know About Lending
            </H1>
            <H3>Instant everything. incredible deals. Big heart.</H3>
            <TitleButton>Check Our Rates</TitleButton>
          </Header>
        </TitleSection>
        <section
          style={{
            background: '#f7f7f7',
            paddingBottom: '9rem',
          }}
        >
          <Header>
            <H2>The (Almost) 5 Star Lending Solution</H2>
            <H3>
              Solidify has earned 4.6 stars on google reviews, and is also
              top-rated by BBB, and others
            </H3>
          </Header>
          <StarRating forwardedRef={starRatingRef} percent={percent} />
          <Slider>
            <SliderTrack>
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  review={review.review}
                  name={review.name}
                  avatar={review.avatar}
                />
              ))}
            </SliderTrack>
          </Slider>
        </section>
        <section style={{ paddingTop: '11rem' }}>
          <Header>
            <H2>
              Incredible Deals. Renewal Opportunities. Early Payoff Discounts.
            </H2>
            <H3>Amazing deals when you apply</H3>
          </Header>
          <CardContainer>
            <Card>
              <Icon src={IconLOC} alt='' />
              <CardHeader>Business Line of Credit</CardHeader>
              <CardSubText>
                Ongoing financial needs? A line of credit is what you seek
              </CardSubText>
              <CardInfoContainer>
                <div>
                  <p style={{ fontSize: '1rem' }}>Terms</p>
                  <p>6 months - 2 years</p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem' }}>Funds Within</p>
                  <p>1 day</p>
                </div>
              </CardInfoContainer>
              <Button>Qualify</Button>
              <CardButtonText>Starting at 8%</CardButtonText>
            </Card>
            <Card>
              <Icon src={IconMCA} alt='' />
              <CardHeader>Merchant Cash Advance</CardHeader>
              <CardSubText>
                Borrow against future earnings with flexible requirements.
              </CardSubText>
              <CardInfoContainer>
                <div>
                  <p style={{ fontSize: '1rem' }}>Terms</p>
                  <p>3 - 24 months</p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem' }}>Funds Within</p>
                  <p>Same Day</p>
                </div>
              </CardInfoContainer>
              <Button>Qualify</Button>
              <CardButtonText>Starting at 1.10</CardButtonText>
            </Card>
            <Card>
              <Icon src={IconWrench} alt='' />
              <CardHeader>Equipment Financing</CardHeader>
              <CardSubText>
                Need new equipment? Options for nearly every need.
              </CardSubText>
              <CardInfoContainer>
                <div>
                  <p style={{ fontSize: '1rem' }}>Terms</p>
                  <p>1 year - 5 years</p>
                </div>
                <div>
                  <p style={{ fontSize: '1rem' }}>Funds Within</p>
                  <p>2 days</p>
                </div>
              </CardInfoContainer>
              <Button>Qualify</Button>
              <CardButtonText>Starting at 8%</CardButtonText>
            </Card>
          </CardContainer>
        </section>
      </Body>

      <Footer>Test</Footer>
    </>
  )
}

// Styling
const CardInfoContainer = styled.div`
  display: flex;
  padding-top: 10px;
  width: 100%;
  justify-content: space-between;
  font-size: 0.9rem;
  text-align: center;
  color: #707070;
`

const CardSubText = styled.p`
  padding-top: 10px;
  text-align: center;
  color: #4a4a4a;
`

const CardButtonText = styled.p`
  padding-top: 10px;
  color: #a9a9a9;
  font-size: 0.9rem;
`

const CardHeader = styled.h4`
  font-size: 1.2rem;
  padding-top: 10px;
  font-weight: 800;
`

const Icon = styled.img`
  width: 120px;
  height: 120px;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
`
const Card = styled.div`
  margin: 0 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: auto;
  border-radius: 10px;
  width: 270px;
  align-items: center;
  box-shadow: rgb(0 0 0 / 16%) 0px 47px 46px -27px,
    rgb(0 0 0 / 6%) 0px 2px 12px 0px;
`

const SliderTrack = styled.div`
  animation: scroll 30s linear infinite alternate running;
  display: flex;
  margin-bottom: 30px;
  @keyframes scroll {
    100% {
      transform: translate3d(calc(-100% + 100vw), 0, 0);
    }
  }
  @media (min-width: 1100px) {
    :hover {
      animation-play-state: paused;
    }
  }
`

const Slider = styled.div`
  /* animation: scroll 40s linear infinite; */
  display: flex;
  position: absolute;
  overflow: hidden;
  margin-top: 30px;
  width: 100%;
`
const Footer = styled.div`
  margin-top: 4rem;
  height: 200px;
  background-color: #4a4a4a;
  color: white;
`

const Body = styled.div`
  color: #4a4a4a;
  font-family: 'lato';
  font-weight: 100;

  @media (max-width: 1100px) {
    header {
      margin-top: 1.6rem;
    }
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.1rem;
    }
    button {
      margin-top: 20px;
    }
  }
`

const TitleSection = styled.section`
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 40rem;
`
const Header = styled.header`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 0 25px;
`
const H1 = styled.h1`
  font-family: 'Merriweather';
  font-size: 3.2rem;
`
const H2 = styled.h2`
  font-size: 3rem;
  max-width: 800px;
`
const H3 = styled.h3`
  font-size: 1.2rem;
  margin-top: 20px;
  max-width: 550px;
`
const TitleButton = styled.button`
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
  margin-top: 60px;
`
const Button = styled.button`
  align-self: center;
  font-size: 1rem;
  margin-top: 20px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 10px 20px;
  border-radius: 5px;
  color: #ffffff;
  background-color: #23c686;
  border: 1px solid transparent;
  box-shadow: rgb(35 198 134 / 50%) 0px 10px 40px -10px;
`
export default Homepage

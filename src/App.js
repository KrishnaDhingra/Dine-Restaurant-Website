import './index.css'
import styled from 'styled-components'
import HeroImage from './images/homepage/hero-bg-desktop.jpg'
import HeroImageTablet from './images/homepage/hero-bg-tablet.jpg'
import HeroImageMobile from './images/homepage/hero-bg-mobile.jpg'
import HeroImageMobile2x from './images/homepage/hero-bg-mobile@2x.jpg'
import logo from './images/logo.svg'
import Features from './components/Features/features.js'
import Highlights from './components/Highlights/highlights.js'
import SpecialEvents from './components/Special_Events/special_events.js'
import Reservation from './components/Reservation/reservation.js'
import Footer from './components/Footer/footer.js'
import Book from './components/Book/book.js'

const Body = styled.div`
  margin: 0;
  box-sizing: border-box;
  padding: 0px 10vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: 'Spartan', sans-serif;
  min-width: 100%;
  min-height: 100vh;
  background-image: url(${HeroImage});
  background-size: cover;
  overflow-x: hidden;

  
  @media (max-width: 1430px) {
    padding: 0px 0px;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
  }
  @media(max-width: 1330px){
    background-image: url(${HeroImageTablet});
  }
  @media(max-width: 590px){
    background-image: url(${HeroImageMobile});
  }

  .heading_container{
    width: 600px;
    
    @media (max-width: 1430px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }


  }

`
const Text = styled.p`
  color: white;
  margin: 0;
  padding: 0;
`
const Logo = styled.img`
  width: 100px;
  height: 100%;

  @media(max-width: 1330px){
    margin-top: 30rem;
  }
  @media(max-width: 950px){
    margin-top: 20rem;
  }
  @media(max-width: 500px){
    margin-top: 12rem;
  }
`
const Heading = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 300;

  @media (max-width: 1430px) {
    font-size: 32px;
    width: 300px;
    line-height: 45px;
    text-align: center;
    margin: auto;

  }
`
const Info = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 35px;
  margin-top: -10px;
  @media (max-width: 1430px) {
      font-size: 1rem;
      width: 80%;
      margin: auto;
      text-align: center;
      line-height: 30px;
  }
`
const Button = styled.button`
  color: white;
  background-color: transparent;
  padding: 1.7rem 4rem;
  font-family: 'Spartan', sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  border: 1px solid white;
  text-transform: uppercase;
  margin-top: 1rem;
  transition: all 0.4s;

  &:hover{
      background-color: white;
      color: black;
  }

  @media (max-width: 1430px) {
    margin: auto;
    width: 250px;
    padding: 1.5rem 3.6rem;
  }
`

function App() {
  return (
    <div>
        <Body>
          <Logo src={logo}/>
          <div className="heading_container">
          <Heading>Exquisite dining
          since 1989</Heading>
          <Info>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</Info>
          <Button>Book a table</Button>
          </div>
        </Body>
        <Features></Features>
        <Highlights></Highlights>
        <SpecialEvents></SpecialEvents>
        <Reservation></Reservation>
        <Footer></Footer>
        {/* <Book></Book> */}
    </div>
  );
}

export default App;

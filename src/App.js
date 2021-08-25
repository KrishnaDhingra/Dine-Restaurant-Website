import styled from 'styled-components'
import logo from './images/logo.svg'
import desktop_hero from './images/homepage/hero-bg-desktop.jpg'
import './index.css'

const Body = styled.div`
  margin: 0;
  box-sizing: border-box;
  padding: 0px 10vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #111111;
  font-family: 'Spartan', sans-serif;
  min-width: 100%;
  min-height: 100vh;
`
const Text = styled.p`
  color: white;
  margin: 0;
  padding: 0;
`
const Logo = styled.img`
  width: 100px;
  height: 100%;
`
const Heading = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: 300;
`
const Info = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 400;
  width: %;
  line-height: 35px;
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
`

function App() {
  return (
        <Body>
          <Logo src={logo}/>
          <div className="heading_container">
          <Heading>Exquisite dining
          since 1989</Heading>
          <Info>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</Info>
          <Button>Book a table</Button>
          </div>
        </Body>
  );
}

export default App;

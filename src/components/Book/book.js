import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.svg'
import BookingImage from '../../images/booking/hero-bg-desktop.jpg'
import Footer from '../Footer/footer.js'


const Body = styled.div`
    background-color: #111111;
    background-image: url(${BookingImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

`
const Inner = styled.div`
  margin: 0;
  margin: auto;
  padding: 13vh 0vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: 'Spartan', sans-serif;
  max-width: 1300px;
  min-height: 80vh;
  overflow-x: hidden;

  
  @media (max-width: 1430px) {
    padding: 0px 0px;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
  }

  .heading_container{
      display: flex;
      gap: 13rem;

  }

    .heading_left{
    width: 450px;
    
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

const InputContainer = styled.div`
    background-color: white;
    position: absolute;
    margin-top: 4rem;
    width: 33.183rem;
    height: 35rem;
    box-shadow: 0 7.5rem 10rem -5rem rgba(56, 66, 85, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
`
const NameInput = styled.input`
  width: 82%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  padding: 1rem 1rem;
  box-sizing: border-box;
  background-color: transparent;
  font-family: 'Spartan', sans-serif;
  color: black;
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.5;
  transition: all 0.2s;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &::placeholder{
    font-family: 'Spartan', sans-serif;
    color: black;
    font-size: 1.2rem;
    font-weight: 300;
  }
  &:focus{
    opacity: 1;
  }
  `
const EmailInput = styled(NameInput)``
const DateInput = styled.input`  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  padding: 1rem 1rem;
  box-sizing: border-box;
  background-color: transparent;
  width: 80px;
  font-family: 'Spartan', sans-serif;
  color: black;
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.5;
  transition: all 0.2s;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus{
    opacity: 1;
  }
  
  &::placeholder{
    font-family: 'Spartan', sans-serif;
    color: black;
    font-size: 1.1rem;
    font-weight: 300;
  }
`
const DateContainer = styled.div`
  width: 82%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`
const TimeContainer = styled(DateContainer)``
const DateLabel = styled.span`
  font-size: 1.1rem;
  color: rgb(17, 17, 17);
  margin-right: 2.5rem;
`
const PeopleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 82%;
  border-bottom: 1px solid black;
  padding: 1rem 1rem;
  box-sizing: border-box;

`
const Subtract = styled.button`
  border: none;
  background-color: transparent;
  color: brown;
  font-size: 1.2rem;
  font-weight: 800;
  box-sizing: border-box;
  transition: all 0.2s;
  
  &:hover{
    transform: scale(1.2)
  }
`
const Add = styled(Subtract)``
const PeopleCount = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
`
const Button = styled.button`
  color: white;
  background-color: rgb(17, 17, 17);
  padding: 1.7rem 4rem;
  font-family: 'Spartan', sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  border: 1px solid black;
  text-transform: uppercase;
  margin-top: 1rem;
  transition: all 0.4s;
  width: 85%;

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
const MiddleContainer = styled.div`
  width: 100%;
  min-height: 37vh;
  background-color: whitesmoke;
`

function Book() {

  const [people, setPeople] = useState(4)
  return (
    <div>
        <Body>
            <Inner>

                <Logo src={logo}/>
                <div className="heading_container">
                    <div className="heading_left">
                        <Heading>Reservations</Heading>
                        <Info>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</Info>
                    </div>

                    <div className="heading_right">
                        <InputContainer>
                          <NameInput placeholder="Name"></NameInput>
                          <EmailInput placeholder="Email"></EmailInput>
                          <DateContainer>
                            <DateLabel>Pick a data</DateLabel>
                            <DateInput type="number" placeholder="MM"></DateInput>
                            <DateInput type="number" placeholder="DD"></DateInput>
                            <DateInput type="number" placeholder="YYYY"></DateInput>
                          </DateContainer>
                          <TimeContainer>
                            <DateLabel>Pick a time</DateLabel>
                            <DateInput type="number" placeholder="09"></DateInput>
                            <DateInput type="number" placeholder="00"></DateInput>
                            <DateInput type="text" placeholder="AM"></DateInput>
                          </TimeContainer>
                          <PeopleContainer>
                            <Subtract onClick={() =>{
                              if(people !== 0){

                                setPeople(people-1)
                              }
                            }}>-</Subtract>
                            <PeopleCount>{people} People</PeopleCount>
                            <Add onClick={() =>{
                              setPeople(people+1)
                            }}>+</Add>
                          </PeopleContainer>
                          <Button>MAKE A RESERVATION</Button>
                        </InputContainer>
                    </div>
                </div>
            </Inner>

            <MiddleContainer></MiddleContainer>

            <Footer></Footer>
        </Body>

    </div>
  );
}
export default Book
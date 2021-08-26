import React from 'react'
import styled from 'styled-components'
import FamilyGatheringImage from '../../images/homepage/family-gathering-desktop.jpg'

const Body = styled.div`
    min-height: 100vh;
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    max-width: 1300px;
    margin: auto;
    align-items: center;

    @media (max-width: 1430px) {
        flex-direction: column;
        gap: 4rem;
  }
`
const LeftContainer = styled.img`
    @media (max-width: 1430px) {
        margin-top: 4rem;
  }

`
const RightContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    @media (max-width: 1430px) {
        align-items: center;
        max-width: 1000px;
        flex-direction: column-reverse;
        gap: 0rem;
  }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1430px) {
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
  }
`
const TypesContainer = styled.div``
const Type = styled.p`
    font-size: 1rem;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 1.5px;
    color: rgb(76, 76, 76);
    @media (max-width: 1430px) {
        text-align: center;
  }
`
const Heading = styled.h1`
    color: black;
    font-size: 40px;
    line-height: 56px;
    font-weight: 700;
    letter-spacing: 1.5px;
`
const Info = styled.p`
    color: black;
    font-size: 19px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: -0.5rem;
    @media( max-width: 1430px){
        text-align: center;
    }
`
const Button = styled.button`
  color: white;
  background-color: black;
  padding: 1.5rem 3.8rem;
  font-family: 'Spartan', sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  width: 247px;
  border: none;
  
`


function SpecialEvents() {

    return (
        <Body>
            <LeftContainer src={FamilyGatheringImage}></LeftContainer>
            <RightContainer>
                <InfoContainer>
                    <Heading>Family Gathering</Heading>
                    <Info>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.</Info>
                    <Button>BOOK A TABLE</Button>
                </InfoContainer>
                <TypesContainer>
                    <Type>FAMILY GATHERING</Type>
                    <Type>SPECIAL EVENTS</Type>
                    <Type>SOCIAL EVENTS</Type>
                </TypesContainer>
            </RightContainer>
        </Body>
    )
}
export default SpecialEvents
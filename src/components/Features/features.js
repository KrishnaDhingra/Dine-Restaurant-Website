import React from 'react'
import styled from 'styled-components'
import FamilyImage from '../../images/homepage/enjoyable-place-desktop.jpg'
import LocallyImage from '../../images/homepage/locally-sourced-desktop.jpg'
import FamilyImageTablet from '../../images/homepage/enjoyable-place-tablet.jpg'
import LocallyImageTablet from '../../images/homepage/locally-sourced-tablet.jpg'

const Body = styled.div`
    margin: 0;
    box-sizing: border-box;
    padding-bottom: 10vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-family: 'Spartan', sans-serif;
    max-width: 1300px;
    margin: auto;
    min-height: 100vh;

    @media (max-width: 1430px) {
        gap: 4rem;
  }

    .info_container{
        flex-basis: 45%;
        display: flex;
        flex-direction: column;
        align-self: stretch;
        justify-content: center;
        gap: 1.3rem;
        @media (max-width: 1430px) {
            align-items: center;
            
        }
    }
`

const ImageContainer = styled.div`
    overflow: hidden;
    @media (max-width: 1430px) {
        content: url(${FamilyImageTablet});
    }
`
const Family = styled.img`
    transform: translateY(-70px);
    flex-basis: 40%;
    width: 540px;
    height: 100%;

    @media (max-width: 1430px) {
        width: 500px;
        height: 700px;
        content: url(${FamilyImageTablet});
  }
`
const Locally = styled(Family)`
    transform: translateY(70px);

    @media (max-width: 1430px) {
        content: url(${LocallyImageTablet});
  }
`

const FamilyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1430px) {
        flex-direction: column;
        gap: 4rem;
  }
`
const LocallyContainer = styled(FamilyContainer)`
    flex-direction: row-reverse;

    @media (max-width: 1430px) {
        flex-direction: column;
  }

`

const FamilyHeading = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: rgb(36, 43, 55);
    line-height: 55px;
    width: 69%;
    @media (max-width: 1430px) {
        text-align: center;
        width: 60%;
        font-size: 1.7rem;
        line-height: 45px;
  }
`
const FamilyInfo = styled.div`
    font-size: 18px;
    font-weight: 400;
    width: 90%;
    line-height: 30px;
    color: rgb(36, 43, 55);
    @media (max-width: 1430px) {
        text-align: center;
        width: 100%;
        font-size: 1rem;
  }

`
const LineCircle = styled.div`
    display: flex;
    gap: 0.7rem;
    justify-content: flex-end;
    margin-bottom: 1.6rem;
    align-items: center;
    flex-direction: row-reverse;

    @media (max-width: 1430px) {
        margin-bottom: 0.4rem;
  }
`
const Line = styled.div`
    width: 61px;
    height: 1px;
    background-color: brown;

`
const Circle = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    border: 1px solid brown;

`


function Features() {
    return (
        <Body>

            <FamilyContainer>
                <ImageContainer>
                    <Family src={FamilyImage} />
                </ImageContainer>
                <div className="info_container">
                    <LineCircle>
                        <Line></Line>
                        <Circle></Circle>
                    </LineCircle>
                    <FamilyHeading>
                        Enjoyable place
                        for all the family</FamilyHeading>
                    <FamilyInfo>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</FamilyInfo>
                </div>
            </FamilyContainer>
            <LocallyContainer>
                <ImageContainer>
                    <Locally src={LocallyImage} />
                </ImageContainer>
                <div className="info_container">
                    <LineCircle>
                        <Line></Line>
                        <Circle></Circle>
                    </LineCircle>
                    <FamilyHeading>
                        The most locally
                        sourced food</FamilyHeading>
                    <FamilyInfo>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</FamilyInfo>
                </div>
            </LocallyContainer>
        </Body>
    )
}
export default Features
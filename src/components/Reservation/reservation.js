import React from 'react'
import styled from 'styled-components'
import BeefDesktop from '../../images/homepage/beef-desktop-tablet.jpg'
import SalmonDesktop from '../../images/homepage/salmon-desktop-tablet.jpg'
import ChocolateDesktop from '../../images/homepage/chocolate-desktop-tablet.jpg'

const Body = styled.div`
    background-color: #111111;
`
const Inner = styled.div`

    box-sizing: border-box;
    padding-bottom: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    font-family: 'Spartan', sans-serif;
    max-width: 1300px;
    min-height: 100vh;
    background-color: #111111;
    margin: auto;
    gap: 8rem;

    @media (max-width: 1430px) {
        flex-direction: column;
        gap: 4rem;
  }
`
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    flex-basis: 55%;
    @media (max-width: 1430px) {
        align-items: center;
        width: 600px;
        margin: auto;
        margin-top: 10vh;
  }
`
const LineCircle = styled.div`
    display: flex;
    gap: 0.7rem;
    justify-content: flex-end;
    margin-bottom: 1.6rem;
    align-items: center;
    flex-direction: row-reverse;
    margin-top: -70px;
`
const Line = styled.div`
    width: 61px;
    height: 1px;
    background-color: khaki;
`
const Circle = styled.div`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    border: 1px solid khaki;
`
const Heading = styled.h1`
    color: white;
    font-size: 40px;
    line-height: 56px;
    font-weight: 700;
    width: 80%;
    @media (max-width: 1430px) {
        width: 100%;
        text-align: center;
    }
    `
const Info = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-top: -7px;
    @media (max-width: 1430px) {
        text-align: center;
  }
`
const RightContainer = styled.div`
    flex-basis: 65%;
    @media (max-width: 1430px) {
        width: 600px;
  }
`
const First = styled.div``
const Second = styled.div``
const Third = styled.div``
const TopInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
`
const LeftImage = styled.img`
    width: 127px;
    height: 95px;
`
const LeftHeading = styled.h1`
    color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    margin-top: -5px;
`
const LeftInfo = styled.p`
    color: white;
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
`
const Divider = styled.div`
    background-color: white;
    opacity: 0.2;
    height: 0.2px;
    margin-top: 15px;
    margin-bottom: 20px;
    width: 105%;
`

function Highlights() {

    return (
        <Body>
            <Inner>
            </Inner>

        </Body>
    )
}
export default Highlights
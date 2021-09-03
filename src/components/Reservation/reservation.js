import React from 'react'
import styled from 'styled-components'
import ReadyImage from '../../images/homepage/ready-bg-desktop.jpg'
const Body = styled.div`
    display: grid;
    min-height: 240px;
    background-image: url(${ReadyImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const Inner = styled.div`
    display: flex;
    width: 1300px;
    justify-content: space-between;
    margin: auto;
    align-items: center;
`
const Ready = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: white;
`
const Button = styled.button`
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 1.5rem 3.8rem;
    font-family: 'Spartan', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all 0.4s;
    font-weight: 400;

    &:hover{
        background-color: white;
        color: black;
    }
`

function Reservation() {

    return (
        <Body>
            <Inner>
                <Ready>Ready to make a reservation?</Ready>
                <Button>BOOK A TABLE</Button>
            </Inner>

        </Body>
    )
}
export default Reservation;
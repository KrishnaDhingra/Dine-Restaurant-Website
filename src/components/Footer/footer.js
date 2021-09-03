import React from 'react'
import styled from 'styled-components'
import LogoImage from '../../images/logo.svg'

const Body = styled.div`
    min-height: 250px;
    background-color: #111111;
    display: grid;
    place-items: center;
`
const Inner = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.img`
    width: 110px;
    height: 100%;
`
const Middle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Right = styled(Middle)``

const Text = styled.p`
    letter-spacing: 1.5px;
    font-size: 1.1rem;
    color: white;
    font-weight: 400;
    margin: 0.7rem 0rem 0rem 0rem;
`

function Footer() {

    return (
        <Body>
            <Inner>
                <Left src={LogoImage}></Left>
                <Middle>
                    <Text>MARTHWAITE, SEDBERGH</Text>
                    <Text>CUMBRIA</Text>
                    <Text>+00 44 123 4567</Text>
                </Middle>
                <Right>
                    <Text>OPEN TIMES</Text>
                    <Text>MON - FRI: 09:00 AM - 10:00 PM</Text>
                    <Text>SAT - SUN: 09:00 AM - 11:30 PM</Text>
                </Right>
            </Inner>
        </Body>
    )
}
export default Footer;
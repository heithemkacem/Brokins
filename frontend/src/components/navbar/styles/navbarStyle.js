import styled from "styled-components"
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 88px;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-left: 5%;
    
`

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: center;
    padding-right: 50px;

`

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`
export const NavbarLinkContainer = styled.div`
    display: flex;
`

export const NavbarLink = styled(Link) `
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease-in;
    color: #a102f2;
    font-size: large;

    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
export const Logo = styled.img`
    margin: 10px;
`


export const NavbarExtendedContainer= styled.div`

`

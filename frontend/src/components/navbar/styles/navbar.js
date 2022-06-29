import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
    padding: 0 2rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

`

export const NavLink = styled(Link)`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease-in;
    color: #a102f2;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: #a102f2;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px ) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center,
    margin-right:24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link) `
    border-radius: 4px;
    background: #a102f2;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: blue; 
        color: #010606;
    }
`





/*  THIS IS THE OLD MENU STYLE

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction:column;
        width: 100%;
        max-height; ${({isOpen}) => (isOpen ? "300px" : "0")}
        transition: max-height: 0.3s
    } */
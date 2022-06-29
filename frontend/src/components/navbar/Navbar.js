import React , {useState} from "react";
import {  Nav , NavLink , Bars, NavMenu, NavBtn , NavBtnLink } from "./styles/navbar";
/* import { LeftContainer, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, RightContainer , Logo} from "./styles/navbarStyle"; */
import LogoImg from "../../assets/brokinsLogo1.png"


function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                        <img src={LogoImg} alt="Brokins Logo"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/comingSoon" >Conseil</NavLink>
                    <NavLink to="/comingSoon" >Devis</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Espace Client</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar





{/* <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo src={LogoImg}></Logo>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Conseil</NavbarLink>
                        <NavbarLink to="/">Devis</NavbarLink>
                        <NavbarLink to="/">Espace Client</NavbarLink>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer> */}
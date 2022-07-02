import styled from "styled-components";

//background 
import background from './../assets/bg.jpg'

// React router 
import {Link} from 'react-router-dom'


export const colors ={
    primary: "#9cb7ba",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF", 
    red: "#DC2626"
}

// Styled component 
export const StyledContainer = styled.div`
    margin: 20px;
    padding: 20px;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Home 
// Title Styled Component
export const StyledTitle = styled.h2`
    font-size: ${(props)=> props.size}px;
    text-align: center;
    color: ${(props)=> props.color ? props.color: colors.dark1};
    padding: 5px;
    margin-bottom: 20px;
`
// Subtitle Styled Component
export const StyledSubtitle = styled.p`
    font-size: ${(props)=> props.size}px;
    text-align: center;
    color: ${(props)=> props.color ? props.color: colors.primary};
    padding: 5px;
    margin-bottom: 25px;
`
// Logo/Avatar styled component
export const Avatar = styled.div`
    width:400px;
    height:auto;  
    background-size: cover;
    background-position: center;
    margin: auto;
`
// Button styled component 
export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px; 
    background-color: transparent;
    font-size:16px;
    border: 3px solid ${colors.dark1};
    border-radius:25px;
    color: ${colors.dark1};
    text-decoration: none;  
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.light1};
        color: ${colors.theme};
        cursor : pointer;
    }
`
// Button group
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top : 25px;
`

// Input Styled Component

export const StyledTextInput = styled.input`
    width: 280px;
    padding:15px;
    padding-left: 50px;
    font-size:17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.primary}
    border: 0;
    outline:0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props)=> props.invalid && `background-color: ${colors.red}; color:${colors.primary};`}

    &:focus {
        color: black;
    }
`
// Label Styled Component
export const StyledLabel = styled.p`
    text-align:left;
    font-size:13px;
    font-weight: bold;
`
// Form Area Styled Component
export const StyledFormArea = styled.div`
    background-color : ${props => props.bg || colors.light2};
    /* text-align: center; */
    padding: 35px 45px; 
`
// Form Button Styled Component
export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px; 
    background-color: transparent;
    font-size:16px;
    border: 2px solid ${colors.theme};
    border-radius:25px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.light1};
        cursor : pointer;
    }
`

export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: letf;
`

export const ExtraText = styled.p`
    font-size: ${(props)=>(props.color? props.color : colors.dark2)};
    padding: 2px;
    margin-top: 10px;
`

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover{
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`

// Icons

export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props)=> props.right && `right: 15px;`}
    ${(props)=>!props.right && `left: 15px;`}
`
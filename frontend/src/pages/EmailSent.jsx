import React from 'react'
import {
    StyledTitle,
    StyledSubtitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    colors,
    StyledFormArea,
    ExtraText
} from "./../components/Styles"
//logo 
import Logo from "./../assets/logo.png"
// react router 
import { useHistory , useParams } from 'react-router-dom'


const EmailSent = () => {
    const history = useHistory()
    const {userEmail , reset} = useParams()
    return(
        <div>
            <div style={{
                position: "absolute",
                top:0,
                left:0,
                backgroundColor: "transparent",
                width:"100%",
                padding: "0px",
                display:"flex",
                justifyContent:"flex-start"

            }}>
                <Avatar image={Logo}/>
            </div>
            {reset && userEmail && (
                <StyledFormArea>
                    <StyledTitle color={colors.theme}>
                        Password Reset
                    </StyledTitle>
                    <StyledSubtitle color={colors.theme}>
                        An email with a password reset link has been sent to your email 
                    </StyledSubtitle>
                    <ExtraText>Check your email and come back to proceed</ExtraText>
                </StyledFormArea>
            )}


            {!reset && userEmail && (
                <StyledFormArea>
                    <StyledTitle color={colors.theme}>
                        Account Confirmation
                    </StyledTitle>
                    <StyledSubtitle color={colors.theme}>
                        An email with your account confirmation link has been sent to your email 
                    </StyledSubtitle>
                    <ExtraText>Check your email and come back to proceed</ExtraText>
                    <ButtonGroup>
                        <StyledButton to={`/login/${userEmail}`}>Proceed</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
            )}

            {!reset && !userEmail && (
                <StyledFormArea>
                    <StyledTitle color={colors.theme}>
                        Password Reset
                    </StyledTitle>
                    <StyledSubtitle color={colors.theme}>
                        Your password has been reset successfully!
                    </StyledSubtitle>
                    <ExtraText>You may now login!</ExtraText>
                    <ButtonGroup>
                        <StyledButton to={`/login`}>Login</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
            )}
            
        </div>
    )
}

export default EmailSent
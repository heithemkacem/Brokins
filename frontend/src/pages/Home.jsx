import React from 'react'
import {StyledTitle, StyledSubtitle, StyledButton, ButtonGroup, colors} from "./../components/Styles"


const Home = () => {
    return(
        <div>
            <StyledTitle color={colors.theme}>
                Welcome to Brokins
            </StyledTitle>
            <StyledSubtitle color={colors.theme}>
                Explore our ansurance brokarage
            </StyledSubtitle>
            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>
                <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
        </div>
    )
}

export default Home
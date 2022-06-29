import React from 'react'
import {useField} from 'formik'

import{
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    ErrorMsg
} from './Styles'



export const TextInput = ({icon, ...props})=> {
    const [field , meta]= useField(props);

    return (
        <div style={{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>
            <StyledTextInput 
                {...field}
                {...props}
            />
            <StyledIcon>
                {icon}
            </StyledIcon>

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): (
                <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>
            )}
        </div>
    )
}
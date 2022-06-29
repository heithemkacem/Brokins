import React from 'react'
import {
    StyledTextInput, 
    StyledFormArea, 
    StyledFormButton,
    StyledLabel,
    Avatar ,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink
} from '../components/Styles'
import Logo from './../assets/logo.png'

// formik

import {Formik, Form} from 'formik'
import { TextInput } from '../components/FormLib'

import * as Yup from 'yup'

//icons
import {FiMail, FiLock, FiUser} from 'react-icons/fi'

// auth & redux 
import { connect } from 'react-redux'
import { signupUser } from '../auth/actions/userActions'
import { useHistory } from 'react-router-dom'

const Signup = ({signupUser}) => {
    const history = useHistory()
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Signup Client</StyledTitle>
                <Formik
                    initialValues={{
                        email:"",
                        password:"",
                        identifiantBrokins:""
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email adress").required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required")
                        })
                    }
                    onSubmit={(values, {setSubmitting , setFieldError})=>{
                        signupUser(values, history , setFieldError , setSubmitting)
                    }}
                >
                    {()=>(
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label ="Email Adress"
                                paceholder="example"
                                icon={<FiMail />}
                            />

                            <TextInput
                                name="identifiantBrokins"
                                type="text"
                                label ="Identifiant Brokins"
                                paceholder="identifiant3"
                                icon={<FiUser />}
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                Signup
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>Already have an account ? <TextLink to ="/login">Login</TextLink></ExtraText>
            </StyledFormArea>
        </div>
    )
}

export default connect(null , {signupUser})(Signup);
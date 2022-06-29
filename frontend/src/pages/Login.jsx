import React from 'react'
import {
 
    StyledFormArea, 
    StyledFormButton,

    Avatar ,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink
} from './../components/Styles'
import Logo from './../assets/brokinsLogo1.png'

// formik

import {Formik, Form} from 'formik'
import { TextInput } from '../components/FormLib'

import * as Yup from 'yup'

//icons
import {FiMail, FiLock} from 'react-icons/fi'

// auth & redux 
import { connect } from 'react-redux'
import { loginUser } from '../auth/actions/userActions'
import { useHistory , useParams} from 'react-router-dom'

const Login = ({loginUser}) => {
    const history = useHistory()
    const {userEmail} = useParams()
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Login Client</StyledTitle>
                <Formik
                    initialValues={{
                        email:userEmail,
                        password:"",
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email adress").required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required")
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        loginUser(values, history, setFieldError, setSubmitting)
                    }}
                >
                    {()=>(
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label ="Email Adress"
                                placeholder="example@brokins.fr"
                                icon={<FiMail />}
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
                                Login
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>Forgotten password ? <TextLink to ="/forgottenpassword">Reset Password</TextLink></ExtraText>
                <ExtraText>New Here ? <TextLink to ="/signup">Signup</TextLink></ExtraText>
            </StyledFormArea>
        </div>
    )
}

export default connect(null , { loginUser })(Login);
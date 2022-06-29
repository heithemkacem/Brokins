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
import Logo from './../assets/logo.png'

// formik

import {Formik, Form} from 'formik'
import { TextInput } from '../components/FormLib'

import * as Yup from 'yup'

//icons
import {FiMail, FiLock} from 'react-icons/fi'

// auth & redux 
import { connect } from 'react-redux'
import { forgottenPassword } from '../auth/actions/userActions'
import { useHistory , useParams} from 'react-router-dom'

const ForgottenPass = ({forgottenPassword}) => {
    const history = useHistory()
    const userEmail = useParams()
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Password Reset</StyledTitle>
                <Formik
                    initialValues={{
                        email:userEmail,
                        redirectUrl :"http://localhost:3000/passwordreset"
                    }}
                    validationSchema={
                        Yup.object({
                            email: Yup.string()
                                .email("Invalid email adress")
                                .required("Required")
                            
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        forgottenPassword(values, history, setFieldError, setSubmitting)
                    }}
                >
                    {()=>(
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label ="Enter your email adress"
                                placeholder="example@brokins.fr"
                                icon={<FiMail />}
                            />


                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                Submit
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}

export default connect(null , { forgottenPassword })(ForgottenPass);
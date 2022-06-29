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
} from '../components/Styles'
import Logo from './../assets/logo.png'

// formik

import {Formik, Form} from 'formik'
import { TextInput } from '../components/FormLib'

import * as Yup from 'yup'

//icons
import {FiLock} from 'react-icons/fi'

// auth & redux 
import { connect } from 'react-redux'
import { resetPassword } from '../auth/actions/userActions'
import { useHistory , useParams} from 'react-router-dom'

const PasswordReset = ({resetPassword}) => {
    const history = useHistory()
    const {userId , resetString} = useParams()
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Password reset</StyledTitle>
                <Formik
                    initialValues={{
                        newPassword:"",
                        confirmNewPassword:"",
                        userId,
                        resetString
                    }}
                    validationSchema={
                        Yup.object({
                            newPassword: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                            confirmNewPassword: Yup.string().required("Required").oneOf([Yup.ref("newPassword")],"Passwords must match"),
                        })
                    }
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        console.log(values);
                        resetPassword(values, history, setFieldError, setSubmitting)
                    }}
                >
                    {()=>(
                        <Form>
                            <TextInput
                                name="newPassword"
                                type="password"
                                label="New Password"
                                placeholder="********"
                                icon={<FiLock />}
                            />

                            <TextInput
                                name="confirmNewPassword"
                                type="password"
                                label="Confirm New Password"
                                placeholder="********"
                                icon={<FiLock />}
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

export default connect(null , { resetPassword })(PasswordReset);
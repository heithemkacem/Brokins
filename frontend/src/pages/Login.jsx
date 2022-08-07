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
                            email: Yup.string().email("adresse email invalide").required("Required"),
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
                                label ="Adresse Email"
                                placeholder="example@brokins.fr"
                                icon={<FiMail />}
                            />

                            <TextInput
                                name="password"
                                type="password"
                                label="Mot de passe"
                                placeholder="********"
                                icon={<FiLock />}
                            />

                            <ButtonGroup>
                                <StyledFormButton type="submit">
                                Se connecter
                                </StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>Mot de passe oubliée ? <TextLink to ="/forgottenpassword">Récupperer mot de passe</TextLink></ExtraText>
                <ExtraText>S'enregistrer ? <TextLink to ="/signup">Signup</TextLink></ExtraText>
            </StyledFormArea>
        </div>
    )
}

export default connect(null , { loginUser })(Login);
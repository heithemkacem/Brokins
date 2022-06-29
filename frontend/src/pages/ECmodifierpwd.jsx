import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { CardContent, CardHeader } from '@mui/material'
import axios from 'axios'
import { getCurrentUserId } from '../auth/actions/userActions' 
import {ButtonGroup, StyledFormButton   } from '../components/Styles'
import  * as Yup from 'yup'
import {Formik, Form} from 'formik'
import { TextInput } from '../components/FormLib'
import { FiLock} from 'react-icons/fi'
const ECmodifierpwd = () => {
    const ResetSchema = Yup.object().shape({
        oldPwd: Yup.string().min(8, "Password is too short").max(26,"Password is too long").required("Required"),
        newPwd: Yup.string().min(8, "Password is too short").max(26,"Password is too long").required("Required"),
        confirmPwd:Yup.string().required().oneOf([Yup.ref("newPwd")],"Password must match")
    });

    const resetPassword = (values,setSubmitting) => {
        
        axios
            .post(`http://localhost:5008/user/changePassword/${getCurrentUserId()}` , {values})
            .then(response => {
                setSubmitting(false)
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return (
        <div className='row container-height'>
            <div>
                <div className="container">
                    <h1 className='text-center'>MES DONNÉES PERSONNELLES</h1>
                    <Box className='container-height'>
                        <Card className=''>
                            <CardHeader
                                title="MODIFER VOTRE MOT DE PASSE"
                            />
                            <CardContent>
                            <Formik
                    initialValues={{
                        oldPwd:"",
                        newPwd:"",
                        confirmPwd:""
                    }}
                    validationSchema={ResetSchema}
                    onSubmit={(values, {setSubmitting , setFieldError})=>{
                        resetPassword(values,setSubmitting)
                    }}
                >
                    {()=>(
                        <Form>
                            <TextInput
                                name="oldPwd"
                                type="password"
                                label ="oldPwd"
                                paceholder="oldPwd"
                                icon={<FiLock />}
                            />
                            <TextInput
                                name="newPwd"
                                type="password"
                                label ="newPwd"
                                paceholder="newPwd"
                                icon={<FiLock />}
                            />
                            <TextInput
                               name="confirmPwd"
                               type="password"
                               label ="confirmPwd"
                               paceholder="confirmPwd"
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
                            </CardContent>
                        </Card>  
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default ECmodifierpwd
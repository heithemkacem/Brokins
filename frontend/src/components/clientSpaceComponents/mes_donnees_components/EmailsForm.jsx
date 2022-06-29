import React, { useState,useEffect } from "react";
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { CardContent, CardHeader } from '@mui/material'
import { useParams } from "react-router-dom";
import axios from "axios";

const EmailsForm = () => {
    const {id} = useParams()

    const [state,setState] = useState({
        emailSociete:'',
        emailDirigeant:'',
    })

    const onInputChange = event => {
        const { name , value } = event.target 

        setState({
            ...state,
            [name]: value
        })
    }

    const [result,setResult] = useState(null)
    const [data,setData] = useState("")
    const getUser = () => {
        axios
            .get(`/user/user/${id}`)
            .then(response => {
                setData(response.data.data)
            })
            .catch((err)=>{
                cosnole.log(err)
            })
    }
    useEffect(() => {
        getUser()
        console.log(data)
    })
    const updateEmails = event => {
        event.preventDefault()
        axios
            .put(`/user/updateUser/${id}` , {...state})
            .then(response => {
                setResult(response.data)
                setState({
                    emailSociete:'',
                    emailDirigeant:'',
                })
            })
            .catch(()=>{
                setResult({
                    success: false,
                    message:'Quelque chose s\'est mal passé, réessayez plus tard'
                })
            })
    }

    return (
        <Card sx={{width:270 , height: 500 , maxWidth: 540}}>
                            <CardHeader
                                title="EMAILS"
                            />
                            <CardContent>
                                <form onSubmit={ updateEmails}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email Société:</label>
                                            <input 
                                                type="text" 
                                                className='form-control'
                                                name="emailSociete"
                                                aria-describedby='emailHelp'
                                                value={state.emailSociete}
                                                onChange={onInputChange}
                                                placeholder={(data.emailSociete) ? data.emailSociete :'emailSociete' }      
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email Dirigeant:</label>
                                            <input 
                                                type="text" 
                                                className='form-control'
                                                name="emailDirigeant"
                                                aria-describedby='emailHelp'
                                                value={state.emailDirigeant}
                                                onChange={onInputChange}
                                                placeholder={(data.emailDirigeant) ? data.emailDirigeant :'emailDirigeant' }      
                                            />
                                        </div>
                                    <Button type="submit" sx={{height: 40, width: 140, background: "#a102f2" }} variant="contained">Validez</Button>
                                </form>
                            </CardContent>
                        </Card>
    )
}

export default EmailsForm
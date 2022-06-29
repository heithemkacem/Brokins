import React, { useState,useEffect } from "react";
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { CardContent, CardHeader } from '@mui/material'
import axios from 'axios'
import { useParams } from "react-router-dom";

const TelephoneForm = () => {
    const {id} = useParams()

    const [state,setState] = useState({
        telephoneFixe:'',
        telephoneMobile:'',
        telephoneSecondaire:'',
        fax:'',
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
    const updateTelephones = event => {
        event.preventDefault()
        axios
            .put(`/user/updateUser/${id}` , {...state})
            .then(response => {
                setResult(response.data)
                setState({
                    telephoneFixe:'',
                    telephoneMobile:'',
                    telephoneSecondaire:'',
                    fax:'',
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
                                title="TELEPHONES"
                            />
                            <CardContent>
                                <form onSubmit={ updateTelephones}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Télephone Fixe:</label>
                                            <input 
                                                type="text" 
                                                className='form-control'
                                                name="telephoneFixe"
                                                aria-describedby='emailHelp'
                                                value={state.telephoneFixe}
                                                onChange={onInputChange}
                                                placeholder={(data.telephoneFixe) ? data.telephoneFixe :'telephoneFixe' }      
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Téléphone Mobile:</label>
                                            <input 
                                                type="text" 
                                                className='form-control'
                                                name="telephoneMobile"
                                                aria-describedby='emailHelp'
                                                value={state.telephoneMobile}
                                                onChange={onInputChange}
                                                placeholder={(data.telephoneMobile) ? data.telephoneMobile :'telephoneMobile' }      
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Téléphone Secondaire:</label>
                                            <input 
                                                type="text" 
                                                className='form-control'
                                                name="telephoneSecondaire"
                                                aria-describedby='emailHelp'
                                                value={state.telephoneSecondaire}
                                                onChange={onInputChange}
                                                placeholder={(data.telephoneSecondaire) ? data.telephoneSecondaire :'telephoneSecondaire' }      
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Fax:</label>
                                            <input 
                                                type="text" 
                                                className='form-control'
                                                name="fax"
                                                aria-describedby='emailHelp'
                                                value={state.fax}
                                                onChange={onInputChange}
                                                placeholder={(data.fax) ? data.fax :'fax' }      
                                            />
                                        </div>
                                    <Button type="submit" sx={{height: 40, width: 140, background: "#a102f2" }} variant="contained">Validez</Button>
                                </form>
                            </CardContent>
                        </Card>
    )
}

export default TelephoneForm
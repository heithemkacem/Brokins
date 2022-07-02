import React, { useState } from "react";
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useParams } from "react-router-dom";
import { CardContent, CardHeader } from '@mui/material'
import axios from "axios";
import { useEffect } from "react";

const EtatCivilForm = () => {

    const {id} = useParams()

    const [state,setState] = useState({
        civilite:'',
        nom:'',
        prenom:'',
        societe:'',
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
   
    const updateEtatCivil = event => {
        event.preventDefault()
        axios
            .put(`/user/updateUser/${id}` , {...state})
            .then(response => {
                setResult(response.data)
                setState({
                    civilite:'',
                    nom:'',
                    prenom:'',
                    societe:'',
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
                title="ETAT CIVIL"
            />
            <CardContent>
                <form onSubmit={updateEtatCivil}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Civilité:*</label>
                        <input 
                            type="text" 
                            className='form-control'
                            name="civilite"
                            aria-describedby='emailHelp'
                            value={state.civilite}
                            placeholder={(data.civilite) ? data.civilite :'civilite' }
                            onChange={onInputChange}
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nom:*</label>
                            <input 
                                type="text" 
                                className='form-control'
                                name="nom"
                                aria-describedby='emailHelp'
                                value={state.nom}
                                onChange={onInputChange}
                                placeholder={(data.nom) ? data.nom :'nom' }
                                required={true}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Prénom:*</label>
                            <input 
                                type="text" 
                                className='form-control'
                                name="prenom"
                                aria-describedby='emailHelp'
                                value={state.prenom}
                                onChange={onInputChange}   
                                placeholder={(data.prenom) ? data.prenom :'prenom' }
                                required={true}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Société:</label>
                        <input 
                            type="text" 
                            className='form-control'
                            name="societe"
                            aria-describedby='emailHelp'
                            value={state.societe}
                            onChange={onInputChange}
                            placeholder={(data.societe) ? data.societe :'societe' }             

                        />
                    </div>
                    <Button type="submit" sx={{height: 40, width: 140, background: "#a102f2" }} variant="contained">Validez</Button>

                </form>
            </CardContent>
        </Card>
    )
}

export default EtatCivilForm
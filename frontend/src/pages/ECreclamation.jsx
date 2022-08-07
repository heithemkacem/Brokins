import React , { useState } from 'react'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useParams } from "react-router-dom";
import ReclamPicture from '../assets/undraw_questions.svg'
// css 
import './Styles-css/contactform.css'
import axios from 'axios'
import {getCurrentUserId} from "../auth/actions/userActions";

const ECreclamation = () => {

    const {id} = useParams()
    const [value,setValue] = useState()
    const [state,setState] = useState({
        subject:'',
        email:'',
        message:''
    })
    const [result,setResult] = useState(null)
    const sendReclam = event => {
        event.preventDefault()
        axios
            .post('http://localhost:5008/user/sendReclamation', {...state})
            .then(response =>  {
                setResult(response.data)
                setState({
                    subject:'',
                    email:'',
                    message:''
                })
            })
            .catch(()=>{
                setResult({
                    success:false,
                    message:"Quelque chose s\'est mal passé, réessayez plus tard"
                })
            })
    }
    const onInputChange = event => {
        const { name , value } = event.target 
        setState({
            ...state,
            [name]: value
        })
    }
    const sendData = () => {
        axios
            .post(`/user/sendClaim/${getCurrentUserId()}`,state)
            .then(response => {
                console.log(response)
            })
            .catch((err)=>{
                cosnole.log(err)
            })
    }


    return (
        <div className="row container-height">
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <div className="container screen-body">
                    <div className="screen-body-item left">
                        <h1 className="app-title">Formulaire de réclamation</h1>
                        <img src={ReclamPicture} alt="Reclam Picture"  className="picture"/>
                    </div>
                <form onSubmit={sendReclam}>
                    
                    <div className="form-group app-form-group">
                        <p>Vous souhaitez nous faire part d'une réclamation relative à votre désaccord sur une quelconque activité,décision,réponse formulée par Brokins, merci d'utiliser ce formulaire ...</p>
                        <p>Merci de remplir tous les champs afin que votre déclaration soit la plus complète et la plus claire possible. Une déclaration détaillée à plus de chance d'être traitée rapidement.N'hésitez pas à joindre un document.</p>
                    </div>
                    <div>
                        <div className="form-group app-form-group">
                            <input
                                type="email"
                                className='form-control app-form-control'
                                name='email'
                                placeholder="Entrez votre email"
                                value={state.email}
                                required={true}
                                onChange={onInputChange}
                            />
                        </div>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Objet: *</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="subject"
                                className="app-form-group"
                                value={value}
                                onChange={onInputChange}
                            >
                                <FormControlLabel value="facture" control={<Radio />} label="Facture" />
                                <FormControlLabel value="contrat" control={<Radio />} label="Contrat" />
                                <FormControlLabel value="reponse" control={<Radio />} label="Réponse" />
                                <FormControlLabel value="relationClient" control={<Radio />} label="Relation client" />
                                <FormControlLabel value="fonctionnement" control={<Radio />} label="Fonctionnement" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="form-group app-form-group">
                        <label>Votre réclamation:</label>
                        <textarea 
                            className='form-control app-form-control' 
                            name="message" 
                            id="" 
                            cols="30" 
                            rows="10"
                            placeholder="VOTRE MESSAGE DE RECLAMATION"
                            value={state.message}
                            onChange={onInputChange}
                            required={true}
                            ></textarea>
                    </div>
                    <Button type="submit" variant="contained" onSubmit={sendData()}>Validez</Button>
                </form>
            </div>
        </div>
        
    )
}

export default ECreclamation
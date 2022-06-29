import React , {useState} from 'react'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

/* import UploadFile from '../components/clientSpaceComponents/UploadFile'; */

import ContactPicture from '../assets/undraw-contact.svg'
// css 
import './Styles-css/contactform.css'
// axios
import axios from 'axios'

const Contact = () => {

    const [value,setValue] = useState()

    const [state,setState] = useState({
        quiEtesVous:'',
        nom: '',
        prenom: '',
        societe: '',
        email: '',
        subject:'',
        message: '',
    })

    const [result, setResult] = useState(null)
    const sendEmail = event => {
        event.preventDefault()
        axios
            .post('http://localhost:5008/user/sendContact' , {...state})
            .then(response => {
                setResult(response.data)
                setState({
                    nom:'',
                    prenom: '',
                    societe: '',
                    email:'',
                    subject:'',
                    message:'',
                    quiEtesVous:''
                })  
            })
            .catch(()=>{
                setResult({
                    success: false,
                    message:'Quelque chose s\'est mal passé, réessayez plus tard'
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

    return (
        <div className='row container-height'>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <div>
                <div className="container screen-body">
                        <div className="screen-body-item left">
                            <h1 className="app-title">Nous Contacter</h1>
                            <p>Merci de remplir tous les champs afin que votre demande soit aiguillée vers le bon service. Vous pouvez également joindre un document</p>
                            <img src={ContactPicture} alt="Contact Picture"  className="picture"/>
                        </div>
                        <form onSubmit={sendEmail}>
                            <fieldset>
                                <div>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Qui êtes vous ?</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="quiEtesVous"
                                            className="app-form-group"
                                            value={value}
                                            onChange={onInputChange}
                                        >
                                            <FormControlLabel value="professionel" control={<Radio />} label="Professionel" />
                                            <FormControlLabel value="assureur" control={<Radio />} label="Assureur" />
                                            <FormControlLabel value="partenaire" control={<Radio />} label="Partenaire" />
                                            <FormControlLabel value="client" control={<Radio />} label="Client" />
                                            <FormControlLabel value="presse" control={<Radio />} label="Presse" />
                                            <FormControlLabel value="investisseur" control={<Radio />} label="Investisseur" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className="form-group app-form-group">
                                        <input 
                                            type="text" 
                                            className='form-control app-form-control'
                                            name='nom'
                                            placeholder="NOM"
                                            value={state.nom}
                                            onChange={onInputChange}
                                        />
                                </div>
                                <div className="form-group app-form-group">
                                    <input 
                                        type="text" 
                                        className='form-control app-form-control'
                                        name='prenom'
                                        placeholder="PRENOM"
                                        value={state.prenom}
                                        onChange={onInputChange}
                                    />
                                </div>
                                <div className="form-group app-form-group">
                                    <input 
                                        type="text" 
                                        className='form-control app-form-control'
                                        name='societe'
                                        placeholder="SOCIETE"
                                        value={state.societe}
                                        onChange={onInputChange}
                                    />
                                </div>
                                <div className="form-group app-form-group">
                                    <input 
                                        type="email" 
                                        className='form-control app-form-control'
                                        name='email'
                                        placeholder="EMAIL"
                                        value={state.email}
                                        onChange={onInputChange}
                                    />
                                </div>
                                <div className="form-group app-form-group">
                                    <input 
                                        type="text" 
                                        className='form-control app-form-control'
                                        name='subject'
                                        placeholder="OBJET"
                                        value={state.subject}
                                        onChange={onInputChange}
                                    />
                                </div>
                                <div className='form-group app-form-group'>
                                    <textarea 
                                        className="form-control app-form-control" 
                                        name="message" 
                                        value={state.message}
                                        onChange={onInputChange}
                                        placeholder="MESSAGE" 
                                        id="" 
                                        cols="30" 
                                        rows="10">
                                        
                                        </textarea>
                                </div>
                            </fieldset>
                            <Button sx={{background: "#a102f2" }} type="submit" variant="contained">Validez</Button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
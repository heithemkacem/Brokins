import React , {useState} from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormGroup } from '@mui/material';
import { Checkbox } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';

// contract img

import ContractPicture from '../assets/undraw_contract.svg'

// Components importation 
import UploadFile from '../components/clientSpaceComponents/UploadFile';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const ResilisationContrat = () => {

    const [assureur, setAssureur] = useState('')
    const handleChange = (event) => {
        setAssureur(event.target.value)
    }
    const [dateDebutContrat , setDateDebutContrat] = useState(new Date())
    const [dateEcheanceContrat , setDateEcheanceContrat] = useState(new Date())
    const [dateArretActivite, setDateArretActivite] = useState(new Date())
    const [dateChangementActivite, setDateChangementActivite] = useState(new Date())
    const [dateTransferLieu, setDateTransferLieu] = useState(new Date())
    const [dateDepartRetraite, setDateDepartRetraite] = useState(new Date())


    return (
        <div className='row container-height'>
            <div>
                <div className="container screen-body">
                    <Box className='container-height'>
                        <form>
                            <div className="screen-body-item left">
                                <h4 className='formTitle'>Formulaire de résiliation de votre contrat en cours chez un autre assureur:</h4>
                                <p>Vous pouvez résilier votre contrat d'assurance dans des conditions différentes de celles d'un particulier</p>
                                <img src={ContractPicture} alt="Contract Picture"  className="picture"/>
                            </div>
                            <div className="formSection">
                                <fieldset>
                                    <h4 className='formTitle'>CONDITIONS DE RESILIATIONS *</h4>
                                    <p>Vous pouvez résilier ce contrat assurance Entreprise dans les hypothèses suivantes:</p>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Votre contrat arrive à échéance et vous respectez un préavis de 2 mois(sauf si votre contrat prévoit un délai de préavis plus court)."  name="checkbox"/>
                                        <FormControlLabel control={<Checkbox />} label="Vous cessez votre activité, ou vous changez d'activité ou vous transférez le lieu d'exercice de votre activité à une autre adresse (dans la mesure oû ce changement entraîne la suppression du risque qui existait dans votre situation antérieure)."  name="checkbox" />
                                        <FormControlLabel control={<Checkbox />} label="Vous changez de situation maritale ou de régime matrimonial."  name="checkbox"/>
                                        <FormControlLabel control={<Checkbox />} label="Vous prenez votre retraite."  name="checkbox" />
                                    </FormGroup>
                                </fieldset>
                            </div>
                            <div className="formSection">
                                <fieldset>
                                <h4 className='formTitle'>INFORMATIONS SUR VOTRE ASSUREUR ACTUEL</h4>
                                    
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <p>Quel est votre assureur actuel ?* </p>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={assureur}
                                            onChange={handleChange}
                                            required="required"
                                            placeholder="Assureur"
                                            name="selctedAssureur"
                                        >
                                            <MenuItem value={10}>AXA</MenuItem>
                                            <MenuItem value={20}>BLABLA</MenuItem>
                                            <MenuItem value={30}>BLABLABLA</MenuItem>
                                        </Select>   
                                    </FormControl>
                                    {/*Zone de saisir de numero de contrat*/}
                                    <div>
                                        <label htmlFor="numeroContratClient">Quel est votre numéro de contrat? *</label>
                                        <input 
                                            type="text" 
                                            name="civilite"
                                        />
                                    </div>
                                    {/*Zone de saisir de date de signature de contrat actuel*/}
                                    <div className="form-group">
                                        <label htmlFor='inputStartDate'>Date signature de votre contrat actuel:*</label>
                                        <DatePicker selected={dateDebutContrat} onChange={(date) => setDateDebutContrat}/>
                                    </div>
                                    {/*Zone de saisir de date écheance de contrat actuel*/}
                                    <div className="form-group">
                                        <label htmlFor='inputEchanceDate'>Date échéance de votre contrat actuel:*</label>
                                        <DatePicker selected={dateEcheanceContrat} onChange={(date) => setDateEcheanceContrat}/>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="formSection ">
                                <fieldset>
                                    <h4 className='formTitle'>INFORMATIONS SUR VOTRE NOUVELLE SITUATION</h4>
                                    
                                    {/*Zone de saisir de date d'arrêt de l'activité*/}
                                    <div className="form-group">
                                        <label htmlFor='inputStartDate'>Date d'arrêt de votre activité:*</label>
                                        <DatePicker selected={dateArretActivite} onChange={(date) => setDateArretActivite}/>
                                    </div>

                                    {/*Zone de saisir de date de changement de votre activité professionnelle*/}
                                    <div className="form-group">
                                        <label htmlFor='inputEchanceDate'>Date changement de votre activité professionnelle:*</label>
                                        <DatePicker selected={dateChangementActivite} onChange={(date) => setDateChangementActivite}/>
                                    </div>
                                    
                                    {/*Zone de saisir de date de transfer de lieu d'exercice d'activité*/}
                                    <div className="form-group">
                                        <label htmlFor='inputEchanceDate'>Date transfert de votre lieu d'exercice d'activité:*</label>
                                        <DatePicker selected={dateTransferLieu} onChange={(date) => setDateTransferLieu}/>
                                    </div>

                                    {/*Zone de saisir de l'adresse de lieu d'exercice d'activité*/}
                                    <div>
                                        <label htmlFor="numeroContratClient">Nouvelle adresse de votre lieu d'exercice:*</label>
                                        <input 
                                            type="text" 
                                            name="civilite"
                                        />
                                    </div>

                                    {/*Zone de saisir de date départ retraite*/}
                                    <div className="form-group">
                                        <label htmlFor='inputEchanceDate'>Date départ retraite:*</label>
                                        <DatePicker selected={dateDepartRetraite} onChange={(date) => setDateDepartRetraite}/>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="formSection">
                                <fieldset>
                                    <p><b id="violetBold">Brokins va envoyer un courrieer de résiliation en recommendé avec accusé de réception à votre assureur sur la base des informations que vous avez communiquées ci-dessus.</b> <br /> Les frais d'envoi du courrier de résiliation sont à la charge de BROKINS SAS. </p>
                                </fieldset>
                            </div>
                            <div className="formSection">
                                <fieldset>
                                    <p><b id="violetBold">L'article L113-16 du Code des assurances dispose que la résiliation prend effet un mois après l'envoi du courrier à votre assureur. <br/>
                                    Nous allons lui réclamer le remboursement du montant de la prime qui correspond à la période au cours de laquelle l'assureur ne court plus de risque</b></p>
                                </fieldset>
                            </div>
                            <div className="formSection">
                                <fieldset>
                                    <p>
                                        <b id="violetBold">Vous devez attacher ci-dessous la copie du document (en 1 page) relatif à l'événement visé ci-dessus</b><br/>
                                        Prenez une photo du document, envoyez-la-vous par mail, stockez-la sur votre ordinateur, puis attachez-la en cliquant sur le bouton "Joindre"
                                    </p>
                                </fieldset>
                            </div>
                            <Button sx={{background: "#a102f2" }} type="submit" variant="contained" onSubmit={console.log(event)}    >Envoyez</Button>
                        </form>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default ResilisationContrat
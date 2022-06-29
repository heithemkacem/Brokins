import * as React from 'react';
import {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link }  from 'react-router-dom'
//css
import './Styling/mesDemandesStyle.css'
import {getCurrentUserId} from './../../auth/actions/userActions'
import axios from 'axios';
export default function MesContratsEnCours() {
    const [data,setData] = useState("")
    const getUser = () => {
        axios
        .get(`/user/user/${getCurrentUserId()}`)
        .then(response => {
            setData(response.data.data)
        })
        .catch((err)=>{
            cosnole.log(err)
        })
    }
    const [contractdata,setContractdata] = useState([])
    const getContract = () => {
        axios
            .get(`/user/contract/${getCurrentUserId()}`)
            .then(response => {
                setContractdata(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    useEffect(() => {
        getUser()
        getContract()
    })
    return (
            <Card sx={{width:470 , height: 600 , maxWidth: 540 , overflowX: 'hidden' , overflowY:'scroll'}}>
                <CardHeader title="Mes Contrats En Cours" />
                <CardContent sx={{margin:0 , padding:0 }}>
                    <div className="firstSection">
                        <Typography variant="subtitle1">
                            "Nom de la Société"
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Identifiant Brokins : {data.identifiantBrokins}
                        </Typography>
                    </div> 
                    <div className="secondarySection">
                       
                        {
                            contractdata.map( contract =>(
                               <>
                                <div className='thirdSection'>
                                <h4 className="title">{contract.nomProduitCommercial}</h4>
                                
                                <p>Prime annuelle : <span><b>{contract.primeTtcAnnuelle}</b></span> - Echéance Annuelle :<span><b>Le {contract.dateEcheanceContrat}</b></span></p>
                                </div>
                                <div className="buttonDiv">
                                    <Button  sx={{height: 50, width: 250, background: "#a102f2"}} variant="contained"> <a href={contract.link}> Télécharger le contrat</a> </Button>
                                </div>
                             
                               </>
                            ))
                                   
                                }
                    </div>
                </CardContent>
            </Card>
);
}
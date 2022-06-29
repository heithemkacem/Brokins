import * as React from 'react';
import { useState , useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link }  from 'react-router-dom'
//css
import axios from 'axios';
import {getCurrentUserId} from './../../auth/actions/userActions'
import './Styling/mesDemandesStyle.css'

export default function MesDemandes() { 

    const [data,setData] = useState("")
    const getUser = () => {
        axios
            .get(`/user/user/${getCurrentUserId()}`)
            .then(response => {
                setData(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const [contractdata,setContractdata] = useState("")
    const getContractNumber = () => {
        axios
            .get(`/user/contractnumber/${getCurrentUserId()}`)
            .then(response => {
                setContractdata(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const [devisdata,setDevisdata] = useState("")
    const getDevisNumber = () => {
        axios
            .get(`/user/devisnumber/${getCurrentUserId()}`)
            .then(response => {
                setDevisdata(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const [comparatifdata,setComparatifData] = useState("")
    const getComparatifNumber = () => {
        axios
            .get(`/user/comparatifnumber/${getCurrentUserId()}`)
            .then(response => {
                setComparatifData(response.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    useEffect(() => {
        getUser()
        getContractNumber()
        getDevisNumber()
        getComparatifNumber()
  
    },[])
    return (
            <Card sx={{width:470 , height: 600 , maxWidth: 540 , overflowX: 'hidden'}}>
                <CardHeader title="Mes Demandes" />
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
                        <div className='thirdSection'>
                            <h4 className="title">Mes contrats en cours</h4>
                            <p>Nombre :<span><b>{contractdata}</b></span></p>
                        </div>
                        <div className="buttonDiv">
                            <Button  component={Link} sx={{height: 50, width: 250, background: "#a102f2"}} to={`/MesDemandes`} variant="contained">Voir mes contrats</Button>
                        </div>
                    </div>
                    <div className="secondarySection">
                        <div className='thirdSection' >
                            <h4 className="title">Mes devis en cours</h4>
                            <p>Nombre :<span><b> {devisdata} </b></span> </p>
                        </div>
                        <div className="buttonDiv">
                            <Button  component={Link} sx={{height: 50, width: 250, background: "#a102f2"}} to={`/MesDemandes`} variant="contained">Voir mes devis</Button>
                        </div>
                    </div>
                    <div className="secondarySection">
                        <div className='thirdSection' >
                            <h4 className="title">Mes comparatifs en cours</h4>
                            <p>Nombre :<span><b> {comparatifdata}</b></span></p>
                        </div>
                        <div className="buttonDiv">
                            <Button  component={Link} sx={{height: 50, width: 250, background: "#a102f2"}} to={`/MesDemandes`} variant="contained">Voir mes comparatifs</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
);
}
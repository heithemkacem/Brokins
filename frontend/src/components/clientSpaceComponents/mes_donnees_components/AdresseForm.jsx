import React , {useState,useEffect} from "react";
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import axios from 'axios'
import { CardContent, CardHeader } from '@mui/material'
import { useParams } from 'react-router-dom'

const AdressForm = () => {
    const {id} = useParams()

    const [state,setState] = useState({
        adresse:'',
        complementAdresse:'',
        code_postal:'',
        ville:'',
    })

    const onInputChange = event => {
        const { name , value } = event.target 

        setState({
            ...state,
            [name]: value
        })
    }
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
    const [result,setResult] = useState(null)
    const updateAdresse = event => {
        event.preventDefault()
        axios
            .put(`/user/updateUser/${id}` , {...state})
            .then(response => {
                setResult(response.data)
                setState({
                    adresse:'',
                    complementAdresse:'',
                    code_postal:'',
                    ville:'',
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
        <Card sx={{width:270 , height: 500 , maxWidth: 540}} >
            <CardHeader
                title="ADRESSE"
            />
            <CardContent>
                <form onSubmit={updateAdresse}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Adresse:*</label>
                        <input 
                            type="text" 
                            className='form-control'
                            name="adresse"
                            aria-describedby='emailHelp'
                            onChange={onInputChange}  
                            placeholder={(data.adresse) ? data.adresse :'adresse' }
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Complément adresse:*</label>
                        <input 
                            type="text" 
                            className='form-control'
                            name="complementAdresse"
                            aria-describedby='emailHelp'
                            onChange={onInputChange}  
                            placeholder={(data.complementAdresse) ? data.complementAdresse :'complementAdresse' }
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Code Postal:*</label>
                        <input 
                            type="text" 
                            className='form-control'
                            name="code_postal"
                            aria-describedby='emailHelp'
                            onChange={onInputChange} 
                            placeholder={(data.code_postal) ? data.code_postal :'postale' }
                            required={true}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ville:</label>
                        <input 
                            type="text" 
                            className='form-control'
                            name="ville"
                            aria-describedby='emailHelp'
                            onChange={onInputChange} 
                            placeholder={(data.ville) ? data.ville :'ville' }  
                        />
                    </div>
                    <Button type="submit" sx={{height: 40, width: 140, background: "#a102f2" }} variant="contained">Validez</Button>

                </form>
            </CardContent>
        </Card>
    )
}

export default AdressForm 
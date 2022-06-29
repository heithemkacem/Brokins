import React , {useState,useEffect} from 'react'
import {
    StyledTitle,
    StyledButton,
    ButtonGroup,
} from "../components/Styles"

// auth & redux 
import { connect } from 'react-redux'
import { logoutUser } from '../auth/actions/userActions'
// react router 
import { useHistory } from 'react-router-dom'
import EnsembleCards from '../components/clientSpaceComponents/EnsembleCards'
import axios from 'axios'
import { getCurrentUserId } from '../auth/actions/userActions'

const Dashboard = ({logoutUser , user}) => {
    
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
    useEffect(() => {
        getUser()
    })
    const history = useHistory()
    return(
        <div>
            <div style={{
                width: "100%"
            }}>
                <StyledTitle>Bienvenue {data.identifiantBrokins} à l'espace client BROKINS</StyledTitle>
                <EnsembleCards/>
                <ButtonGroup>
                    <StyledButton to="/home" onClick={()=> logoutUser(history)}>Se déconnecter</StyledButton>
                </ButtonGroup> 
            </div>
            
        </div>
    )
}

const mapStateToProps = ({ session }) => {
    user: session.user
}

export default connect(null, {logoutUser})(Dashboard)
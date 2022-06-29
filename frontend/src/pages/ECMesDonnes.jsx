import Box from '@mui/material/Box'

// components 
import EtatCivilForm from './../components/clientSpaceComponents/mes_donnees_components/EtatCivilFrom'
import AdressForm from '../components/clientSpaceComponents/mes_donnees_components/AdresseForm'
import TelephoneForm from '../components/clientSpaceComponents/mes_donnees_components/TelephoneForm'
import EmailsForm from '../components/clientSpaceComponents/mes_donnees_components/EmailsForm'


const ECMesDonnes = () => {
    return (
        <div className='row container-height'>
            <div>
                <div className="container">
                    <h1 className='text-center'>MES DONNÉES PERSONNELLES</h1>
                    <Box className='row row-cols-4'>
                        <EtatCivilForm />
                        <AdressForm />
                        <TelephoneForm />
                        <EmailsForm />
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default ECMesDonnes
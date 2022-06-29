import { styled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AccordionContactAssureurs from '../components/clientSpaceComponents/AccordionContactAssureur'

const ECContactAssureurs = () => {
    return (
        <div className="row container">
            <div className="container">
                <div>
                    <h4><b>Voici les coordonnées de votre(vos) assureur(s) en cas de besoin</b></h4>
                    <hr/>
                    <hr/>
                </div>
                <div className="hero">
                    <p><b>Brokins</b>, le courtier assurance des <b>Professionnels et Entreprises</b>, est une societe complètement indépendante des compagnies d'assurance, des mutuelles et des courtiers grossistes.</p>

                    <p>
                        Brokins SAS s'évertuera à signer avec le plus grands nombres d'assureurs,, mutuelles, courtiers-grossistes, spécialisés en assurance Professionnel et Entreprise, afin de vous fournir le service de <a href="#">comparaison</a> le plus complet qui soit.
                    </p>

                    <p>Dans le cadre de vos contacts avec votre(vos) assureur(s), vous aurez besoin d'échanger avec des services différents, il est possible d'avoir à contacter 2 à 4 services différents pour obtenir satisfaction.<br/>
                    Pour cela, brokins a déterminé pour vous les différents services et leurs coordonnées de contact pour vous faciliter la tâche.
                    </p>

                    <p>Par ailleurs, s'agissant d'une réclamation, vous pouvez télécharger un exemple de lettre type <a href="#">ici</a>.</p>
                </div>
                <div className="accordion">
                    <AccordionContactAssureurs/>
                </div>
            </div>
        </div>
    )
} 

export default ECContactAssureurs
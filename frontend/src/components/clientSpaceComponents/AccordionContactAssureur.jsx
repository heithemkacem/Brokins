import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// icons 
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// importation des images 
import generaliLogo from './../../assets/generali-logo.png'
import allianzLogo from './../../assets/AllianzLogo.png'
import axaLogo from './../../assets/axaLogo.png'
import monceauLogo from './../../assets/monceauLogo.png'


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function AccordionContactAssureurs() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Assurance Responsabilité Professionnelle</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='d-flex flex-row'>
                <div className='flex-column '>
                    <a href='#'>Generali</a> <br/>
                    <img src={generaliLogo} alt="GENERAIL-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Allianz</a> <br/>
                    <img src={allianzLogo} alt="ALLIANZ-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Axa</a> <br/>
                    <img src={axaLogo} alt="AXA-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Monceau</a> <br/>
                    <img src={monceauLogo} alt="MONCEAU-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
            </div>
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Assurance Santé</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='d-flex flex-row'>
                <div className='flex-column '>
                    <a href='#'>Generali</a> <br/>
                    <img src={generaliLogo} alt="GENERAIL-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Allianz</a> <br/>
                    <img src={allianzLogo} alt="ALLIANZ-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Axa</a> <br/>
                    <img src={axaLogo} alt="AXA-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Monceau</a> <br/>
                    <img src={monceauLogo} alt="MONCEAU-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Assurance Multirisque Professionnelle</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='d-flex flex-row'>
                <div className='flex-column '>
                    <a href='#'>Generali</a> <br/>
                    <img src={generaliLogo} alt="GENERAIL-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Allianz</a> <br/>
                    <img src={allianzLogo} alt="ALLIANZ-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Axa</a> <br/>
                    <img src={axaLogo} alt="AXA-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Monceau</a> <br/>
                    <img src={monceauLogo} alt="MONCEAU-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Assurance Auto</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='d-flex flex-row'>
                <div className='flex-column '>
                    <a href='#'>Generali</a> <br/>
                    <img src={generaliLogo} alt="GENERAIL-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Allianz</a> <br/>
                    <img src={allianzLogo} alt="ALLIANZ-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Axa</a> <br/>
                    <img src={axaLogo} alt="AXA-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Monceau</a> <br/>
                    <img src={monceauLogo} alt="MONCEAU-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Assurance 2 roues(scooter, moto)</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className='d-flex flex-row'>
                <div className='flex-column '>
                    <a href='#'>Generali</a> <br/>
                    <img src={generaliLogo} alt="GENERAIL-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Allianz</a> <br/>
                    <img src={allianzLogo} alt="ALLIANZ-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Axa</a> <br/>
                    <img src={axaLogo} alt="AXA-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
                <div className='flex-column'>
                    <a href="#">Monceau</a> <br/>
                    <img src={monceauLogo} alt="MONCEAU-LOGO" />
                    <div><EmailIcon/> Pas d'informations pour l'instant </div>
                    <div><PhoneIcon/> 09 69 32 27 25</div>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

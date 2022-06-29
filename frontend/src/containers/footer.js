import React from 'react'
import Footer from '../components/footer/index'
// icons 
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Brokins SAS</Footer.Title>
                        <Footer.Paragagraph>Capital social: 7500 euros <br/>
                        Siège Social: 79. rue de Rennes 75006 PARIS <br/>
                        Tél: 01 43 27 12 43
                        </Footer.Paragagraph>
                        <Footer.Paragagraph>Copyright &copy; 2022  Tous les droits sont réservés</Footer.Paragagraph>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="/aproposdenous">A Propos de Brokins</Footer.Link>
                        <Footer.Link href="#">Mentions Légales</Footer.Link>
                        <Footer.Link href="#">Partenaires Assureurs</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#">Modalités de Paiement</Footer.Link>
                        <Footer.Link href="#">Conditions Générales d'Utilisation</Footer.Link>
                        <Footer.Link href="/contact">Nous Contacter</Footer.Link>
                        <Footer.Link href="#">Parlez-en à vos amis</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Link href="#"><FacebookIcon/></Footer.Link>
                        <Footer.Link href="#"><LinkedInIcon/></Footer.Link>
                        <Footer.Link href="#"><TwitterIcon/></Footer.Link>
                        <Footer.Link href="#"><InstagramIcon/></Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
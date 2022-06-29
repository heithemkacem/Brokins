import * as React from 'react';
import Grid from '@mui/material/Grid'
import MesDemandes from './MesDemandes';
import MesDonneesPerso from './MesDonneesPerso';
import MesServices from './MesServices';

export default function EnsembleCards() {
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Grid item xs={4} >
                    <MesDemandes /> {/* DEMANDES COMPONENT */}
                </Grid>
            
                <Grid item xs={4}>
                    <MesDonneesPerso /> {/* DONNEES PERSO COMPONENT */}
                </Grid>
            
                <Grid item xs={4}>
                    <MesServices /> {/* SERVICES COMPONENT */}
                </Grid>

            </Grid>
        </div>
    );
}
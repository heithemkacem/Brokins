import React from "react";
import Grid from '@mui/material/Grid'
import MesContratsEnCours from "../components/clientSpaceComponents/MesContratsEnCours";
import MesDevisEnCours from "../components/clientSpaceComponents/MesDevisEnCours";
import MesComparatifsEnCours from "../components/clientSpaceComponents/MesComparatifsEnCours";


const MesDemandesPage = () => {
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
                    <MesContratsEnCours/>
                </Grid>
                <Grid item xs={4}>
                    <MesDevisEnCours/>
                </Grid>
                <Grid item xs={4}>
                    <MesComparatifsEnCours/>
                </Grid>
            </Grid>
        </div>
    )
}

export default MesDemandesPage
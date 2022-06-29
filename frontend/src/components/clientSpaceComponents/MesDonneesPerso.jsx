import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { getCurrentUserId } from '../../auth/actions/userActions';

import Button from '@mui/material/Button'
import {Link, useParams} from 'react-router-dom'

export default function MesDonneesPerso() {

    return(
        <Box>
            <Card sx={{width:470 , height: 600 , maxWidth: 540 , overflowX: 'hidden'}}>
                <CardHeader
                    title="Mes Données Personnels"
                />
                <CardContent sx={{margin:0 , padding: 0}}>
                    <div className="firstSection">
                        <Typography variant="subtitle1">
                            Visualisez et modifiez vos informations personnelles
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Certaines informations peuvent modifier le montant de la prime
                        </Typography>
                    </div>
                    <TableContainer >
                        <Table sx={{ maxWidth: 550 }} aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">ETAT CIVIL</TableCell>
                                    <TableCell align="right"><Button component={Link} sx={{height: 40, width: 140, background: "#a102f2" }} to={`/ECMesDonnes/${getCurrentUserId()}`} variant="contained">visualisez</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">ADRESSES</TableCell>
                                    <TableCell align="right"><Button component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to={`/ECMesDonnes/${getCurrentUserId()}`} variant="contained">visualisez</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">TELEPHONES</TableCell>
                                    <TableCell align="right"><Button component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to={`/ECMesDonnes/${getCurrentUserId()}`} variant="contained">visualisez</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">EMAILS</TableCell>
                                    <TableCell align="right"><Button component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to={`/ECMesDonnes/${getCurrentUserId()}`} variant="contained">visualisez</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">MOT DE PASSE</TableCell>
                                    <TableCell align="right"><Button component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to={`/ECmodifierpwd/${getCurrentUserId()}`} variant="contained" >modifiez</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    )
}
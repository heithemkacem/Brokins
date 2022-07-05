import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Box from '@mui/material/Box'
// table import
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
// button import
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

// import user id 
import { getCurrentUserId } from '../../auth/actions/userActions';



export default function MesServices() {
    return (
        <Box>
            <Card sx={{width:470 , height: 600 , overflowX: 'hidden'}}>
                <CardHeader title="Mes Services" />
                <CardContent sx={{margin:0 , padding:0}}>
                    <div className="firstSection">
                        <Typography variant="subtitle1">
                            Des services qui vous facilitent la vie
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Les services s'enrichissent chaque jour
                        </Typography>
                    </div> 
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left">Contacts Assureurs(tél,adresse,..)</TableCell>
                                    <TableCell align="right"><Button className={"buttonElement"} component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to="/ECContactassureurs" variant="contained">Contactez</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Attestation d'assurance</TableCell>
                                    <TableCell align="right"><Button className={"buttonElement"} component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to="/" variant="contained">Telechargez</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Résiliation(xxxx,)</TableCell>
                                    <TableCell align="right"><Button className={"buttonElement"} component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to="/resiliationdevis" variant="contained">Résiliez</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" >Réclamation(Problèmes,..)</TableCell>
                                    <TableCell align="right"><Button className={"buttonElement"} component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to={`/ECreclamation/${getCurrentUserId()}`} variant="contained">Reclamez</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">Payer votre prime(Impayé..)</TableCell>
                                    <TableCell align="right"><Button className={"buttonElement"} component={Link} sx={{height: 40, width: 140, background: "#a102f2"}} to="/payment" variant="contained">Payez</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    )
}
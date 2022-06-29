import React from 'react';
//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ForgottenPassword from './pages/ForgottenPassword';
import EmailSent from './pages/EmailSent'
import PasswordReset from './pages/PasswordReset';
import ECMesDonnes from './pages/ECMesDonnes';
import ECmodifierpwd from './pages/ECmodifierpwd'
import Contact from './pages/Contact';
// styled components 
import {StyledContainer} from './components/Styles'
import{
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'
// auth & redux 
import AuthRoute from './components/AuthRoute'
import BasicRoute from './components/BasicRoute'
import { connect } from 'react-redux'
import Propos from './pages/Propos';
import ResilisationContrat from './pages/ResiliationContrat';
import ECreclamation from './pages/ECreclamation';
import ECContactAssureurs from './pages/ECContactAssureurs';
import { FooterContainer } from './containers/footer'
import Navbar from './components/navbar/Navbar';
import ComingSoon from './components/comingSoon/ComingSoon'
import MesDemandesPage from './pages/MesDemandesPage';
import UploadsComponents from './components/UploadsComponent';

function App({checked}) {
    return (
      <>
        <Router>
          <Navbar/>
          <StyledContainer>
          {checked && 
              <Switch>
                <BasicRoute exact path="/passwordreset/:userId?/:resetString?">
                  <PasswordReset/>
                </BasicRoute>
                <BasicRoute exact path="/forgottenpassword">
                  <ForgottenPassword/>
                </BasicRoute>
                <BasicRoute exact path="/emailsent/:userEmail?/:reset?">
                  <EmailSent/>
                </BasicRoute>
                <BasicRoute exact path="/signup">
                  <Signup/>
                </BasicRoute>
                <BasicRoute exact path="/login/:userEmail?">
                  <Login/>
                </BasicRoute>
                <AuthRoute exact path="/dashboard">
                  <Dashboard/>
                </AuthRoute>
                <Route exact path="/home">
                  <Home/>  
                </Route>
                <AuthRoute exact path="/ECMesDonnes/:id">
                  <ECMesDonnes/>
                </AuthRoute>
                <AuthRoute exact path="/ECmodifierpwd/:id">
                  <ECmodifierpwd/>
                </AuthRoute>
                <AuthRoute exact path="/resiliationdevis">
                  <ResilisationContrat/>
                </AuthRoute>
                <Route exact path="/contact">
                  <Contact/>
                </Route>
                <Route exact path="/aproposdenous">
                  <Propos/>
                </Route>
                <AuthRoute exact path="/ECreclamation/:id">
                  <ECreclamation/>
                </AuthRoute>
                <AuthRoute exact path="/MesDemandes">
                  <MesDemandesPage/>
                </AuthRoute>
                <Route exact path='/ECContactassureurs'>
                  <ECContactAssureurs/>
                </Route>
                <Route exact path='/comingSoon'>
                  <ComingSoon />
                </Route>
                <Route exact path='/uploadFiles'>
                  <UploadsComponents/>
                </Route> 
              </Switch>
          }
          </StyledContainer>
        </Router>
        <FooterContainer/>
      </>
)
}
const mapStateToProps = ({session})=>({
  checked: session.checked
})

export default connect(mapStateToProps)(App);

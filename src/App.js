import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage.js';
import Dashboard from './pages/DashboardPage.js';
import EditDetails from './pages/EditPage.js';
import Feeds from './pages/FeedsPage.js';
import History from './pages/HistoryPage.js';
import LandingPage from './pages/Home.js';
import NotificationPage from './pages/NotificationPage.js';
import RequestPage from './pages/RequestPage.js';
import SignIn from './pages/SignInPage.js';
import SignUp from './pages/SignUpPage.js';
import RequestFormPage from './pages/RequestFormPage.js';
import DonationTypePage from './pages/DonationTypePage.js';
import UrgentPage from './pages/UrgentPage.js';
import DonatePage from './pages/DonationRequestConfirmationPage.js';
import DonateAppointment from './pages/DonateAppointment.js';
import VolunteerPage from './pages/VolunteerPage.js';
import ContextProvider from './Context';
import ConfirmEmail from './pages/ConfirmEmail.js';
import DonateConfirm from './pages/DonationConfirmPage';

/*
import DonateRejected from './pages/DonationRejectedPage.js';
*/

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            {/*no auth */}
            <Route path="/aboutus" component={AboutUsPage} />
            {/*no auth */}
            <Route path="/signup" component={SignUp} />
            {/*no auth */}
            <Route path="/signin" component={SignIn} />
            {/*no auth */}
            <Route path="/dashboard" component={Dashboard} />
            {/*auth */}
            <Route path="/feeds" component={Feeds} />
            {/*auth */}
            <Route path="/history" component={History} />
            {/*auth */}
            <Route path="/editdetails" component={EditDetails} />
            {/*auth */}
            <Route path="/request" component={RequestPage} />
            {/*auth */}
            <Route path="/notification" component={NotificationPage} />
            {/*auth */}
            <Route path="/requestForm:type" component={RequestFormPage} />
            {/*auth */}
            <Route path="/donation" component={DonationTypePage} />
            {/*auth */}
            <Route path="/urgent" component={UrgentPage} />
            {/*auth */}
            <Route path="/donate" component={DonatePage} />
            {/*auth */}
            <Route path="/appointment" component={DonateAppointment} />
            {/*auth */}
            <Route path="/volunteer" component={VolunteerPage} />

            <Route path="/confirm" component={ConfirmEmail} />
            <Route path="/donateconfirm" component={DonateConfirm} />
            {/*
          <Route path="/volunteer" component={VolunteerPage} />
          {/*auth 
           
          {/*auth 
          <Route path="/donaterejected" component={DonateRejected} />
          {/*auth 
          */}
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

/*import AboutUsPage from './pages/AboutUsPage';
import DonatePage from './pages/DonatePage';
import DonationForm from './pages/DonationForm';
import DonateAppointment from './pages/DonateAppointment';
import DonationTypePage from './pages/DonationTypePage';
import UrgentPage from './pages/UrgentPage';
import VolunteerPage from './pages/VolunteerPage';*/

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
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

          {/*<Route path="/about" component={AboutUsPage} />
          {/*no auth 
          <Route path="/dashboard/donate" component={DonatePage} />
          {/*auth 
          <Route path="/donate/donationType" component={DonationTypePage} />
          {/*auth 
          <Route path="/donationType/volunteer" component={VolunteerPage} />
          {/*auth 
          <Route path="/donationType/urgent" component={UrgentPage} />
          {/*auth 
          <Route path="/donateAppointment" component={DonateAppointment} />
          {/*auth 
          <Route path="/donationForm" component={DonationForm} />
          {/*auth */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

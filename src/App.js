import './App.css';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import Dashboard from './pages/DashboardPage';
import SignIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import History from './pages/HistoryPage';
import Feeds from './pages/FeedsPage';
import EditDetails from './pages/EditPage';
import RequestPage from './pages/RequestPage';
import DonatePage from './pages/DonatePage';
import NotificationPage from './pages/NotificationPage';
import RequestFormPage from './pages/RequestFormPage'; //hydi l page yali bdk tn2lya mn lcomp w thtya bl pages .
import DonationForm from './pages/DonationForm';
import DonateAppointment from './pages/DonateAppointment';
import DonationTypePage from './pages/DonationTypePage';
import UrgentPage from './pages/UrgentPage';
import VolunteerPage from './pages/VolunteerPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>{' '}
          {/*no auth */}
          <Route exact path="/about">
            <AboutUsPage />
          </Route>{' '}
          {/*no auth */}
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/signin">
            <SignIn />
          </Route>{' '}
          {/*no auth */}
          <Route exact path="/signup">
            <SignUp />
          </Route>{' '}
          {/*no auth */}
          <Route exact path="/history">
            <History />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/dashboard/feeds">
            <Feeds />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/editdetails">
            <EditDetails />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/dashboard/request">
            <RequestPage />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/dashboard/donate">
            <DonatePage />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/notification">
            <NotificationPage />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/request/requestForm">
            <RequestFormPage />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/donate/donationType">
            <DonationTypePage />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/donationType/volunteer">
            <VolunteerPage />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/donationType/urgent">
            <UrgentPage />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/donateAppointment">
            <DonateAppointment />
          </Route>{' '}
          {/*auth */}
          <Route exact path="/donationForm">
            <DonationForm />
          </Route>{' '}
          {/*auth */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

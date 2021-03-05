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

import AboutUsPage from './pages/AboutUsPage';
import DonatePage from './pages/DonatePage';
import DonationForm from './pages/DonationForm';
import DonateAppointment from './pages/DonateAppointment';
import DonationTypePage from './pages/DonationTypePage';
import UrgentPage from './pages/UrgentPage';
import VolunteerPage from './pages/VolunteerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>{' '}
          {/*no auth*/}
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
          {/*auth*/}
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
          {/*auth*/}
          <Route exact path="/donate/donationType">
            <DonationTypePage />
          </Route>{' '}
          {/*auth*/}
          <Route exact path="/donationType/volunteer">
            <VolunteerPage />
          </Route>{' '}
          {/*auth*/}
          <Route exact path="/donationType/urgent">
            <UrgentPage />
          </Route>{' '}
          {/*auth*/}
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

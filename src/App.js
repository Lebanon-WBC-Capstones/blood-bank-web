import './App.css';
import DonationRequestPage from './components/DonationRequestConfirmationPage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <DonationRequestPage />
      </div>
    </Router>
  );
}

export default App;

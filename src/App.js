import './App.css';
import DonationForm from '../src/components/DonationForm.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <DonationForm />
      </div>
    </Router>
  );
}

export default App;

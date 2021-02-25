import './App.css';
import SignUpPage from './pages/Signup.js';
import SignInPage from './pages/SignInPage.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <SignInPage />
      </div>
    </Router>
  );
}

export default App;

import './App.css';

import NotificationPage from './pages/NotificationPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <NotificationPage />

          {/*auth */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

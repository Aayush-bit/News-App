import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import DenseAppBar from './components/navigation/NewsAppBar'

function App() {
  return (
    <div className="App">
      <Router>
        <DenseAppBar/>        
        <div className="container">
          <Routes/>
        </div>

      </Router>
    </div>
  );
}

export default App;

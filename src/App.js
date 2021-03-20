import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import DenseAppBar from './components/navigation/NewsAppBar'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <DenseAppBar/>        
        
        <div className="container">
          <Routes/>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

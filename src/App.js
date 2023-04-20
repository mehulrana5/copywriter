import 'leaflet/dist/leaflet.css';
import NavBar from './componenets/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Seller from './componenets/Seller';
import Home from './componenets/Home';

function App() {
  return (
    <Router>
      <div style={{ height: '100vh' }}>
        <NavBar />
        <Routes>
          <Route path='/seller' element={<Seller/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>  
    </Router>
  );
}

export default App;

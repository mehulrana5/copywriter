import 'leaflet/dist/leaflet.css';
import Card from './componenets/Card';
import NavBar from './componenets/NavBar';
function App() {
  return ( 
    <div style={{height:'100vh'}}>
      <NavBar/>
      <div className="d-flex justify-content-around flex-wrap">
        <Card name='Rock Lee' text="If you're looking for a talented writer who can copy and write quickly, look no further! As a skilled wordsmith with lightning-fast typing skills." rating={4.5} reviews={70}/>
        <Card name='Mikasa' text="If you're looking for a talented writer who can copy and write quickly,As a skilled wordsmith with lightning-fast typing skills, I bring a wealth of experience and expertise to the table." rating={4} reviews={30}/>
      </div>
    </div>
  );
}

export default App;

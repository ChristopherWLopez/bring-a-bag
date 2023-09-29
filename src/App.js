import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [location, setLocation] =useState(null);
  const[error, setError] = useState(null);

  useEffect(()=>{
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          const{ latitude, longitude} = position.coords;
          setLocation({ latitude, longitude });
    },
  (err)=>{
    setError(err.message);
  }
  );

}else{
  setError("Geolocation is not available in your browser");
}
  return(()=>{
    Geolocation.clearWatch()})
},[]);
  return (
    <div className="App">
      {location ? (
        <div>
          <p>Latitude: { location.latitude }</p>
          <p>Longitude: { location. longitude }</p>
        </div>
      ):{
        <p>Lodaing</p>
      }}

      <header className="App-header">
        <h1>This My Header</h1>
      </header>
    </div>
  );
}

 export default App;

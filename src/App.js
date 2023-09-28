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
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;

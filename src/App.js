import { useState, useEffect } from 'react';
import './App.css';
// import CustomForm from './components/customForm/CustomForm';
// import { Provider } from 'react-redux';

function App({props}) {

  //state//
  const [location, setLocation] =useState(null);
  const[error, setError] = useState(null);
  //
  //geo functions
  // const getPosition = (position)=>{
  //   const { latitude, longitude } = position.coords;
  //   setLocation({latitude, longitude });
  // };

  // const postError = (err)=>{
  //   setError(err.message);
  // }
  // //
  // //useEffect Hook
  // useEffect(()=>{
  //   if("geolocation" in navigator){
  //     navigator.geolocation.getCurrentPosition(getPosition,postError);
  //   } else {
  //     setError("Geolocation is not available");
  //   }
  // },[]);

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
//   return(()=>{
//     Geolocation.clearWatch()})
},[]);
  return (
    <div className="App">
      {location ? (
        <div>
          <h4>{props.CustomForm}</h4>
          <p>Latitude: { location.latitude }</p>
          <p>Longitude: { location.longitude }</p>
        </div>
      ):(
        <>
        <h1>Error:</h1>
        <h2>{error}</h2>
        </>
      )}

      <header className="App-header">
        <h1>Please Remember to bring in your bag!</h1>
      </header>
    </div>
  );
}

 export default App;

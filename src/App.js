import React from 'react';
import cities from './us-cities.json'

const City = (props) => {
  return(
    <div style={{display: 'flex'}} onClick={()=>{
      props.select(props.city)
    }}>
      <h4>{props.city.name}</h4>
      <h4>{props.city.country}</h4>
      <h4>{props.city.details.likes}</h4>
    </div>
  )
}

const CityDetails = (props) => {
  if(!props.selectedCity.name) {
    return (
      <div></div>
    )
  } 
  return(
    <div className='city-view'>
      Country:<div>{props.selectedCity.country}</div>
      Likes:<div>{props.selectedCity.details.likes}</div>
      Latitude: <div>{props.selectedCity.location.lat}</div>
      Longitude: <div>{props.selectedCity.location.lng}</div>
    </div>
  )
}

const App = () => {
  const [input, setInput] = React.useState("")
  const [selectedCity, setSelectedCity] = React.useState({})
  const matchingCities = cities.filter((eachCity)=>{
    return input && eachCity.name.includes(input)
  })
  const matchingResults = matchingCities.map((eachCity, index)=>{
    return(
      <City key={index} selectedCity={index} select={setSelectedCity} city={eachCity}></City>
    )
  })
  return (
    <div>
      <h1>React Typeahead</h1>
      <input onChange={(e)=>{
        setInput(e.target.value)
      }} value={input}></input>
      <div className='cities-container' style={{ display: 'flex'}}>
        <div className='cities-grid'>
          {matchingResults}
        </div>
        <CityDetails selectedCity={selectedCity}></CityDetails>
      </div>
    </div>
  );
}

export default App;

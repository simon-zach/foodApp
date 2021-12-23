
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Searchbar from './Components/Searchbar'
import Gallery from './Components/Gallery'


  

const apiKey='O9bsGMTU-bFVTohrdL3E7bWnVANCxhmaV0cb_mMDbmMpPHGKIe9MD5hsO0-aTKTjQiNbiz1afN6Onpa39CLYk4Y0zOxhlXC7mwKGw1-a6GY3HWdFL3s3Jt6Rh2TDYXYx';

const Yelp = {
  search(term, location, sortBy) {
    
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      }
    }).then(response => {
      if (response){
        return response.json();
      }
      
    }).then(response=>{
      //console.log(response)
      return response
    })
  }
};


function App() {
  const [restaurants, setRestaurants] = useState('');

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <h1>Find your food:</h1>
        </header>
        <Searchbar yelp={Yelp.search}></Searchbar>
      </div>
      
     
     
     
    </div>
  );
}

export default App;
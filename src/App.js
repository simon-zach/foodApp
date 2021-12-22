
import { Button } from 'react-bootstrap';

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
      }c
      
    })
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>hello</h1>
      </header>
     <Button onClick={()=>Yelp.search('food','pleszew').then(response=>console.log(response))} variant="primary">Button test</Button>
    </div>
  );
}

export default App;
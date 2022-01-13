import React from "react"
import Searchbar from "./Components/Searchbar"

const apiKey="vibNPblG6H--td0flpj-QZO9kPbtzTxpfHqBxPcI9YJVujFALMXgW6nxz8LYJd4T7Md1VrN2QeHDg3KdlElwIA-ODUUXc7ghHLKMzg7y-xuraPWaLZegX1KmeS_KYXYx";

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
    })
  }
};

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <h1>Find your food:</h1>
        </header>
        <Searchbar yelpCallback={Yelp.search}></Searchbar>
      </div>
    </div>
  );
}

export default App;
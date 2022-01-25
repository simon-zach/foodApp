import React from "react"
import Searchbar from "./Components/Searchbar"
import {Yelp} from "./utilsAPI/Yelp"


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
import React, {useState} from "react";

import Gallery from "./Gallery";


function Searchbar(yelp){
    const [term, setTerm]=useState();
    const [location, setLocation]=useState();
    const [restaurants, setRestaurants]=useState();

        let handleSubmit=(e)=>{
        console.log(term,location)
        yelp.yelp(term,location).then(response=>setRestaurants(response))
        e.preventDefault();
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Sort of restaurant:
                <input type="text" name="term" onChange={(event)=>setTerm(event.target.value)} />
            </label>

            <label>
                Location:
                <input type="text" name="location" onChange={(event)=>setLocation(event.target.value)} />
            </label>
            <input type="submit"  value="Send" />
            </form>
            <Gallery restaurants={restaurants}></Gallery>
        </>
         
       
    )
}
export default Searchbar;
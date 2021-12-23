import React, {useState} from "react";

import Gallery from "./Gallery";


function Searchbar(yelp){
    const [term, setTerm]=useState();
    const [location, setLocation]=useState();
    const [restaurants, setRestaurants]=useState({});

    let handleSubmit=(e)=>{
    //console.log(term,location)
    yelp.yelp(term,location).then(response=>setRestaurants(response))
    e.preventDefault();
    }

    return (
        <>


            <form   onSubmit={handleSubmit}>
            <div className="row row-cols-2">
                
                    <label className="form-label">
                        Sort of restaurant:
                        <input className="form-control" type="text" name="term" onChange={(event)=>setTerm(event.target.value)} />
                    </label>
                
                
                <label className="form-label ">
                    Location:
                    <input type="text" className="form-control" name="location" onChange={(event)=>setLocation(event.target.value)} />
                </label>
               
                

                </div>
                <div className="row row-cols-4 justify-content-center">
                    <input className="btn btn-primary" type="submit"  value="Send" />
                </div>
                    
                </form><br/>
      

        
            <Gallery restaurants={restaurants}></Gallery>
        </>
         
       
    )
}
export default Searchbar;
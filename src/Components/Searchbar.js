import React, {useState} from "react";
import Gallery from "./Gallery";

function Searchbar(props){
    const [term, setTerm] = useState();
    const [location, setLocation] = useState();
    const [restaurants, setRestaurants] = useState({});

    let handleSubmit = (e) => {
        props.yelpCallback(term,location).then(response=>setRestaurants(response))
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row ">
                    <div className="col-md">
                            <label htmlFor="restaurantType" className="form-label">Sort of restaurant: </label>   
                            <input id="restaurantType" className="form-control" type="text" name="term" onChange={(event)=>setTerm(event.target.value)} />                                                                                 
                    </div>
                        
                    <div className="col-md">
                            <label htmlFor="location" className="form-label ">Location: </label>
                            <input id="location" type="text" className="form-control" name="location" onChange={(event)=>setLocation(event.target.value)} />
                    </div>  
                </div><br/>

                <div className="row row-cols-4 justify-content-center">
                    <input className="btn btn-primary" type="submit"  value="Send" />
                </div>
            </form><br/>
            <Gallery restaurants={restaurants}></Gallery>
        </>
    )
}
export default Searchbar;
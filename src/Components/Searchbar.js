import React, {useState} from "react";




function Searchbar(yelp){
    const [term, setTerm]=useState();
    const [location, setLocation]=useState();

    let handleSubmit=(e)=>{
//console.log(yelp.yelp)
yelp.yelp('food','pleszew').then(response=>console.log(response))
          e.preventDefault();
    }
    return (
        
         <form onSubmit={handleSubmit}>
            <label>
                Sort of restaurant:
                <input type="text" name="term" />
            </label>

            <label>
                Location:
                <input type="text" name="location" />
            </label>
            <input type="submit"  value="Send" />
            </form>
        
       
    )
}
export default Searchbar;
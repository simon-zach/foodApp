import { render } from "@testing-library/react";
import React from "react";
function Gallery(props){
    
const printRestaurants=(rest)=>{
    if(rest){
        console.log('jest czy niew')
        let elementy=[]
        for(let i=0;i<rest.length;i++){
         // console.log(rest[i]) 
         elementy.push(<li key={rest[i].id}>{rest[i].alias}</li>)
        }
        return elementy
    }
 
  }


    return(
    <>
        <h1>gallery</h1>
        <ul>
        {printRestaurants(props.restaurants.businesses)}
        </ul>
        
    </>
    )
}
export default Gallery
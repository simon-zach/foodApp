
import React from "react";
import GalleryElement from "./GalleryElement"

function Gallery(props){
    

  const printGalleryElements=(props)=>{
     // console.log('tosompropsy'+JSON.stringify(props))
     //console.log(props.restaurants.businesses)
    let testArr=[]
    let businesses=props.restaurants.businesses;
      for (let k in businesses ){
          console.log (businesses[k]);
          testArr.push(<GalleryElement key={businesses[k].id} alias={businesses[k].alias}></GalleryElement>)
      
      }
    

        return testArr
     
   
    
  }


    return(
    <>
        <h1>gallery</h1>
    

            {printGalleryElements(props)}
           
        
        
    
        
    </>
    )
}
export default Gallery
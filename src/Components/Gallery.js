
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
          if(businesses[k].image_url!==''){
            testArr.push(<GalleryElement key={businesses[k].id} image_url={businesses[k].image_url} alias={businesses[k].alias}></GalleryElement>)
          }
          
      
      }
    

        return testArr
    
   

  }


    return(
    <>
        <h1>Gallery</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {printGalleryElements(props)}
        </div>
                
            
    
    </>
    )
}
export default Gallery

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
            testArr.push(<GalleryElement key={businesses[k].id} rating={businesses[k].rating}  address1={businesses[k].location.address1}  image_url={businesses[k].image_url} alias={businesses[k].alias} name={businesses[k].name} display_phone={businesses[k].display_phone}></GalleryElement>)
          }
          
      
      }
    

        return testArr
    
   

  }


    return(
    <>
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {printGalleryElements(props)}
        </div>
       
            
    
    </>
    )
}
export default Gallery
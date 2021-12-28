
import React,{useEffect, useState} from "react";
import GalleryElement from "./GalleryElement"
import Message from "./Message";

function Gallery(props){



  const printGalleryElements=(props)=>{
    
    let galleryArray=[]
    let businesses=props.restaurants.businesses;
   
    if(businesses){
      for (let k in businesses ){
        if(businesses[k].image_url!==''){
          galleryArray.push(<GalleryElement key={businesses[k].id} rating={businesses[k].rating}  city={businesses[k].location.city} address1={businesses[k].location.address1}  image_url={businesses[k].image_url} alias={businesses[k].alias} name={businesses[k].name} display_phone={businesses[k].display_phone}></GalleryElement>)
        }
      }

      if(galleryArray===undefined || !galleryArray || galleryArray.length==0){
        return false
      }else{
        return galleryArray
      }
    
    }
    return(true)
  }
  

    let result=printGalleryElements(props);
    if(result==false){
      return(<h2>Przykro nam w naszej bazie nie ma nic na ten temat</h2>)
      }else if (result==true) {
        return(<h2>Czego dzisiaj szukasz?</h2>)
      }
    else{
      return(
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {result}
            </div>
        )
    }
}
export default Gallery
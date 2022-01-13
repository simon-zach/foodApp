
import React from "react";
import GalleryElement from "./GalleryElement"

function Gallery(props){

  const printGalleryElements=(props)=>{
    let galleryArray=[]
    let businesses=props.restaurants.businesses;
    if(businesses){
      for (let k in businesses ){
        if(businesses[k].image_url!==""){
          galleryArray.push(<GalleryElement key={businesses[k].id} rating={businesses[k].rating}  city={businesses[k].location.city} address1={businesses[k].location.address1}  image_url={businesses[k].image_url} alias={businesses[k].alias} name={businesses[k].name} display_phone={businesses[k].display_phone}></GalleryElement>)
        }
      }
      if(galleryArray===undefined || !galleryArray || galleryArray.length===0){
        return false
      }else{
        return galleryArray
      }
    }
    return(true)
  }
  
    let result=printGalleryElements(props);
    if(result===false){
        return(<h2>I am sorry! We did not found anything in Yelp database</h2>)
      }else if (result===true) {
        return(<h2>What are u looking for today?</h2>)
      }
    else{
      return(
          <div className="row row-cols-1 row-cols-sm-3 g-4">
            {result}
          </div>
        )
    }
}
export default Gallery
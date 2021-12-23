import React from "react";

function GalleryElement(props){
return(
    <>
   
   <div className="col">
    <div className="card h-100">
    <img src={props.image_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.alias}</h5>
        <p className="card-text">{props.image_url}</p>
      </div>
    </div>
  </div>

    

   
        
    </>
    
   
)
}
export default GalleryElement;
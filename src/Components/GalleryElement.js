import React from "react";

function GalleryElement(props){
return(
    <>
    <li key="props.key">{props.alias}</li>
   
   <img src={props.image_url}/>
    
    </>
   
)
}
export default GalleryElement;
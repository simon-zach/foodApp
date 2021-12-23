import React from "react";

function GalleryElement(props){
return(
    <>
   
   <div className="col">
    <div className="card h-100">
    <img src={props.image_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Tel. {props.display_phone}</li>
            <li className="list-group-item">Adress: {props.address1}</li>
            <li class="list-group-item">Rating: {props.rating}</li>
        </ul>

      </div>
    </div>
  </div>

    

   
        
    </>
    
   
)
}
export default GalleryElement;
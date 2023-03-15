import React from "react"
import { useNavigate } from "react-router-dom";

export function Man({elem}){
  const navigate=useNavigate();

  return(
    <>
    <div className="contentDiv">
    <img src={elem.pic} alt="Product Image"/>
    <p> <span className="bold">Name : </span> {elem.name}</p>
    <p ><span className="bold">Price : </span>{elem.price}</p>
    <div>
    <p><button>{elem.option}</button></p>
    <button onClick={()=>navigate(`/users/${elem.id}`)}>View</button>
    </div>
    </div>
    </>
  )
}
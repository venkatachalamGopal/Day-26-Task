import { useParams } from "react-router-dom";

export function Users() {
    const params=useParams()
  return(
    <div>{params.id}</div>)
  }
  
 
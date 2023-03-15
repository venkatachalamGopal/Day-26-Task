import React from 'react'
import{useNavigate} from 'react-router-dom';

export function About() {

  const navigate=useNavigate()
  return (
    <>

    <button onClick={()=>navigate(-1)}>go back</button>

    <button onClick={()=>navigate(1)}>go forward</button>
    <button onClick={()=>navigate("/")}>push</button>

    <button onClick={()=>navigate("/main")}>replace</button>
    </>
  )
}


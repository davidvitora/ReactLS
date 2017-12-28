import React from 'React'
import { render } from 'react-dom';

export default function About(props){
  return (
    <div>
      <p>ReactLS App running - About</p>
      <button onClick={()=>{alert("Client side React")}}>Click</button>
    </div>
  )
}

if(typeof document == "object"){
  render(<About />, document.getElementById("root"))
}
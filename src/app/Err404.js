import React from 'React'
import { render } from 'react-dom';

export default function Err404(props){
  return (
    <div>
      <p>Error 404 - Not found</p>
    </div>
  )
}

if(typeof document == "object"){
  render(<Err404 />, document.getElementById("root"))
}
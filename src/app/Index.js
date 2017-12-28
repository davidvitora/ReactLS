import React from 'React'
import { render } from 'react-dom';

export default function Index(props){
  return (
    <div>
      <p>ReactLS App running - Index</p>
    </div>
  )
}

if(typeof document == "object"){
  render(<Index />, document.getElementById("root"))
}
import React from 'React'
import { render } from 'react-dom';

export default function About(props){
  return (
    <div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
        body, html{
          margin: 0px;
          padding: 0px;
          height: 100%;
          width: 100%;
          background-color: #383838;
        }
        div.container{
          position: absolute;
          top: 50%;
          margin-top: -200px;
          left: 0;
          width: 100%;
        }
        div.content{
          width: 624px;
          margin-left: auto;
          margin-right: auto;
          height: 395px;
          font-size: 30pt;
          text-align: center;
          font-family: 'Source Sans Pro', sans-serif;
        }
        p {
          margin-top: 25%;
          color: #A0A0A0;
        }
      `}</style>
      <div className="container">
        <div className="content">
          <p>ReactLS App running - About</p>
        </div>
      </div>
    </div>
  )
}

if(typeof document == "object"){
  render(<About />, document.getElementById("root"))
}
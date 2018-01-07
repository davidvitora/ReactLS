import React from 'React'
import { render } from 'react-dom';
import { DinamicRouter } from '../util/DinamicRouter'
import { Route } from 'react-router-dom'

const Route1 = function(props){
  return(
    <div>
      <p className="bellow"> Using route 1 </p>
      <a onClick={()=>{ props.history.push("/about/2")}}>Click to change route</a>
    </div>
  )
}

const Route2 = function(props){
  return(
    <div>
      <p className="bellow"> Using route 2 </p>
      <a onClick={()=>{ props.history.push("/about/1")}}>Click to change route</a>
    </div>
  )
}

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
        p.bellow {
          margin-top: 0;
        }

        a {
          cursor: pointer;
          margin-top: 25%;
          color: #fff;
        }

      `}</style>
      { /*You need to provide the location so it can render properly when in server side, this prop is usually provided 
      in the routes file at src/server/routes.js but you can inform your value here, it will only be used in server side*/ }
      <DinamicRouter location={props.location}>
      <div className="container">
        <div className="content">
          <p>ReactLS App running - About</p>
          <Route exact path="/about" component={Route1}/>
          <Route path="/about/1" component={Route1}/>
          <Route path="/about/2" component={Route2}/>
        </div>
      </div>
      </DinamicRouter>
    </div>
  )
}

if(typeof document == "object"){
  render(<About />, document.getElementById("root"))
}
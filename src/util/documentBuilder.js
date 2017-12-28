import React from 'react'
import { renderToString } from 'react-dom/server'
import path_node from 'path';
var webpack = require("webpack");


export default class documentBuilder{
  
  constructor(Comp, react_id){
    this.Comp = Comp
    this.react_id = react_id;
    this.headers = []
    this.head = null;
  }

  //push header to array
  setHeader(header){
    this.headers.push(header)
  }

  //set the head tag itself
  setHead(head){
    this.head = head;
  }

  //will render the headers array only if there is no head set
  getHead(){
    if(this.head){
      return this.head
    } else {
      return(
        <head>
          { this.headers }
        </head>
      )
    }
  }

  //return the string that will be send
  buildDocument(){
    var react_src = "/public/react/" + this.react_id + ".js";
    return "<!DOCTYPE html> " + renderToString(
      <html>
        { this.getHead() }
        <head>
          { this.headers }
        </head>
        <body>
          <div id="root">
            { this.Comp }
          </div>
          <script src={react_src}></script>
        </body>
      </html>
    );
  }
}
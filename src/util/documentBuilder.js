import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import path_node from 'path';
import flush from 'styled-jsx/server'
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
  getHead(styles){
    if(this.head){
      return (
        <head>
          { this.head.props.children }
          { styles }
        </head>
      )
    } else {
      return(
        <head>
          { this.headers }
          { styles }
        </head>
      )
    }
  }

  //return the string that will be send
  buildDocument(){
    flush()
    var react_src = "/public/react/" + this.react_id + ".js";
    const app = renderToString( this.Comp )
    const styles = flush()
    var doc =  "<!DOCTYPE html> " + renderToString(
      <html>
        { this.getHead(styles) }
        <body>
          <div id="root">
            { this.Comp }
          </div>
          <script src={react_src}></script>
        </body>
      </html>
    );
    return doc;
  }
}
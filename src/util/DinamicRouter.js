//This is a component composed of BrowserRouter and StaticRouter
//Will use BrowserRouter when rendering in cliente side and StaticRouter in Server
import React from 'react'
import { StaticRouter } from 'react-router'
import { BrowserRouter } from 'react-router-dom';

const DinamicRouter = (props) =>{
    if(typeof global.document != "object"){
        if(props.location == undefined)
        console.log("warning: DinamicRouter hasn't a request location to render correctly in server");  
        return(
            //Will use the location
            <StaticRouter location={props.location} context={{}}>
                { props.children }
            </StaticRouter>
        )
    } else {
        return(
            <BrowserRouter>
                { props.children }
            </BrowserRouter>
        )
    }
}

export default DinamicRouter;
export { DinamicRouter };
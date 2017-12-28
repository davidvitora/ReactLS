import express from 'express'
import routes from './src/server/routes'
const app = express();

//Define the public folder to static acess
app.use('/public', express.static('public'));
//Define routes
routes(app);
//Listen to port
app.listen(3000, ()=>{
  console.log("Server Running");
})

if(process.env.dev != 1){
  console.info("Production mode")
} else {
  console.info("Dev mode")
}
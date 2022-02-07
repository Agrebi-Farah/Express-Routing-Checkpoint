// 1- require express
const express = require('express');
const path = require('path')
// 2- intialisation of my app
const app = express();
// 3- creation of the port 
const PORT = 4000 ; 
// 4- create the server
app.listen(PORT, (err) => 
err ? console.error(err) : console.log(`server is listening on port ${PORT}`))  ;
// 5- middlewares
const veriDate= (req, res, next) => {
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] ;
   let hours = new Date().getHours() ;
   if (
       days[new Date().getDay()] !== "Saturday" && days[new Date().getDay()] !== "Sunday" &&  hours>9&&hours<17
   )
   {next () } else {res.send ('we are not working, come back later')}
}
//console.log (new Date().getHours())
//console.log (new Date().getDay())
//console.log (new Date().getMinutes())
app.use(veriDate)
// 6- routing middlewares
app.use(express.static('Public'))


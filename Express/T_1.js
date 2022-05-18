const express = require('express')
const path = require('path')
const http = require('http');
const { allowedNodeEnvironmentFlags } = require('process');
const logger = require("morgan");
const app = express();


app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index",{
        message:"Hey everyone! This is my webpage."
    });
});






// app.get("/hello/:who",(req,res)=>{
//     res.end("Hello "+ req.params.who + ".");

// })



// app.use(logger("short"));
// app.use((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("Hello,world!");
// })





// app.use((req,res,next)=>{
//     console.log|("In comes a "+ req.method + " to "+ req.url);
//     next();
// });

// app.use((req,res,next)=>{
//     var minute = (new Date()).getMinutes();
//     if((minute % 2)===0){
//         next();
//     }
//     else{
//         res.statusCode = 403;
//         res.end("Not Authorized");
//     }
// });

// app.use((req,res)=>{
//     res.end('Secret info:the password is "swordfish"!');
// })



// app.use((req,res)=>{
//     console.log("In comes a request to:"+ req.url);
//     res.end("Hello World");
// })

// http.createServer(app).listen(3001);

// app.use((req,res,next)=>{
//     console.log("In comes a "+ req.method + " to"+ req.url);
//     next();
// });

// app.use((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("Hello,world!")
// })



http.createServer(app).listen(3001);
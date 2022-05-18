const express = require("express")
const path = require('path')
const fs = require("fs")

const app = express()

app.use((req,res,next)=>{
    console.log("Request IP: "+ req.url);
    console.log("Request date: "+new Date());
    next();
});
// app.use((req,res,next)=>{
//     let filepath = path.join(__dirname,"static",req.url);
//     fs.stat(filepath,(err,fileinfo)=>{
//         if(err){
//             next();
//             return;
//         }
//         if(fileinfo.isFile()){
//             res.sendFile(filepath);

//         }else{
//             next();
//         }
//     })
// })
//2nd method
let staticpath = path.join(__dirname,"static");
app.use(express.static(staticpath));
app.use((req,res)=>{
    res.status(404);
    res.send("File not found!");
})

app.listen(3001,()=>{
    console.log("App started on port 3001");
})
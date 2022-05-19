const express = require('express');
const app = express();
const apiVersion1 = require('./api1')
const apiVersion2 = require('./api2')
app.use("/v1",apiVersion1);
app.use("/v2",apiVersion2)
// app.get("/random/:min/:max",(req,res)=>{
//     let min = parseInt(req.params.min);
//     let max = parseInt(req.params.max);

//     if(isNaN(min) || isNaN(max)){
//         res.status(400);
//         res.json({error:"Bad Request"});
//         return;
//     }
//     let result = Math.round((Math.random() * (max-min)+ min));
//     res.json({result:result});
// })
app.listen(3000,()=>{
    console.log("App started on port 3000");
})
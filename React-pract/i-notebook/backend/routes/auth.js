const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const {body,validationResult}=require('express-validator')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const res = require('express/lib/response');
const fetchuser = require('../middleware/fetchUser')
const JWT_SECRET = "lmgmountedandloaded"
// ROUTE :1->Create a user using :POST "/api/auth/" Doesnt require Auth
router.post('/createuser',[
    body('name','Enter a valid Name').isLength({min:3}),
    body('email','Enter a valid Email').isEmail(),
     body('password','Password must be atleast 5 characters').isLength({min:5})
], async (req,res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try{
       //check whether the user with this email exists already
    let user =await User.findOne({email:req.body.email})
    if(user){
        return req.status(400).json({error:"Sorry a user with this email already exists"})
    }
    const salt =await bcrypt.genSalt(10)
    const secPass=await bcrypt.hash(req.body.password,salt)

    //Create New User
    user=await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email,
   });
   const data={
       user:{
           id:user.id
       }
   }
   const authtoken =jwt.sign(data,JWT_SECRET)
//    res.json(user)
    res.json(authtoken)

    } catch(error){
        console.error(error.message);
        res.status(500).send("Some Error Occured")
    }
   
   
    // }).then(user =>res.json(user))
    // .catch(err=>{ console.log(err)
    //     res.json({error:"please enter a unique value",message:err.message})})
    
})


//ROUTE 2->Authenticate a User :POST "/api/auth/login"
router.post('/login',[
    body('email','Enter a valid Email').isEmail(),
    body('password','Password cannot be blank').exists()
   
], async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password}=req.body;

    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:'Please try to login with correct credentials'})
        }
        const passwordcompare = await bcrypt.compare(password,user.password);
        if(!passwordcompare){
            return res.status(400).json({error:'Please try to login with correct credentials'})
        }

        const data ={
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        res.json(authtoken)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }

})


//ROUTE 3:Get logged in User Details: POST "/api/auth/getuser"

router.post('/getuser', fetchuser,async(req,res)=>{

try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
}
})
module.exports = router
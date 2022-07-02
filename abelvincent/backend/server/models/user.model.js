import mongoose from 'mongoose'
import crypto from 'crypto'

const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:'Name is required',
        trim:true
    },
    email:{
        type:String,
        required:'Email is required',
        unique:'Email already exists',
        trim:true,
        match:[/.+\\@.+\..+/,'Please fill a valid email address']
    },
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date,
    hashed_password:{
        type:String,
        required:"Password is required"
    },
    address:type:String,
    salt:String,
})

UserSchema
        .virtual('password')
        .set(function(password){
            this.password = password;  //_password
            this.salt = this.makeSalt();
            this.hashed_password = this.encryptPassword(password)
        })
        .get(function(){
            return this.password;
        })

UserSchema.methods={
    authenticate:function(plainText){
        return this.encryptPassword(plainText)===this.hashed_password;
    },
    encryptPassword:function(password){
        if(!password)return '';
        try{
            return crypto
                .createHmac('sha1',this.salt)
                .update(password)
                .digest('hex')
        }catch(err){
            return '';
        }
    },
    makeSalt:function(){
        return Math.round((new Date().valueOf() * Math.random())) + '';
    }
}

UserSchema.path('hashed_password').validate(function(v){
    if(this.password && this.hashed_password.length < 6){
        this.invalidate('password','Password must be atleast 6 characters');
    }
    if(this.isNew && !this.password){
        this.invalidate('password','Password is required')
    }
},null);
export default mongoose.model('User',UserSchema);

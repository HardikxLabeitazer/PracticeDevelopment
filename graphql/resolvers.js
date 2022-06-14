import { quotes, users } from './fakedb.js'
import { randomBytes } from 'crypto'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import User from './models/User.js'
import jwt from 'jsonwebtoken'
import {JWT_SECRET} from './config.js'
import Quote from './models/Quotes.js'
const resolvers = {
    Query: {
        users:async () => await User.find(),
        // user: (_, args) => users.find(user => user._id == args._id),
        user:async(_,{_id})=>await User.findOne({_id}),
        quotes:async () =>await  Quote.find(),
        // iquote: (_, args) => quotes.filter(quote => quote.by == args.by)
        iquote:async(_,{by})=>await Quote.find({by:by})

    },
    User: {
        // quotes: (ur) => quotes.filter(quote => quote.by == ur._id)
        quotes:async (ur)=>await Quote.find({by:ur._id})
    },
    Mutation: {
        signupUser: async (_, { userNew }) => {
            const user = await User.findOne({ email: userNew.email })
            if (user) {
                throw new Error("User already exists rip");
            }
            const hashedpassword = await bcrypt.hash(userNew.password, 12);

            const newUser = new User({
                ...userNew,
                password: hashedpassword
            })

            return await newUser.save()

        },
        signinUser: async (_, { userSignin }) => {

            const user = await User.findOne({ email: userSignin.email })

            if (!user) {
                throw new Error("User does not exist with that email")
            }

           const domatch= await bcrypt.compare(userSignin.password,user.password)
            
           if(!domatch){
            throw new Error("email or password is incorrect")
           }

          const token =  jwt.sign({userId:user._id},JWT_SECRET);

          return {token}

        
        },
        createQuote:async (_,{name},{userId})=>{

            if(!userId){
                throw new Error("You must be logged in")
            }
           const newquote = new Quote({
                name,
                by:userId
            })

            await newquote.save();
            return "Quote saved successfully"
        }

    }
}

export default resolvers;

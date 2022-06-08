import {ApolloServer,gql} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import {quotes,users} from './fakedb.js'
import typeDefs from './schemagql.js'

import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/graphqlfirst",()=>{
    console.log("Connected to mongodb")
})

mongoose.connection.on("connected",()=>{
    console.log("Success mongo")
})
mongoose.connection.on("error",()=>console.log("Error Mongo"))
//resolvers
import resolvers from './resolvers.js'
//models
import './models/Quotes.js'
import './models/User.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]

})


server.listen().then(({url})=>{
    console.log(`Server Ready at ${url}`)
})
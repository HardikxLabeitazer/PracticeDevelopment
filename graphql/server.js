import {ApolloServer,gql} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import {quotes,users} from './fakedb.js'
import typeDefs from './schemagql.js'
import resolvers from './resolvers.js'



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
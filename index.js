const {ApolloServer, PubSub} = require('apollo-server');
const mongoose = require('mongoose');
const {MONGODB} = require('./config.js');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req})=>({req}) 
    //passes the req body through context hence it could be used by other routes
});


mongoose.connect(MONGODB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connexted');
    return server.listen({port:5000});
})
.then((res)=>{
    console.log(`Server is running at ${res.url}`);
});
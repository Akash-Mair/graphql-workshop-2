const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/songsgql', {useNewUrlParser: true, useUnifiedTopology: true });

const server = new ApolloServer({typeDefs, resolvers, context(){return {hello:'world'}}})

server.listen().then(({url}) => console.log('running on ' + url ))
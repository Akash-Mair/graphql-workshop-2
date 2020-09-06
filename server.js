const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const resolvers = require('./api/resolvers')
const typeDefs = require('./api/schema')

const Artist = require('./api/models/artist.model')
const Song = require('./api/models/song.model')

mongoose.connect('mongodb://localhost:27017/songsgql', { useNewUrlParser: true, useUnifiedTopology: true });

const server = new ApolloServer(
    { 
        typeDefs, 
        resolvers, 
        context() {
            return { Artist, Song }
        }
    }
)

server.listen().then(({url}) => console.log(`running on ${url}`))
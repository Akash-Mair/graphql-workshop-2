const { gql } = require('apollo-server')

const typeDefs = gql`
    type Artist {
        id: ID!
        name: String!
        genre: String
        songs: [Song]
    }

    type Song {
        id: ID!
        title: String!
        genre: String
        artist: Artist
    }

    type Query {
        artists: [Artist]!
        songs: [Song]!
    }

    input NewSongInput {
        title: String!
        genre: String!
        artist: ID!
    }

    type Mutation {
        newSong(input: NewSongInput!): Song!
    }
`

module.exports = typeDefs
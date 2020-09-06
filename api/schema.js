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

    input UpdateSongInput {
        title: String
        genre: String
        artist: ID
        id: ID!
    }

    type Mutation {
        newSong(input: NewSongInput!): Song!
        removeSong(input: ID!): ID!
        updateSong(input: UpdateSongInput!): Song!
    }
`

module.exports = typeDefs
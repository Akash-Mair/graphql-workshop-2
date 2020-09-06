const { gql } = require('apollo-server')

const typeDefs = gql`

    enum Genre {
        POP
        FUNK
        HIPHOP
        RAP
        ROCK
    }

    type Artist {
        id: ID!
        name: String!
        genre: Genre
        songs: [Song]
    }

    type Song {
        id: ID!
        title: String!
        genre: Genre
        artist: Artist
    }

    type Query {
        artists: [Artist]!
        songs: [Song]!
    }

    input NewSongInput {
        title: String!
        genre: Genre!
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
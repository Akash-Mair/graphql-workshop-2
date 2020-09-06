
const resolvers = {
    Query: {
        artists: (_, __, {  Artist  }) => {
            return Artist.find()
        },
        songs: (_, __, {  Song  }) => {
            return Song.find()
        }
    },

    Mutation: {
        newSong: (_, { input }, { Song }) => {
            return Song.create(input)
        }
    },

    Artist: {
        id: (artist, _, __) => {
            return artist._id
        }
    },
    Song: {
        id: (song, _, __) => {
            return song._id
        }
    }
}



module.exports = resolvers
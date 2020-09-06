
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
        },
        removeSong: (_, { input }, { Song }) => {
            return Song.findByIdAndDelete(input).then(() => input)
        },
        updateSong: (_, { input }, { Song }) => {
            const _id = input.id
            delete input.id
            return Song.findByIdAndUpdate({_id}, {...input})
        }
    },

    Artist: {
        id: (artist, _, __) => {
            return artist._id
        },
        songs: (artist, _, { Song }) => {
            console.log(artist)
            return Song.find({artist: artist._id})
        }
    },
    Song: {
        id: (song, _, __) => {
            return song._id
        },
        artist: (song, _, { Artist }) => {
            console.log(song)

            return Artist.findById(song.artist)
        }
    }
}



module.exports = resolvers
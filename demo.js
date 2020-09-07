const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        firstName: String
        id: ID!
    }

    type Query {
        me(input: ID): User!
    }
`

const resolvers = {
    Query: {
        me: (initialValue, {input}, ctx) => {
            console.log(ctx)
            return {firstName:'Kash', id:'123'}
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers, context(){
    return {Models}
}})

server.listen().then( ({url}) => console.log(`running on ${url}`))
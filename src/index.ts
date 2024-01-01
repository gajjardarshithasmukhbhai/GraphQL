import bodyParser from 'body-parser';
import express from 'express';
const {ApolloServer} = require('@apollo/server');
const {expressMiddleware} = require('@apollo/server/express4');

const cors = require('cors');

async function startServer() {
    const app = express();
    
    app.use(bodyParser.json());
    const server = new ApolloServer({
        typeDefs: `
        type Todo {
            id: ID!,
            title: String!,
            subject: String
        }
        
        type Query {
            getTodos: [Todo]
        }
        `,
        resolvers: {
            Query: {
                getTodos: () => [{id: 1, title: "Darshit Gajjar", subject: "test"}]
            }
        }
    });

    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    const PORT  = process.env.PORT || 3500;
    
    app.listen(PORT, () => {
        console.log("Hi, I am Ready to start my server, cool!");
    });
}
startServer();
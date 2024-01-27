import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";

const axios = require("axios");

const myUser = new GraphQLObjectType({
  name: "MyUser",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLString },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: myUser,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLString },
      },
      resolve: async (parentValue, { id, firstName, lastName }) => {
        // Here, you can perform the logic to add the user to your database or any other data source
        // For demonstration purposes, let's assume you're using Axios to make a request
        return { firstName, lastName, id };
      },
    },
  },
});

// Adding a basic Query type
// TODO: we need to add the query to avoid conflict like {missing the query} kind of.
// But library to library it depends. so it change while library change
const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    dummyQuery: {
      type: GraphQLString,
      resolve: () => "Hello from the dummy query!",
    },
  },
});

const schema = new GraphQLSchema({
  query, // Add the Query type to the schema
  mutation,
});

module.exports = schema;

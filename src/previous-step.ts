import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLError,
} from "graphql";

const axios = require("axios");

const RootVariousType = new GraphQLObjectType({
  name: "RootVariousTypies",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    avatar: { type: GraphQLString },
  },
});

const CompanyVariousType = new GraphQLObjectType({
  name: "CompanyType",
  fields: {
    id: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    avatar: { type: GraphQLString },
  },
});

const DummyData = new GraphQLObjectType({
  name: "DummyData",
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
    discountPercentage: { type: GraphQLString },
    rating: { type: GraphQLString },
    stock: { type: GraphQLString },
    brand: { type: GraphQLString },
  },
});

const RootTypeData = new GraphQLObjectType({
  name: "RootType",
  fields: {
    user: {
      type: RootVariousType,
      args: { id: { type: GraphQLString } },
      async resolve(parentData, args) {
        const data = await axios
          .get("https://65992631a20d3dc41cef4e6b.mockapi.io/darshit/test")
          .then((resp: any) => resp.data);
        const testObj = data.find((value: any) => value.id === args.id);
        return testObj;
      },
    },
    company: {
      type: CompanyVariousType,
      args: { myId: { type: GraphQLString } },
      resolve: async (parentValue, args) => {
        const data = await axios
          .get("https://65992631a20d3dc41cef4e6b.mockapi.io/darshit/test")
          .then((resp: any) => resp.data);
        const testObj = data.find((value: any) => value.id === args.myId);
        return testObj;
      },
    },
    product: {
      type: DummyData,
      args: { id: { type: GraphQLString } },
      resolve: async (parentValue, args) => {
        return await axios
          .get(`https://dummyjson.com/products/${args.id}`)
          .then((resp: any) => resp.data);
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootTypeData });
module.exports = schema;

import express from "express"; // yarn add express
import { createHandler } from "graphql-http/lib/use/express";
const schema = require("./previous-step");

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.post("/graphql", createHandler({ schema }));

const PORT = process.env.port || 4300;
app.listen(PORT, () => {
  console.log(`server ${PORT} is started`);
});

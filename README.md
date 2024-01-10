# Understanding GraphQL Concepts

GraphQL is a query language and runtime for APIs that enables clients to request only the data they need. It differs from traditional REST APIs in several key ways.

## Important Concepts:

### 1. Schema

- **Types**: Defines the structure of data.
- **Queries**: Retrieves data from the server.
- **Mutations**: Alters data on the server.
- **Subscriptions**: Listens for real-time data changes.

### 2. Resolvers

- Functions that resolve data for different parts of the GraphQL schema.
- Resolver is Provide the Data, and that Data is Co-related the The Schema or Type that we're created.

### 3. Queries and Mutations

- **Query**: Fetches data from the server.
- **Mutation**: Modifies data on the server.

### 4. GraphQL Playground and Run the Query

- `npm install`
- `npm start`
- `Request Raised through Postman in Below`
  ```json
  {
    "query": "{user(id: \"23\"){id, name, avatar, company(id: \"42\"){id, title, description,user(id: \"46\"){id, name}}}}"
  }
  ```

**Note: Circular Mean from Type 1 --> Type 2 and Type 2 --> Type 1**

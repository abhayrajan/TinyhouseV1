import express from "express";
import { ApolloServer } from "apollo-server-express";
import _ from "lodash";
import { listings } from "./listings";
import { schema } from "./graphql";

const app = express();
const port = 9000;
const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: "/api" });

const one = 1;
const two = 2;

app.use(express.json());

app.get("/", (_req, res) => res.send(`1 + 2 = ${one + two}`));

app.get("/listings", (_req, res) => {
  res.send(listings);
});

app.post("/delete-listings", (req, res) => {
  const id: string = req.body.id;
  console.log(id);
  const index = _.findIndex(listings, l => l.id == id);
  if (index >= 0) {
    res.send(listings.splice(index, 1));
  } else {
    res.send("id not found");
  }
});

app.listen(port);

console.log(`[app] : http://localhost:${port}`);

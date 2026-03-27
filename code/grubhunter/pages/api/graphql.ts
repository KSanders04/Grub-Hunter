import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { schema } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";

const server = new ApolloServer<BaseContext>({
  typeDefs: schema,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async () => {
    const token = {};
    return { token };
  },
});

const allowCors =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Allow", "POST");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    return await fn(req, res);
  };

export default allowCors(handler);

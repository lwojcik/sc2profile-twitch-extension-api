import fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from "http";
import fp from "fastify-plugin";

export default fp(async (server, {/*opts*/}, next) => {
  server.route({
    url: "/status",
    logLevel: "warn",
    method: ["GET", "HEAD"],
    handler: async ({}, reply) => {
      return reply.send({ date: new Date(), status: "ok" });
    }
  });
  next();
}) as fastify.Plugin<Server, IncomingMessage, ServerResponse, {}>;

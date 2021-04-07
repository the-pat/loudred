import { Client } from "discord.js";
import Koa from "koa";
import favicon from "koa-favicon";
import path from "path";

import config from "./config.js";
import { handler } from "./messages.js";

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.on("message", handler(client));
});

client.login(config.token);

if (config.port) {
  const app = new Koa();
  const faviconPath = path.join(path.resolve(), "public", "favicon.ico");

  app.use(favicon(faviconPath)).use(async (ctx) => {
    ctx.body = "loudred bot is running!";
  });

  app.listen(config.port);
}

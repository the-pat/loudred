import { Client } from "discord.js";
import config from "./config.js";
import { handler } from "./messages.js";
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.on("message", handler(client));
});

client.login(config.token);

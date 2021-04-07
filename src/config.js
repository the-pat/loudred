import { config } from "dotenv";

if (!process.env.BOT_TOKEN || !process.env.ROLLBAR_TOKEN) {
  config();
}

if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN env variable not set");
}

if (!process.env.ROLLBAR_ACCESS_TOKEN) {
  throw new Error("ROLLBAR_ACCESS_TOKEN env variable not set");
}

export default {
  token: process.env.BOT_TOKEN,
  port: process.env.PORT || null,
  rollbar: {
    token: process.env.ROLLBAR_ACCESS_TOKEN,
  },
};

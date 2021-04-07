class Command {
  constructor(predicate, action) {
    this.predicate = predicate;
    this.action = action;
  }
}

const help = (client) =>
  new Command(
    (msg) =>
      msg.mentions &&
      msg.mentions.users.has(client.user.id) &&
      msg.content.includes("help"),
    (msg) =>
      msg.reply(`
      Commands:
        \`ping\`: replies **PONG!**
        \`@Loudred help\`: prints the **help** text
      `)
  );

const ping = new Command(
  (msg) => msg.content === "ping",
  (msg) => msg.reply("PONG!")
);

export const help = help;
export const commands = [ping];

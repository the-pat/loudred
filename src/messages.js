const logger = console;

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
        \`@loudred help\`: prints the **help** text
      `)
  );

const ping = new Command(
  (msg) => msg.content === "ping",
  (msg) => msg.reply("PONG!")
);

const commands = [ping];

export const handler = (client) => {
  const helpCommand = help(client);

  return (msg) => {
    if (msg.author.bot) {
      return;
    }

    if (helpCommand.predicate(msg)) {
      helpCommand.action(msg);
      return;
    }

    const command = commands.find((command) => command.predicate(msg));
    const action = command ? command.action : logger.info;

    action(msg);
  };
};

import { commands, help } from "./commands.js";

const logger = console;

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

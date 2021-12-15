const client = require("./main");
const wait = require("util").promisify(setTimeout);

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) { 
    await interaction.deferReply({ content: `Executed slash command.`, ephemeral: false })
await wait(1000)/* for anti crash */.catch(() => {console.log(err)});
    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd)
      return interaction.followUp({ content: "An error occured whilst running this slash command." });
    const args = [];
    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options ?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }
    interaction.member = interaction.guild.members.cache.get(interaction.user.id);
    cmd.run(client, interaction, args);
  }
  if (interaction.isContextMenu()) { 
// this is for uhh context menus yeah
    
await interaction.deferReply({ ephemeral: false });
    const command = client.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction);
  }
});
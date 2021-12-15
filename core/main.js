const fs = require('fs');
const { Client, Collection, Intents } = require("discord.js"),
token = require("../cfg.json").token,

 client = new Client({
intents: 32511,
ws: {
properties: {
$browser: `discord.js`
}
},
disableEveryone: true,
restTimeOffset: 0,
});
client.once("ready", () => {
 console.log(client.user.username + ' is not online(Not Sharded Tho)');
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('../commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.login(token);
const { Client, Collection, Intents } = require("discord.js"),
token = require("../cfg.json").token,
 client = new Client({
intents: 32511,
ws: {
properties: {
$browser: `discord.py`
}
},
disableEveryone: true,
restTimeOffset: 0,
});
client.once("ready", () => {
 console.log(client.user.username + ' is now ready xd');
});
client.login(token);
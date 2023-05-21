const { Client, Events, IntentsBitField } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessages,
    ],
});

client.on(Events.ClientReady, (c) => {
    console.log(`✅ ${c.user.tag} está online!`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === "Bom dia") {
        message.reply("Filha da Puta");
    }
});

client.login(process.env.TKN);

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");

const TOKEN = process.env.TOKEN;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.on('message', async msg => {
    if (msg.content === '?fact') {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const fact = await response.json();
        let r = fact.value;
        msg.reply(r)
    }
});


client.login(TOKEN);

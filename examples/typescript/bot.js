import { Client, GatewayIntentBits } from 'discord.js';

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// Event: Bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

// Event: Message received
client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

// Login to Discord with your bot's token
client.login('YOUR_TOKEN_HERE');

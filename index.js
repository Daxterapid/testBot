const Discord = require('Discord');
const Bot = new Discord.Client();

Bot.once('ready', () => {
	console.log('ready');
});

Bot.on('message', (message) => {
	if (message.content === 'ping') {
		message.channel.send('\*missed\*');
	}
});

Bot.login('token here');
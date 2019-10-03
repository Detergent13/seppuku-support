/*
	Seppuku Support Bot v1.0
	By detergent#2533/iPho3n1x
	Don't bully me for my spaghetti code please
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)
	.then(main,main)
	.catch(console.error);

function main() {

	const myid = '456352346880999424';

	//setup - console output and activity set
		client.on('ready', () => {
			console.log(`Logged in as ${client.user.tag}!`);
		})

	client.on('ready', () => {
		client.user.setActivity('discord.js', { type: 'PLAYING' })
			.then(presence => console.log(`Activity set to ${presence.activity.name}`))
			.catch(console.error);
	})



	//ping
		client.on('message', msg => {
			if (msg.content.toLowerCase() === 'ping')
				msg.reply('bruh')

		})

	//support
	client.on('message', msg => {
		if (msg.content.toLowerCase() === '$support')
			msg.reply(supportEmbed)

	})

	//baritone keyword
		client.on('message', msg => {
			if (msg.content.match(/baritone/gi) != null && msg.author.id != '612144500743340034')
				msg.reply(baritoneEmbed)

		})

	//clickgui keyword
	client.on('message', msg => {
		if (msg.content.match(/gui/gi) != null && msg.author.id != '612144500743340034')
			msg.reply(clickguiEmbed)

	})

	//install keyword
	client.on('message', msg => {
		if (msg.content.match(/install/gi) != null && msg.author.id !== '612144500743340034')
			msg.reply(installEmbed)
	})

	//bind keyword
	client.on('message', msg => {
		if (msg.content.match(/bind/gi) != null && msg.author.id !== '612144500743340034')
			msg.reply(bindEmbed)
	})

	//prefix keyword
	client.on('message', msg => {
		if (msg.content.match(/prefix/gi) != null && msg.author.id !== '612144500743340034')
			msg.reply(prefixEmbed)
	})

	//stop
	client.on('message', msg => {
		if (msg.content === '$stop') {
			if (msg.author.id !== myid) return;
			msg.channel.send('Stopped.').then(() => {
				process.exit(1);
			})
		}
	})

	//test
	client.on('message', msg => {
		if (msg.author.id === myid && msg.content.toLowerCase() === "test") {
			console.log(`test`);
			msg.reply('test')
		}
	})

	client.on('message', msg => {
		if (((msg.content.match(/riga isn't cute/gi) != null) || (msg.content.match(/riga isnt cute/gi) != null)) && msg.author.id != '612144500743340034')
			msg.channel.send('stfu')
	})


	let supportEmbed = null;
	let baritoneEmbed = null;
	let clickguiEmbed = null;
	let installEmbed = null;
	let prefixEmbed = null;
	let bindEmbed = null;

	let url = null;
	let tag = null;

	client.fetchUser('456352346880999424')
		.then(member => {
			url = member.avatarURL;
			tag = member.tag;

			console.log(url);
			console.log(tag);

			baritoneEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTitle('Baritone Releases')
				.setURL('https://github.com/cabaletta/baritone/releases')
				.setDescription('Download baritone-standalone-forge-1.2.x, and install as a forge mod.')
				.setTimestamp()
				.setFooter('Made by ' + tag, url);
			clickguiEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTitle('ClickGUI Release')
				.setURL('https://discordapp.com/channels/579516739092480000/587485947785117710/598109907555844097')
				.setDescription('Download the ClickGUI jar, then place it in *%appdata%\\\\.minecraft\\\\Seppuku 1.12.2\\\\Modules.* Make sure you\'ve run Seppuku at least once. ')
				.setTimestamp()
				.setFooter('Made by ' + tag, url);
			supportEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTitle('Seppuku Website')
				.setURL('http://seppuku.pw')
				.setTimestamp()
				.addField('Topics I can help with (Type one in chat!):','\nBaritone\nClickGUI\nInstallation')
				.setFooter('Made by ' + tag, url);
			installEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTitle('Download Seppuku')
				.setURL('http://seppuku.pw/download.html')
				.setTimestamp()
				.addField('How to install Seppuku:','Seppuku is a forge mod, so install forge (v14.23.5.2768 recommended), run the profile at least once, then place the Seppuku jar in *%appdata%\\\\.minecraft\\\\mods*\n**Seppuku\'s default prefix is `.`**')
				.setFooter('Made by ' + tag, url);
			bindEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTimestamp()
				.addField('How to bind modules:','.bind moduleName key')
				.setFooter('Made by ' + tag, url);
			prefixEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTimestamp()
				.addField('How to change Seppuku\'s prefix:','.prefix key')
				.setFooter('Made by ' + tag, url);
		})


}


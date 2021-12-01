/*
	Seppuku Support Bot v1.0
	By detergent#2533
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

	//status
	client.user.setActivity('$support', { type: 'PLAYING'})
		.then(console.log)
		.catch(console.error)

	//message listener
	client.on('message', msg => {
		let count = 0;

		if (msg.channel.id === '915708518684831814' && !msg.author.bot) {
			msg.channel.send(msg.cleanContent, {attachment: msg.attachments})
		}

		if (msg.content.match(/clippy/gi) != null && msg.author.id !== '612144500743340034' && msg.channel.id === '579551809685815307') {
			msg.channel.send("", {files: ["https://cdn.discordapp.com/attachments/616326980438327346/629122841920667648/image0.jpg"]});
			count++
		}
		
		if (msg.content.split(" ")[0] === "$say" && msg.author.id == myid) {
			let message = ""
			
			for(i = 2; i < msg.content.split(" ").length; i++)
				message += (msg.content.split(" ")[i] + " ");
			
			client.channels.fetch(msg.content.split(" ")[1]).then((channel) => {
  				channel.send(message)
					.then(console.log)
					.catch(console.error)
			});
		}

		if(msg.channel.id === '616326980438327346' || msg.channel.id === '628427941897961484' && !msg.author.bot) {


			if (msg.content.toLowerCase() === 'ping' && count < 2) {
				msg.reply('bruh')
				count++;
			}

			if ((((msg.content.match(/riga isn't cute/gi) != null) || (msg.content.match(/riga isnt cute/gi) != null)) && !msg.author.bot) && count < 2) {
				msg.channel.send('wrong')
				count++;
			}

			if (msg.content.toLowerCase() === '$support' && !msg.author.bot && count < 2) {
				msg.reply(supportEmbed)
				count++;
			}

			if (msg.content.match(/baritone/gi) != null && !msg.author.bot && count < 2) {
				msg.reply(baritoneEmbed)
				count++;
			}

			if (msg.content === '$stop' && msg.author.id === myid) {
				msg.channel.send('Stopped.');
				process.exit(1);
			}
			
			if (msg.content.match(/loading terrain/gi) != null && !msg.author.bot && count < 2) {
				msg.reply(terrainEmbed);
				count++
			}

			if (msg.content.match(/crash/gi) != null && !msg.author.bot && count < 2) {
				msg.reply(crashEmbed);
				count++
			}

			if (msg.content.toLowerCase() === "install" || msg.content.toLowerCase() === "installation" && !msg.author.bot && count < 2) {
				msg.reply(installEmbed)
				count++
			}

			if (msg.content.match(/multimc/gi) != null && !msg.author.bot && count < 2) {
				msg.reply(multimcEmbed)
				count++
			}

			if (msg.content.match(/bind/gi) != null && !msg.author.bot && count < 2) {
				msg.reply(bindEmbed)
				count++
			}

			if (msg.content.match(/prefix/gi) != null && !msg.author.bot && count < 2) {
				msg.reply(prefixEmbed)
				count++
			}

			if (msg.content.toLowerCase() === "future" && !msg.author.bot && count < 2) {
				msg.reply(futureEmbed)
				count++
			}

			if (msg.author.id === myid && msg.content.toLowerCase() === "test") {
				console.log(`test`);
				msg.reply('test')
			}

			if (msg.content.match(/clippy/gi) != null && !msg.author.bot && count < 2) {
				msg.channel.send("", {files: ["https://cdn.discordapp.com/attachments/616326980438327346/629122841920667648/image0.jpg"]});
				count++
			}
		}
	})

	let supportEmbed = null;
	let baritoneEmbed = null;
	let guiEmbed = null;
	let installEmbed = null;
	let prefixEmbed = null;
	let bindEmbed = null;
	let multimcEmbed = null;
	let futureEmbed = null;
	let crashEmbed = null;

	let url = null;
	let tag = null;

	myUser = client.users.fetch('456352346880999424')
		.then(myUser => {
		
		url = myUser.displayAvatarURL();
		tag = myUser.tag;

		console.log(url);
		console.log(tag);

		baritoneEmbed = new Discord.MessageEmbed()
			.setColor('#9900EE')
			.setTitle('Baritone Releases')
			.setURL('https://github.com/cabaletta/baritone/releases')
			.setDescription('Download baritone-standalone-forge-1.2.x, and install as a forge mod.')
			.setFooter('Made by ' + tag, url);
		supportEmbed = new Discord.MessageEmbed()
			.setColor('#9900EE')
			.setTitle('Seppuku Website')
			.setURL('http://seppuku.pw')
			.addField('Topics I can help with (Type one in chat!):','\nBaritone\nInstallation\nBinds\nPrefix\nMultiMC\nFuture\nClippy\nCrashes')
			.setFooter('Made by ' + tag, url);
		installEmbed = new Discord.MessageEmbed()
			.setColor('#9900EE')
			.setTitle('Download Seppuku')
			.setURL('http://seppuku.pw/download.html')
			.addField('How to install Seppuku:','Seppuku is a forge mod, so install forge (v14.23.5.2768 recommended), run the profile at least once, then place the Seppuku jar in *%appdata%\\\\.minecraft\\\\mods*\n**Seppuku\'s default prefix is `.`**')
			.setFooter('Made by ' + tag, url);
		bindEmbed = new Discord.MessageEmbed()
			.setColor('#9900EE')
			.addField('How to bind modules:','.bind moduleName key')
			.setFooter('Made by ' + tag, url);
		prefixEmbed = new Discord.MessageEmbed()
			.setColor('#9900EE')
			.addField('How to change Seppuku\'s prefix:','.cmd prefix key')
			.setFooter('Made by ' + tag, url);
		futureEmbed = new Discord.MessageEmbed()
			.setColor('#9900EE')
			.addField('How to use Future with Seppuku:','**Not recommended or officially supported**\nInstall Future on your Forge version, then install Seppuku normally.')
			.setFooter('Made by ' + tag, url);
		multimcEmbed = new Discord.MessageEmbed()
			.setTitle('MultiMC Instance')
			.setURL('https://discordapp.com/channels/579516739092480000/616326980438327346/660891430545522717')
			.setColor('#9900EE')
			.addField('Tutorial Here:', 'https://youtu.be/FCsj3oCxi7Q', true)
			.addField('Includes:','Latest Build Dec. 29th, BetterFPS mod, Baritone, ClickUI, TabUI, and Smooth Font\nCredit to <@345932649480847370>!', true)
			.setFooter('Made by ' + tag, url);
		crashEmbed = new Discord.MessageEmbed()
			.addField('Getting crashes?','Please send the crashlog in your .minecraft\\logs.\nPlease make sure there\'s not any information that you don\'t feel comfortable sharing.')
			.setColor('#9900EE')
			.setFooter('Made by ' + tag, url);
		terrainEmbed = new Discord.MessageEmbed()
			.setColor('#9900EE')
			.addField('Stuck on loading terrain?','Hit ESC while loading in, then disable freecam.')
			.setFooter('Made by ' + tag, url);
	})
}

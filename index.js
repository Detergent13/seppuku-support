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

	//status
	client.user.setActivity('$support', { type: 'PLAYING'})
		.then(console.log)
		.catch(console.error)

	//ping
	client.on('message', msg => {
		let count = 0;

		if(msg.channel.id === '616326980438327346' || msg.channel.id === '628427941897961484') {

			if (msg.content.toLowerCase() === 'ping' && count < 2) {
				msg.reply('bruh')
				count++;
			}

			if ((((msg.content.match(/riga isn't cute/gi) != null) || (msg.content.match(/riga isnt cute/gi) != null)) && msg.author.id !== '612144500743340034') && count < 2) {
				msg.channel.send('stfu')
				count++;
			}

			if (msg.content.toLowerCase() === '$support' && count < 2) {
				msg.reply(supportEmbed)
				count++;
			}

			if (msg.content.match(/baritone/gi) != null && msg.author.id !== '612144500743340034' && count < 2) {
				msg.reply(baritoneEmbed)
				count++;
			}

			if (msg.content === '$stop' && msg.author.id === myid) {
				msg.channel.send('Stopped.');
				process.exit(1);
			}


			if (msg.content.match(/clickgui/gi) != null && msg.author.id !== '612144500743340034' && count < 2) {
				msg.reply(clickguiEmbed);
				count++
			}

			if (msg.content.match(/crash/gi) != null && msg.author.id !== '612144500743340034' && count < 2) {
				msg.reply(crashEmbed);
				count++
			}

			if (msg.content.match(msg.content.toLowerCase() === "install" && msg.author.id !== '612144500743340034' && count < 2)) {
				msg.reply(installEmbed)
				count++
			}

			if (msg.content.match(/multimc/gi) != null && msg.author.id !== '612144500743340034' && count < 2) {
				msg.reply(multimcEmbed)
				count++
			}

			if (msg.content.match(/bind/gi) != null && msg.author.id !== '612144500743340034' && count < 2) {
				msg.reply(bindEmbed)
				count++
			}

			if (msg.content.match(/prefix/gi) != null && msg.author.id !== '612144500743340034' && count < 2) {
				msg.reply(prefixEmbed)
				count++
			}

			if (msg.content.toLowerCase() === "future" && msg.author.id !== '612144500743340034' && count < 2) {
				msg.reply(futureEmbed)
				count++
			}

			if (msg.author.id === myid && msg.content.toLowerCase() === "test") {
				console.log(`test`);
				msg.reply('test')
			}

			if (msg.content.match(/clippy/gi) != null && msg.author.id !== '612144500743340034' && count < 2) {
				msg.channel.send("", {files: ["https://cdn.discordapp.com/attachments/616326980438327346/629122841920667648/image0.jpg"]});
				count++
			}
		}
	})

	let supportEmbed = null;
	let baritoneEmbed = null;
	let clickguiEmbed = null;
	let installEmbed = null;
	let prefixEmbed = null;
	let bindEmbed = null;
	let multimcEmbed = null;
	let futureEmbed = null;
	let crashEmbed = null;

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
				.setFooter('Made by ' + tag, url);
			clickguiEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTitle('ClickGUI Release')
				.setURL('https://discordapp.com/channels/579516739092480000/587485947785117710/598109907555844097')
				.setDescription('Download the ClickGUI jar, then place it in *%appdata%\\\\.minecraft\\\\Seppuku 1.12.2\\\\Modules.* Make sure you\'ve run Seppuku at least once. ')
				.setFooter('Made by ' + tag, url);
			supportEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTitle('Seppuku Website')
				.setURL('http://seppuku.pw')
				.addField('Topics I can help with (Type one in chat!):','\nBaritone\nClickGUI\nInstallation\nBinds\nPrefix\nMultiMC\nFuture\nClippy\nCrashes')
				.setFooter('Made by ' + tag, url);
			installEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.setTitle('Download Seppuku')
				.setURL('http://seppuku.pw/download.html')
				.addField('How to install Seppuku:','Seppuku is a forge mod, so install forge (v14.23.5.2768 recommended), run the profile at least once, then place the Seppuku jar in *%appdata%\\\\.minecraft\\\\mods*\n**Seppuku\'s default prefix is `.`**')
				.setFooter('Made by ' + tag, url);
			bindEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.addField('How to bind modules:','.bind moduleName key')
				.setFooter('Made by ' + tag, url);
			prefixEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.addField('How to change Seppuku\'s prefix:','.cmd prefix key')
				.setFooter('Made by ' + tag, url);
			futureEmbed = new Discord.RichEmbed()
				.setColor('#9900EE')
				.addField('How to use Future with Seppuku:','**Not recommended or officially supported**\nInstall Future on your Forge version, then install Seppuku normally.')
				.setFooter('Made by ' + tag, url);
			multimcEmbed = new Discord.RichEmbed()
				.setTitle('MultiMC Instance')
				.setURL('https://discordapp.com/channels/579516739092480000/616326980438327346/630790417117478919')
				.setColor('#9900EE')
				.addField('Includes:','ClickGUI, TabGUI, RPC, FakeCreative, Baritone, Optifine\nCredit to <@345932649480847370>!')
				.setFooter('Made by ' + tag, url);
			crashEmbed = new Discord.RichEmbed()
				.addField('Getting crashes?','Please send the crashlog in your .minecraft\\logs.\nPlease make sure there\'s not any information that you don\'t feel comfortable sharing.')
				.setColor('#9900EE')
				.setFooter('Made by ' + tag, url);
		})


}


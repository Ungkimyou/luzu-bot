const Discord = require("discord.js");
const client = new Discord.Client();
const bot = client
const fs = require('fs');
const botconfig = require("./botconfig.json");

/////////////event////////////////////////////////////////////////////////////////////
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
  });
/////////////commands/////////////////////////////////////////////////////////////////
// Message event
client.on("message", async message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  };
	
let prefix = prefixes[message.guild.id].prefixes;
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return;
   

// Bot Mention Embed
  if(message.content.toLowerCase() === `<@${client.user.id}>`){
    let embed = new Discord.RichEmbed()
    .setTitle("Luzu bot")
    .addField("Prefix", `${prefix}`, true)
    .addField("Help", `${prefix}help`, true)
    .setThumbnail(client.user.displayAvatarURL)
    .setColor(`${message.guild.me.displayHexColor!=='#00000000' ? message.guild.me.displayHexColor : 0xffffff}`);
    message.channel.send(embed);
  };


	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
	if(message.author.bot) return undefined;
	if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;
  

  try {
	let commandFile = require(`./commands/fun/${cmd}.js`);
	commandFile.run(bot, message, args);

    let fun = bot.channels.get("577160250478821387");
  
  let log = new Discord.RichEmbed()
    .setTitle('fun command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

  fun.send(log);
	} catch (e) {
  
}
  	try {
	let commandFile = require(`./commands/mods/${cmd}.js`);
	commandFile.run(bot, message, args);

    let mods = bot.channels.get("577160297588981770");
  
  let log = new Discord.RichEmbed()
    .setTitle('mods command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

  mods.send(log);
	} catch (e) {
  }
	try {
	let commandFile = require(`./commands/dev/${cmd}.js`);
	commandFile.run(bot, message, args);

    let dev = bot.channels.get("577160690574295060");
  
  let log = new Discord.RichEmbed()
    .setTitle('dev command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

  dev.send(log);
	} catch (e) {

}
    	try {
	let commandFile = require(`./commands/help/${cmd}.js`);
	commandFile.run(bot, message, args);

    let help = bot.channels.get("577160480989380609");
  
  let log = new Discord.RichEmbed()
    .setTitle('help command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

  help.send(log);
	} catch (e) {
  }
      	try {
	let commandFile = require(`./commands/nsfw/${cmd}.js`);
	commandFile.run(bot, message, args);

    let nsfw = bot.channels.get("577160366753054768");
  
  let log = new Discord.RichEmbed()
    .setTitle('nsfw command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

  nsfw.send(log);
	} catch (e) {
  }
      	try {
	let commandFile = require(`./commands/info/${cmd}.js`);
	commandFile.run(bot, message, args);

    let info = bot.channels.get("577160453718016063");
  
  let log = new Discord.RichEmbed()
    .setTitle('info command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

  info.send(log);
	} catch (e) {
  }
       	try {
	let commandFile = require(`./commands/gamestats/${cmd}.js`);
	commandFile.run(bot, message, args);

    let gamestats = bot.channels.get("577160419219734554");
  
  let log = new Discord.RichEmbed()
    .setTitle('gamestats command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

  gamestats.send(log);
	} catch (e) {
  }
         	try {
	let commandFile = require(`./commands/image/${cmd}.js`);
	commandFile.run(bot, message, args);

    let image = bot.channels.get("577160538958594055");
  
  let log = new Discord.RichEmbed()
    .setTitle('image command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

  image.send(log);
	} catch (e) {
  }
          	try {
	let commandFile = require(`./commands/setting/${cmd}.js`);
	commandFile.run(bot, message, args);

    let setting = bot.channels.get("577160580499243041");
  
  let log = new Discord.RichEmbed()
    .setTitle('setting command')
    .setColor("RANDOM")
    .addField('Cambodia Bot', `----------------\nCommand: ${cmd}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID of server: **${message.guild.id}**`)
    .setFooter(`${bot.user.tag}`)
    .setTimestamp();

    setting.send(log);
	} catch (e) {
  }


  
  
  
  
});



  


bot.login(process.env.TOKEeN);
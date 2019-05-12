const Discord = require('discord.js');

 
exports.run = (bot, message, args) => {
message.react("✅")
  let bicon = message.author.avatarURL;
   let icon = bot.user.displayAvatarURL;
  var embed = new Discord.RichEmbed()
 .setDescription(`Hello!! I'm Luzu Bot.Under here have some Menu of commnds. Do **<prefix>comand**\n Let mention me to show prefix if u forget my prefix`)
 .setThumbnail(icon)
 .setTitle("**Luzu Command Help**") //This is the title of the embed.
// .addField("__General :skull_crossbones:__","`" + message.prefix + "general`", true) //This is basically a pair of a title with content below it. The format of how it is made is how I show it to be.
 .addField("__Music :headphones:__", "`" + message.prefix + "music`", true)
 .addField("__Info :military_medal:__","`" + message.prefix + "info`", true)
 .addField('__Mods :shield:__', "`" + message.prefix + "mods`", true)
 .addField("__Image :frame_photo:__","`" + message.prefix + "image`", true)
 .addField("__Fun :joy:__", "`" + message.prefix + "fun`", true)
 .addField("__Game Stats :video_game:__", "`" + message.prefix + "gamestats`", true)
 .addField("__NSFW channel :underage:__","`" + message.prefix + "nsfw`", true)
 .addField("__setting  :tools:__", "`" + message.prefix + "setting`", true)
 .addField("__Logging__", "`coming soon`", true)
 .addField("__Developer Bot :robot:__", "`" +message.prefix + "dev`", true)
// .addField("__**more information**__", "• Server Support: ╚» [click here](https://discord.gg/Betgsq9) «╝                     • Invite bot:   ╚» [click here](https://discordapp.com/oauth2/authorize?client_id=501795842705981440&scope=bot&permissions=2117598463) «╝\n• Website Bot ╚» [click here](https://discordbots.org/bot/) «╝                         • Vote Bot:   ╚» [click here](https://discordbots.org/bot//vote)  «╝")
 .setColor(`RED`) //This code selects a random colour for the embed.
 .setTimestamp() //This sets the timestamp.
 .setFooter(`Requested by ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
 return message.channel.send(embed);
 }
     
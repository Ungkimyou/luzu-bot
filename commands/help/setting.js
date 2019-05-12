const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ) => {
  message.react("✅")
 var embed = new Discord.RichEmbed()
 .setTitle("Name Comands |  Permissions")
 .setAuthor("" + message.prefix +"Mods Help Menu ", message.author.avatarURL)
 .addField("setprefix               : __Administrator__", "`-change new prefix that you want`") 
 .addField("setservername   : __Administrator__", "`-change name of your server`")
 .addField("kickvoice              : __Administrator | Move member__", "`-kick someone out voice channel`") 
 // .addField("", "``")
 // .addField("", '``')
 // .addField("", "``")
 // .addField("", "``")
 // .addField("__**more information**__", "• Server Support: ╚» [click here](https://discord.gg/Betgsq9) «╝ \n• Invite bot          ╚» [click here](https://discordapp.com/oauth2/authorize?client_id=501795842705981440&scope=bot&permissions=2117598463) «╝(^_^)")
 .setColor(`RED`)
 .setTimestamp() 
 .setFooter(`Requested by :${message.author.username} `)
 
 return message.channel.send(embed);
 }
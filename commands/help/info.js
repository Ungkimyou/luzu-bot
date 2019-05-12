 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setColor('#f8e536')
.setTitle("Info Menu :military_medal:")
// .addField("`" + message.prefix +"anime`", "Shows information of anime movie.")
.addField("`" + message.prefix +"avatar (@mention)`", "- Shows pic of user that you mention.")
// .addField("`" + message.prefix +"banlist`", "Shows name user that has Banned.")
// .addField("`" + message.prefix +"botinfo`", "Shows some information of bot.")
// .addField("`" + message.prefix +"channelid`", "Get ID of some channel | `**//channelid (#namechannel)**`.")
// .addField("`" + message.prefix +"channelinfo`", "Shows some information of that channels.")
// .addField("`" + message.prefix +"emojilist`", "Shows emoji that server have.")
// .addField("`" + message.prefix +"emote`", "search name emoji in server | ex: **//emote (nameemoji)**")
// .addField("`" + message.prefix +"member`", "stats member")
// .addField("`" + message.prefix +"myinfo`", "Shows information your own.")
// .addField("`" + message.prefix +"online`", "Shows member stats in server.")
// .addField("`" + message.prefix +"roleinfo`", "Shows information of roles that U mention | `**//roleinfo (rolename)**`.")
// .addField("`" + message.prefix +"servericon`", "Shows pic icon of server.")
// .addField("`" + message.prefix +"serverinfo`", "Shows information of server.")
// .addField("`" + message.prefix +"statsbot`", "Shows stats of Bot.")
// .addField("`" + message.prefix +"weather`", "Shows weather of you country.")
// .addField("`" + message.prefix +"youtube`", "Shows information of video in Youtube.")
.setTimestamp() //This sets the timestamp.
.setFooter(`Requested by :${message.author.tag} `) 
message.channel.send(embed);
message.react("✅");
}

module.exports.help = {
  name: "Info" 
}
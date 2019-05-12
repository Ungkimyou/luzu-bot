const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel("**| You dont have `MANAGE_ROLES` permissions.**");
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

if (!role) return message.channel.send(`**${message.author.username}**, role not found`);


message.guild.members.filter(m => !m.user.bot).map(async member => await member.addRole(role));
  
  message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all members`);
}


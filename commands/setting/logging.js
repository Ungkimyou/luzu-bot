const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`
**COMMAND:**
- \`${message.prefix}logging set #channel\`
- \`${message.prefix}logging on\`
- \`${message.prefix}logging off\`
- \`${message.prefix}logging info\`

`)
              .setFooter("logging", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("📜")
              message.channel.send({embed});
            } else {
              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./logging.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Sorry, you don't have permissions to do this!");
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./logging.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#32d732")
              .setDescription(`logging set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
  
  
            if (option.match("on")) {
            var logsetting = JSON.parse(fs.readFileSync("./logonoff.json", "utf8"));
            logsetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./logonoff.json", JSON.stringify(logsetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`logging event has been **on**.`)
                .setTimestamp()
                .setFooter("logging Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
            var logsetting = JSON.parse(fs.readFileSync("./logonoff.json", "utf8"));
            logsetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./logonoff.json", JSON.stringify(logsetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#32d732")
                .setDescription(`logging has been **off**.`)
                .setTimestamp()
                .setFooter("logging Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("info")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./logging.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**logging:**\n\`\`\`None\`\`\``)
                  .setColor("#32d732")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**logging:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#32d732")
              return message.channel.send(embed); 
           }
  
}

exports.help = {
    name: "logging"
}

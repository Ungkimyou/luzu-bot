const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("- You dont have enough permissions!You need role that have permission **Administrator**").then(message => message.delete(40000));//\n- អ្នកមិនមានសិទ្ធិគ្រប់គ្រាន់ទេ! អ្នកត្រូវការ Role ដែលមានសិទ្ធិ **Administrator**
    if (!args[0] || args[0 == "help"]) return message.reply(`Usage: <old prefix>setprefix <new prefix here>"`);

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setTitle("Prefix Set!")
        .setDescription(`Set to ${args[0]}`);

    message.channel.send(sEmbed);

}

module.exports.help = {
  name: "setprefix"
}
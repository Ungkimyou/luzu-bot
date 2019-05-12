// const Discord = require('discord.js');
// exports.run = (client, message, args, ops) => {
//   // let logs = message.guild.channels.find("name", "mods-log");
//   // if(!logs) return message.channel.send("** :x: | Could not find a **mods-log** channel.**");

//    if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') ||  !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {//!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || 
//             return message.channel.send('- You dont have enough permissions!You need role that have permission **Move member** | **Administrator**\n- អ្នកមិនមានសិទ្ធិគ្រប់គ្រាន់ទេ! អ្នកត្រូវការ role ដែលមានសិទ្ធិ **Move member** និង **Administrator**');
//         }

//         let member = message.guild.members.get(message.mentions.users.array()[0].id);
//         if(!message.mentions.users){
//             message.channel.send("**-You have to mention a user/player.\n- អ្នកត្រូវ mention ពីអ្នកប្រើ / អ្នកលេង**")
//             return;
//         }

//     if(!member.voiceChannel){
//     message.channel.send("**I can't find this player in any voice channel.**")
//     return;
//     }
//               message.guild.createChannel('voicekick', 'voice').then(c => {
//                 member.setVoiceChannel(c).then(() => {
//                     c.delete(305).catch(console.log)
        
//       });
//     });
// }
const Discord = require('discord.js');
exports.run = (client, message, args, ops) => {
  // let logs = message.guild.channels.find("name", "mods-log");
  // if(!logs) return message.channel.send("** :x: | Could not find a **mods-log** channel.**");

   if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') ||  !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {//!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || 
            return message.channel.send('- You dont have enough permissions!You need role that have permission **Move member** | **Administrator**');
        }

        let member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.channel.send("**-You have to mention a user/player.**")
            return;
        }

    if(!member.voiceChannel){
    message.channel.send("**I can't find this player in any voice channel.**")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        
      });
    });
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.guild) return;
 
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('Joind hey!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }

    dispatcher.on('end', () => {
    });
    
    dispatcher.on('error', e => {
      console.log(e);
    });
    
    dispatcher.setVolume(0.5);
    dispatcher.setVolume(1); 
    
    console.log(dispatcher.time); 
    
    dispatcher.pause(); 
    
    dispatcher.end();
  }

module.exports.help = {
    name: "join"
}
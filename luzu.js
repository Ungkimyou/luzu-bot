const Discord = require("discord.js");
const client = new Discord.Client();
const bot = client
const fs = require('fs');


/////////////event////////////////////////////////////////////////////////////////////
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
  });


  


bot.login("NTc3MTQ3NDk0Nzg2NTMxMzM4.XNg0xA.T4exkjpJ0ECAPhrFB_oFMuz6O-M");
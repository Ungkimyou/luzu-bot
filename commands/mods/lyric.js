exports.run = async (client, message, params) => {
  const thing = params.slice(0).join(' '),
        Discord = require('discord.js'),
        song = thing,
        lyric = require('lyricist'),
        lyr = new lyric('exzKax1DFpxgTVQsy9eJfMH75eBFTpgSv4e__BAzrTLp5nSgxfDiAOBjSbZw2tLc'),        
        mx = require('node-hackgenius'),
        ytapi = require("simple-youtube-api"),
        youtube = new ytapi(('AIzaSyAPEceNnYOsJcVPw-nSuiibzHaLg8P9zwo'))
  let id
  let url
  let artistic
  let sang

    const results = await youtube.searchVideos(song, 1);
  mx.search(song).then(async songs => {
    console.log(songs)
    id = songs[0].id
    url = songs[0].url
    artistic = songs[0].artist
    sang = songs[0].title
  
  const songz = await lyr.song(id, {fetchLyrics: true})
  //console.log(songz.lyrics)
  const embed = new Discord.RichEmbed()
  .setTitle('Lyrics for ' + sang + " by " + artistic)
  .setTimestamp()
  .setURL(url)
  .setColor(message.guild.member(client.user).displayHexColor)
  .setDescription(songz.lyrics.substring(0, 2045) + '...')
  
  results.forEach(i => {
      embed.setFooter(`https://www.youtube.com/watch?v=${i.id}`)
    })
    
  message.channel.send(embed)
  })
}
                       
exports.conf = {
  aliases: ['l'],
  permLevel: 0
}

exports.help = {
  name: "lyrics",
  description: "Gets lyrics to a song you choose",
  usage: "!lyrics [song title]"
}
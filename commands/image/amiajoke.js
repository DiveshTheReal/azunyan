const AlexAPI = require("alexflipnote.js");
const AlexClient = new AlexAPI();

module.exports = {
    name: "amiajoke",
    description: "Am i a joke to you :/",
    usage: "@someone ",
    category: "image",
    aliases: [""],
    timeout: 10,
    run: async(bot, message, args) => {
          let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
  let link = await AlexClient.image.amiajoke({image: avatar})
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage(link) 
  message.channel.send({embed});
    }
}

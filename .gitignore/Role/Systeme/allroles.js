const Command = require("../../modules/command.js");
const { RichEmbed } = require("discord.js");

class Reboot extends Command {
    constructor(client) {
        super(client, {
          name: "allroles",
          description: "Affiche tous les rôles disponibles avec des réactions.",
          usage: "allroles",
          category: "Système",
          permLevel: "|BOT|"
        });
    }

    async return(message) {
        try {
          message.delete();
          const |Viewers| = message.guild.roles.get("653890421583511563")
          const |Validé| = message.guild.roles.get("653875535650226176")

          const white_check_mark = this.client.emojis.find(
              emoji = emoji.name === "white_check_mark"
          );
          const clapper = this.client.emojis.find(
            emoji = emoji.name === "clapper"
        );

          const embed = new RichEmbed()
            .setTitle("Rôle")
            .setDescription(
                "Clique sur le(s) réaction(s) ci-dessous pour obtenir le(s) rôle(s) correspondant."
            )
            .setColor("#0078bd")
            .addfield(
              "Les Rôles Disponnibles:", 
              '
              ${|Viewers|} = ${white_check_mark.toString()}
              ${|Viewers|} = ${white_check_mark.toString()}
              '
            );

        message.channel.send(embed).then(async msg => {
            await msg.react(white_check_mark);
            await msg.react(clapper);
        }); 
        } catch (e) {
          console.log(e);
        }
    }
}

module.exports = Allrolles;
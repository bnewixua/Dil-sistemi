const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const wixua = require("croxydb");
module.exports = {
  name: "yardım",
  description: "Yardım menüsü",
  type: 1,
  options: [],
  run: async (client, interaction) => {

let tr = wixua.fetch(`turkish_${interaction.guild.id}`, "turkish")

    if(!tr) {

        interaction.reply({content: "**:flag_tr: Dili seçmeden komudu kullanan zeki developer senmisin?\n:flag_us: Are you the clever developer using the script without choosing the language?**", ephemeral: true})
    }

    if(tr === "turkish") {
    
    const embed = new EmbedBuilder()
    .setDescription("2 Komut var zaten ne bakıyon.")
    .setColor("Blue")
    

    interaction.reply({embeds: [embed]})
    }

    let eng = wixua.fetch(`eng_${interaction.guild.id}`, "English")

    if(eng === "English") {

        if(!eng) {
            interaction.reply({content: "**:flag_tr: Dili seçmeden komudu kullanan zeki developer senmisin?\n:flag_us: Are you the clever developer using the script without choosing the language?**", ephemeral: true})
        }

        const embed = new EmbedBuilder()
        .setDescription("There are 2 commands, what are you looking at?")
        .setColor("Blue")
        
    
        interaction.reply({embeds: [embed]})
        }

  }
  }
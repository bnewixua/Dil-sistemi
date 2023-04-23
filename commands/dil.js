const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");
module.exports = {
  name: "dil",
  description: "Bir dil seçiniz | choose a language",
  type: 1,
  options: [],
  run: async (client, interaction) => {

    const embed = new EmbedBuilder()
    .setAuthor({name: "Dilini seç", iconURL: interaction.user.avatarURL()})
    .setDescription("**> :flag_tr: Dilini seç.\n> :flag_us: Choose your language.**")
    .setColor("Orange")
    .setFooter({text: "Wixua Tester"})

    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setLabel("Türkçe")
        .setStyle(2)
        .setCustomId(`tr`)
    )
    .addComponents(
      new ButtonBuilder()
        .setLabel("English")
        .setStyle(2)
        .setCustomId(`eng`)
    )
    
    interaction.reply({embeds: [embed], components: [row]})

  }
}

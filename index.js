const { PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const wixua = require("croxydb")
const client = new Client({
  intents: INTENTS,
  allowedMentions: {
    parse: ["users"]
  },
  partials: PARTIALS,
  retryLimit: 32
});

global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs");
const { TOKEN } = require("./config.json");
const { Modal } = require("discord-modals");
readdirSync('./commands').forEach(f => {
    if (!f.endsWith(".js")) return;

    const props = require(`./commands/${f}`);

    client.commands.push({
        name: props.name.toLowerCase(),
        description: props.description,
        options: props.options,
        dm_permission: props.dm_permission,
        type: 1
    });

    console.log(`[BOT] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

    const eve = require(`./events/${e}`);
    const name = e.split(".")[0];

    client.on(name, (...args) => {
        eve(client, ...args)
    });
    console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(TOKEN)



client.on('interactionCreate', async (interaction) => {

  if (!interaction.isButton()) return;
  if (interaction.customId === "tr") {


    const embed = new EmbedBuilder()
    .setDescription("**türkçe dilini seçtiniz.**")
    .setColor("Green")

if(wixua.fetch(`eng_${interaction.guild.id}`, "English")) {

  interaction.reply({content: "Zaten seçili dil var", ephemeral: true})

}

    interaction.reply({embeds: [embed], ephemeral: true})

    wixua.set(`turkish_${interaction.guild.id}`, "turkish")

  }

  if (!interaction.isButton()) return;
  if (interaction.customId === "eng") {

    const embed = new EmbedBuilder()
    .setDescription("**You have selected the English language.**")
    .setColor("Green")

    interaction.reply({embeds: [embed], ephemeral: true})

    if(wixua.fetch(`turkish_${interaction.guild.id}`, "turkish")) {

      interaction.reply({content: "Already selected language", ephemeral: true})
    
    }

    wixua.set(`eng_${interaction.guild.id}`, "English")

  }


})
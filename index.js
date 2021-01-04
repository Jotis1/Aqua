const Discord = require("discord.js")
const client = new Discord.Client()


const prefix = "aq!"


client.on("ready", () => {

    console.log("Ohayou!") 
    client.user.setPresence({
        status: "idle",
        activity: {
            name: "Konosuba",
            type: "WATCHING"

        }
    })

})


client.on("message", async (message) => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if (command === "omedetou"){
        message.react('☑️')
        message.channel.send(`Omedetou. Has completado mi evento. ¿Te ha gustado como me ha quedado? Espero que no haya sido muy difícil... :two_hearts:`)
    }




})


client.login(process.env.TOKEN)
const Discord = require("discord.js")
const client = new Discord.Client()





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

client.login("Nzk0MjA4MzA5ODcwODU0MTU0.X-3eIA.tyNyk00CXMiWqB-V5nEpskKO--U")
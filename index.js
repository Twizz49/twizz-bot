const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready" , () => {
    console.log("Twizz opperationnel");
});


Client.on("message" , message => {
    if(message.author.bot) return;

    //!ping
    if(message.content == prefix + "ping"){
        message.channel.send("pong");
    }
    
    //!stat
    if(message.content ==  prefix + "stat"){
        message.channel.send("**" + message.author.username +  "** a posté un message");
    }

    //!Twizz
    if(message.content ==  prefix + "twizz"){
        message.channel.send("**" + message.author.username + "** Twizz c'est le plus beau");
    }

    //!kibutsuji
    if(message.content ==  prefix + "kibutsuji"){
        message.channel.send("**" + message.author.username + "** Kibutsuji c'est le meilleur modo");
    }

    //!cookie
    if(message.content ==  prefix + "cookie"){
        message.channel.send("**" + message.author.username + "** Cookie c'est le pire modo");
    }

    //!helps
    if(message.content ==  prefix + "helps"){
        message.channel.send("**" + message.author.username + "** !ping !stat !twizz !kibutsuji !cookie !helps !ckick !ban !mute");
    }

    //!ckick ban mute
    if(message.member.hasPermission("ADMINISTRATOR")){
       if(message.content.startsWith(prefix + "ban")){
           let mention = message.mentions.members.first();

           if(mention == undefined){
               message.reply("Membre non ou mal mentioné");
           }
           else {
               if(mention.bannable){
                   mention.ban();
                   message.channel.send(mention.displayName + " a été banni avec succès")
               }
              else {
                  message.reply("Impossible de banir ce membre");
              } 
           }
           
       }
       else if(message.content.startsWith(prefix + "kick")){
           let mention = message.mentions.members.first();

           if(mention == undefined){
               message.reply("Membre non ou mal mentionné");
           }
           else {
               if(mention.kickable){
               mention.kick();
               message.channel.send(mention.displayName + "a été kick avec succès");
               }
               else {
                   message.reply(" Impossible de kick se membre.");
               }
           }
       }
       else if(message.content.startsWith(prefix + "mute")){
           let mention = message.mentions.members.first();

           if(mention == undefined){
               message.reply("membre non ou mal mentionné.");
           }
           else {
             mention.roles.add("838396424827830274");
             message.channel.send(mention.displayName + " mute avec succès.");
           }

       }
      
    }

    
});


Client.login("ODM3NzE0OTU0MjAyNTEzNDY4.YIwk2Q.hyqlZu5kjqGu7PAWBhSYb6PJCH0")
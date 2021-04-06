const Discord = require ('discord.js');

const client = new Discord.Client();

const prefix = '&';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('La constitución rige a los chefs');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'estado'){
        message.channel.send('al toke mirrey');

        
    } else if (command == 'reglas'){
        client.commands.get('reglas').execute(message, args, Discord);
    } else if (command == 'regla1'){
        client.commands.get('regla1').execute(message, args, Discord);
    } else if (command == 'regla2'){
        client.commands.get('regla2').execute(message, args, Discord);
    } else if (command == 'regla3'){
        client.commands.get('regla3').execute(message, args, Discord);
    } else if (command == 'regla4'){
        client.commands.get('regla4').execute(message, args, Discord);
    } else if (command == 'regla5'){
        client.commands.get('regla5').execute(message, args, Discord);
    } else if (command == 'regla6'){
        client.commands.get('regla6').execute(message, args, Discord);
    } else if (command == 'regla7'){
        client.commands.get('regla7').execute(message, args, Discord);
    } else if (command == 'regla8'){
        client.commands.get('regla8').execute(message, args, Discord);
    }
});


client.login(process.env.token);



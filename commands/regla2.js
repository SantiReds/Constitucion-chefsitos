module.exports = {
    name: 'regla2',
    description: "Aqui se cita la regla 2",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FA6607')
        .setTitle('Regla #2')
        .setAuthor('Chefsitos MX', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif', 'https://www.instagram.com/chefsitos_mx/')
        .setDescription('No esta permitido el contenido NSFW o +18')
        .setFooter('Recuerden que al entrar al grupo se acuerda que se respetarán las reglas', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif')

        



        message.channel.send(newEmbed);
    }
}
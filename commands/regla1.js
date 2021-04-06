module.exports = {
    name: 'regla1',
    description: "Aqui se cita la regla 1",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00ffab')
        .setTitle('Regla #1')
        .setAuthor('Chefsitos MX', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif', 'https://www.instagram.com/chefsitos_mx/')
        .setDescription('No esta permitido ningún tipo de insulto o discriminación hacia algún miembro ni staff')
        .setFooter('Recuerden que al entrar al grupo se acuerda que se respetarán las reglas', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif')

        



        message.channel.send(newEmbed);
    }
}
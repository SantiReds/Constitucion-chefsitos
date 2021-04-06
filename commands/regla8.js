module.exports = {
    name: 'regla8',
    description: "Aqui se cita la regla 8",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#810ed2')
        .setTitle('Regla #8')
        .setAuthor('Chefsitos MX', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif', 'https://www.instagram.com/chefsitos_mx/')
        .setDescription('Por favor sigan las reglas son muy simples evítense un BAN')
        .setFooter('Recuerden que al entrar al grupo se acuerda que se respetarán las reglas', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif')

        



        message.channel.send(newEmbed);
    }
}
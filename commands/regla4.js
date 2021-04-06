module.exports = {
    name: 'regla4',
    description: "Aqui se cita la regla 4",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#fdff02')
        .setTitle('Regla #4')
        .setAuthor('Chefsitos MX', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif', 'https://www.instagram.com/chefsitos_mx/')
        .setDescription('No hacer promo, mencionar, ni filtrar de otros servers ni postear links a menos que tengan permiso de algún admin')
        .setFooter('Recuerden que al entrar al grupo se acuerda que se respetarán las reglas', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif')

        



        message.channel.send(newEmbed);
    }
}
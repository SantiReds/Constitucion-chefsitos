module.exports = {
    name: 'regla6',
    description: "Aqui se cita la regla 6",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#fffff')
        .setTitle('Regla #6')
        .setAuthor('Chefsitos MX', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif', 'https://www.instagram.com/chefsitos_mx/')
        .setDescription('Los canales tienen nombre por una razon usen los canales correctos porfavor')
        .setFooter('Recuerden que al entrar al grupo se acuerda que se respetarán las reglas', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif')

        



        message.channel.send(newEmbed);
    }
}
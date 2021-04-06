module.exports = {
    name: 'regla5',
    description: "Aqui se cita la regla 5",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7fffd4')
        .setTitle('Regla #5')
        .setAuthor('Chefsitos MX', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif', 'https://www.instagram.com/chefsitos_mx/')
        .setDescription('No sacar la info de el server, la información que proporcionamos es para que ustedes puedan aumentar sus posibilidades de comprar los lanzamientos no cotizados')
        .setFooter('Recuerden que al entrar al grupo se acuerda que se respetarán las reglas', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif')

        



        message.channel.send(newEmbed);
    }
}
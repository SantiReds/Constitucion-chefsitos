module.exports = {
    name: 'regla7',
    description: "Aqui se cita la regla 7",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0ed2c3')
        .setTitle('Regla #7')
        .setAuthor('Chefsitos MX', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif', 'https://www.instagram.com/chefsitos_mx/')
        .setDescription('No vender cosas fake, ni estafen, ni se hagan pasar por otras personas, estamos para apoyarnos no estafarnos, no soportaremos la venta de ningún articulo fake')
        .setFooter('Recuerden que al entrar al grupo se acuerda que se respetarán las reglas', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif')

        



        message.channel.send(newEmbed);
    }
}
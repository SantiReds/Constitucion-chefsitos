module.exports = {
    name: 'reglas',
    description: "Aqui se citan todas las reglas",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#DD0000')
        .setTitle('Constitución Política de los Chefsitos Unidos')
        .setAuthor('Chefsitos MX', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif', 'https://www.instagram.com/chefsitos_mx/')
        .setDescription('Esta es nuestra ley y por esta nos regimos, respetarla es nuestro deber y obligación al estar dentro de este grupo con el fin de una comunidad sana.')
        .setThumbnail('https://static.wikia.nocookie.net/disney/images/e/e8/Anyone_Can_Cook.jpg/revision/latest/scale-to-width-down/340?cb=20120719045937')
        .addFields(
            {name: 'Regla 1', value: 'No esta permitido ningún tipo de insulto o discriminación hacia algún miembro ni staff'},
            {name: 'Regla 2', value: 'No esta permitido el contenido NSFW o +18'},
            {name: 'Regla 3', value: 'No SPAM'},
            {name: 'Regla 4', value: 'No hacer promo, mencionar, ni filtrar de otros servers ni postear links a menos que tengan permiso de algún admin'},
            {name: 'Regla 5', value: 'No sacar la info de el server, la información que proporcionamos es para que ustedes puedan aumentar sus posibilidades de comprar los lanzamientos no cotizados'},
            {name: 'Regla 6', value: 'Los canales tienen nombre por una razon usen los canales correctos porfavor'},
            {name: 'Regla 7', value: 'No vender cosas fake, ni estafen, ni se hagan pasar por otras personas, estamos para apoyarnos no estafarnos, no soportaremos la venta de ningún articulo fake'},
            {name: 'Regla 8', value: 'Por favor sigan las reglas son muy simples evítense un BAN'},
        )
        .addFields({name:'SIGAN LAS REGLAS NO HAGAN QUE LOS BANEMOS, NO HABRA TOLERANCIA NI REEMBOLSOS', value:'\u200b'},)
        .setFooter('Recuerden que al entrar al grupo se acuerda que se respetarán las reglas', 'https://i.pinimg.com/originals/fe/e3/9a/fee39aa5ccc162cebfaea4cae5d7d83b.gif')

        



        message.channel.send(newEmbed);
    }
}
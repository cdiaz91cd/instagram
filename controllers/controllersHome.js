
let self = {};

let imagenes = [{

	img: 'http://www.neptunepinkfloyd.co.uk/photos/var/resizes/David-Gilmour-Photos/Young-David-Gilmour-Photos/Young%20David%20Gilmour%20Photos%20%2818%29.jpg?m=1391960462',
	corazon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Emoji_u2665.svg/1024px-Emoji_u2665.svg.png',
	titulo: 'imagen 1',
	likes: 0,
	id: 1

}, {
	img: 'https://i.pinimg.com/originals/1b/c5/56/1bc55694d7f4fd2cfd285b585413913d.jpg',
	corazon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Emoji_u2665.svg/1024px-Emoji_u2665.svg.png',
	titulo: 'imagen 2',
	likes: 0,
	id: 2
}, {
	img: 'https://i.ytimg.com/vi/SzRDRCetXDg/maxresdefault.jpg',
	corazon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Emoji_u2665.svg/1024px-Emoji_u2665.svg.png',
	titulo: 'imagen 3',
	likes: 0,
	id: 3
}, {
	img: 'http://rs1107.pbsrc.com/albums/h381/lovedtodeth-/DAVID%20GILMOUR/480997.jpg?w=280&h=210&fit=crop',
	corazon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Emoji_u2665.svg/1024px-Emoji_u2665.svg.png',
	titulo: 'imagen 4',
	likes: 0,
	id: 4
}];



self.home = function (req, res) {
	res.render('index', {//lo que yo quiero mostrar en la pantalla
		fotos: imagenes
	})
}

self.like = function (req, res) {

	for (var i = 0; i < imagenes.length; i++) {
		if (imagenes[i].id == req.body.id) {
			imagenes[i]['likes'] = parseInt(imagenes[i]['likes']) + 1
			res.json({ likes: imagenes[i]['likes'] });
		}
	}
}


self.dynamic = function (req, res) {

	for (var i = 0; i < imagenes.length; i++) {
		if (imagenes[i].id == req.params.id) {
			res.render('dynamic', {
				fotos: imagenes[i]
			})
		}
	}
};





module.exports = self//publica porque la exportamos









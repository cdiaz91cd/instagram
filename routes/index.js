

var express = require('express');//es para usar un paquete1
var router = express.Router(); //ejecuta la funcion router de express, si no hacemos eso no podemos hacer un router.get de la linea 8
let palabras=[];
const homeController = require('../controllers/controllersHome');



router.get('/', homeController.home)//que va hacer cuando entre por esa url por get es entrar a home controller, a la home/ lo que va despues del punto es una funcion que esta dentro de homeController.


//router.post('/', controllersHome.fotos)//estoy llamando al controlador

router.put('/like', homeController.like)

router.get('/dynamic/:id', homeController.dynamic)//puede ir cualquier nombre en dynamic

router.get('/click', function(req, res, next) {


	res.json({//lo que yo quiero mostrar en la pantalla
		//frase: frasesDesordenadas[0]
	})
});

module.exports = router;




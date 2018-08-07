

var express = require('express');
var router = express.Router();
let palabras = [];
const homeController = require('../controllers/controllersHome');



router.get('/', homeController.home)

router.put('/like', homeController.like)

router.get('/dynamic/:id', homeController.dynamic)

router.get('/click', function (req, res, next) {


	res.json({

	})
});

module.exports = router;




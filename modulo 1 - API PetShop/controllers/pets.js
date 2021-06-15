const Pet = require('../models/model_pets')

module.exports = app => {

	app.post('/pet', (req, res) => {
		const pet = req.body;
		Pet.adiciona(pet, res);

	})


};

const Atendimento = require('../models/model_atendimentos')

module.exports = app => {
	app.get('/atendimentos', (req, res) => {
		Atendimento.lista().then(value => res.status(200).json(value)).catch(erros => res.status(400).json(erros));
	});

	app.get('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id);
		Atendimento.BuscarAtendimento(id).then(value => res.status(200).json(value)).catch(erros => res.status(400).json(erros));
	});

	app.patch('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id);
		const valores = req.body;

		Atendimento.altera(id, valores).then(value => res.json(value)).catch(erros => res.status(400).json(erros));

	});

	app.post('/atendimentos', (req, res) => {
		const atendimento = req.body;

		Atendimento.adiciona(atendimento).then((value) => {
			res.status(200).json(value);
		}).catch(erros => res.status(400).json(erros));
	});

	app.delete('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id);
		Atendimento.deleta(id).then(value => res.json('Dados deletado com sucesso')).catch(erros => res.status(400).json(erros));
	});
}

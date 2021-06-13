const conexao = require('../infraestrutura/conexao');
const Updaload = require('../arquivos/upload');
class Pet {

	adiciona(pet, res) {
		const query = 'INSERT INTO Pets SET ?'

		

		Updaload(pet.imagem, pet.nome, (novoCaminho) => {
				const novoPet = {nome: pet.nome, imagem: novoCaminho};

			conexao.query(query, novoPet, error => {
				if (error) {
					console.log(error);
					res.status(400).json(erro);
				} else {
					res.status(200).json(novoPet);
				}


			});


		})


	}

}

module.exports = new Pet();

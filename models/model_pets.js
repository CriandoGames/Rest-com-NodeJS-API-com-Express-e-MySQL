const conexao = require('../infraestrutura/conexao');

class Pet {

    adiciona(pet,res) {
        const query = 'INSERT INTO Pets SET ?'

        conexao.query(query, pet, error => {

            if (error) {
                console.log(error);
                res.status(400).json(erro);
            } else {
                res.status(200).json(pet);
            }


        });
    }

}

module.exports = new Pet();


const Query = require('../infraestrutura/provider/queries');


class Atendimento {
		adiciona(atendimento){
			const sql = 'INSERT INTO atendimentos SET ?'
			return Query(sql,atendimento);
		}
}

module.exports = new Atendimento()

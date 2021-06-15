const Query = require('../infraestrutura/provider/queries');


class Atendimento {
		adiciona(atendimento){
			const sql = 'INSERT INTO atendimentos SET ?'
			return Query(sql,atendimento);
		}

		lista(){
			const sql = 'SELECT * FROM  Atendimentos';
			return Query(sql);
		}

		BuscarAtendimento(id)
		{
			const sql = `SELECT * FROM Atendimentos WHERE id=${id}`
			return Query(sql);
		}

		altera(id, valores){
			const sql = `UPDATE Atendimentos SET ? WHERE id=${id}`
			return Query(sql,valores);
		}

		delete(id){
			const sql = `DELETE FROM Atendimentos WHERE id=${id}`
			return Query(sql);
		}

}

module.exports = new Atendimento()

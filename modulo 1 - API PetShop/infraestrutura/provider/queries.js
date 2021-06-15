const conexao = require('./conexao');


const executaQuery = (query, parementos = '') => {
	return new Promise((resolver, reject) => {

		conexao.query(query, parementos, (erros, resultados, campos) => {
			if (erros) reject(erros);
			else resolver(resultados);

		})
	});
}

module.exports = executaQuery

const axios = require('axios');
const moment = require('moment');
const conexao = require('../infraestrutura/provider/conexao');
const Repositoy = require('../repository/repository_atendimento');

class ModelAtendimento {

	constructor() {

		this.dataEhValida = (data, dataCriacao) => moment(data).isSameOrAfter(dataCriacao);
		this.valida = parametros => this.vaalidacoes.filter(campo => {
			const {
				value
			} = campo;
			const parametro = parametros[value]

			return !campo.valido(parametro)
		});

		this.vaalidacoes = [{
			nome: 'data',
			valido: this.dataEhValida,
			mensagem: 'ata deve ser maior ou igual a data atual'
		}, ]

	}

	adiciona(Atendimento, res) {

		const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');

		const data = moment(Atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

		const parametros = {
			data: {
				data,
				dataCriacao
			}
		}

		const error = this.valida(parametros)
		const existemErros = error.length;

		if (existemErros) {
			return new Promise((resolve, reject) => reject(error))
		} else {

			const atendimentoDatado = {
				...Atendimento,
				dataCriacao,
				data
			}

			return Repositoy.adiciona(atendimentoDatado).then((value) => {
				const id = value.id;
				return {
					atendimentoDatado,
					id
				}
			})


		}

	}


	lista() {
		return Repositoy.lista();
	}

	BuscarAtendimento(id) {

		return Repositoy.BuscarAtendimento(id);
	}

	altera(id, valores) {

		if (valores.data)
			valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
		return Repositoy.altera(id, valores);
	};

	deleta(id) {
		return Repositoy.delete(id);
	}

}

module.exports = new ModelAtendimento;

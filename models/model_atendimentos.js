const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class ModelAtendimento{
    adiciona(Atendimento, res){
           
            const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');

            const data  = moment(Atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');  
            
           const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
           

           const vaalidacoes = [
               {
                   nome: 'data',
                   valido: dataEhValida,
                   mensagem: 'ata deve ser maior ou igual a data atual'
               },
               {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'ata deve ser maior ou igual a data atual'
            }
           ]

           const error = vaalidacoes.filter(campo => !campo.valido);
           const existemErros = error.length;

           if(existemErros){
               res.status(400).json(error);
           }else {

            const atendimentoDatado = {...Atendimento,dataCriacao, data}

            const sql = 'INSERT INTO atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(resultados)
                }
            });

           }

    }


    lista(res){
        const sql = 'SELECT * FROM  Atendimentos'

        conexao.query(sql,(erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    BuscarAtendimento(id,res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`
        
        conexao.query(sql,(erro,resultados) => {
            const atendimento = resultados[0];
            if(erro){
                res.status(400).json(erro)
            }else {
                res.status(200).json(atendimento);
            }

        });
    }

}

module.exports = new ModelAtendimento;
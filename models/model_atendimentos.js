const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class ModelAtendimento{
    adiciona(Atendimento, res){
           
            const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
         
            const data  =moment().format('YYYY-MM-DD HH:MM:SS');  //moment(Atendimento.data, formar:'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
           
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

module.exports = new ModelAtendimento;
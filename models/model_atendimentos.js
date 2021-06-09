const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class ModelAtendimento{
    adiciona(Atendimento){
           
            const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
         
            const data =moment().format('YYYY-MM-DD HH:MM:SS');  //moment(Atendimento.data, formar:'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
           
            const atendimentoDatado = {...Atendimento,dataCriacao, data}

            const sql = 'INSERT INTO atendimentos SET ?'
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro){
                    console.log(erro)
                }else{
                    console.log(resultados)
                }
            });
    }


}

module.exports = new ModelAtendimento;
const conexao = require('../infraestrutura/conexao');

class ModelAtendimento{
    adiciona(Atendimento){
           
            const dataCriacao = new Date();
            const atendimentoDatado = {...Atendimento,dataCriacao}

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
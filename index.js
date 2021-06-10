const config = require('./config/config');
const conexao = require('./infraestrutura/conexao');
const tabelas = require('./infraestrutura/tabelas');

//conectar ao banco
conexao.connect(erro => {
    if (erro) {
        console.log('Erro na conexão do banco de dados' + erro.message);
    } else {
        console.log('Conectado com sucesso');
        tabelas.init(conexao);

        //start app
        const app = config();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});
const Atendimento = require('../models/model_atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req,res)=> res.send('você esta na rotas de atencimento'));


    app.post('/atendimentos', (req,res)=> {
      const atendimento = req.body;
        
      Atendimento.adiciona(atendimento);
        res.send('metodo post')
    });
}
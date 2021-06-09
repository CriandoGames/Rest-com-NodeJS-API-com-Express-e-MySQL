module.exports = app => {
    app.get('/atendimentos', (req,res)=> res.send('você esta na rotas de atencimento'));


    app.post('/atendimentos', (req,res)=> {
        console.log(req.body);
        
        res.send('metodo post')
    });
}
module.exports = app => {
    app.get('/atendimentos', (req,res)=> res.send('você esta na rotas de atencimento'));
}
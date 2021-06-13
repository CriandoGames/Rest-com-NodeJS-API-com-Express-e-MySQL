const fs = require('fs');



module.exports = (caminho,nomedoArquivo,callbackImagemCriada) =>{

	//criando novo caminho para imagem
	const novoCaminho =`./assets/imagens/${nomedoArquivo}`

	fs.createReadStream(caminho).pipe(
		fs.createWriteStream(`./assets/imagens/${nomedoArquivo}`)
	).on('finish', () => callbackImagemCriada(novoCaminho));
}


const fs = require('fs');
const path = require('path');


module.exports = (caminho,nomedoArquivo,callbackImagemCriada) =>{


	const tipo = path.extname(caminho)
	//criando novo caminho para imagem
	const novoCaminho =`./assets/imagens/${nomedoArquivo}${tipo}`

	fs.createReadStream(caminho).pipe(
		fs.createWriteStream(`./assets/imagens/${nomedoArquivo}`)
	).on('finish', () => callbackImagemCriada(novoCaminho));
}


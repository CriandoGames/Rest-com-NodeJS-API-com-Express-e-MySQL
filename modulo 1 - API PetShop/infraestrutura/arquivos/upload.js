const fs = require('fs');
const path = require('path');


module.exports = (caminho, nomedoArquivo, callbackImagemCriada) => {

	const tiposValidos = ['jpg', 'png', 'jpeg'];
	//pegando tipo de imagem
	const tipo = path.extname(caminho)
	//criando novo caminho para imagem
	const novoCaminho = `./assets/imagens/${nomedoArquivo}${tipo}`

	const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

	if (tipoEhValido) {

		fs.createReadStream(caminho).pipe(
			fs.createWriteStream(`./assets/imagens/${nomedoArquivo}${tipo}`)
		).on('finish', () => callbackImagemCriada(false, novoCaminho));
	} else {
		const error = 'Tipo Invalido';
		console.log('Tipo Invalido');
		callbackImagemCriada(error);
	}


}

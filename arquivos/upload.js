const fs = require('fs');

fs.createReadStream('./assets/logo_03.png').pipe(
	fs.createWriteStream('./assets/logo_stream.png')
).on('finish', () => console.log('Image foi criada')); 

const fs = require('fs');

fs.readFile('./assets/logo_03.png', (erro, buffer) => {

  console.log('imagem Buffer OK');
  console.log(buffer);

fs.writeFile('./assets/logo_clone.png', buffer,erro => {
  console.log("clone feito com sucesso atraves de buffer");
});

});



const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, '/sobre.html'));
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, '/contato.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
function ativaLetra(eLemento){
    const arrTexto = eLemento.innerHTML.split('');
    eLemento.innerHTML = '';
    arrTexto.forEach((Letra, i)=>{
        setTimeout(()=>{
            eLemento.innerHTML += Letra;
        },75 * i)
    });
}
const titulo = document.querySelector('.digitando');
ativaLetra(titulo);
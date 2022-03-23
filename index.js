const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

const pokedex = [
  {
    id: '001',
    nome: 'Bulbasaur',
    tipo: 'Planta',
    categoria: 'Semente',
    habilidade: 'Superar',
    altura: '50',
    peso: '15',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    detalhes: 'Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.',
  },
  {
    id: '007',
    nome: 'Squirtle',
    tipo: 'Água',
    categoria: 'Tartaruga',
    habilidade: 'Torrente',
    altura: '50',
    peso: '9',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    detalhes: 'Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.',
  },
];

app.get('/', (req, res) => {
  res.render('index', { pokedex });
});

pokedex.forEach(pokemon => {
  app.get('/detalhes/' + pokemon.nome, (req, res) => {
    res.render('detalhes', { pokedex });
  });
});

app.get('/cadastro', (req, res) => {
  res.render('cadastro', { pokedex });
});

app.post('/add', (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect('/');
});

app.post('/cadastro', (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect('/cadastro');
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

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
    descricao: 'Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.',
  },
  {
    id: '004',
    nome: 'Charmander',
    tipo: 'Fogo',
    categoria: 'Lagarto',
    habilidade: 'Chama',
    altura: '60',
    peso: '8,5',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    descricao: 'Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.',
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
    descricao: 'Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.',
  },
];

const lista__filtro = [];

app.get('/', (req, res) => {
  res.render('index', { pokedex });
});

app.get('/pokedex', (req, res) => {
  res.render('pokedex', { pokedex });
});

app.post('/pokedexfiltro', (req, res) => {
  console.log('foi sim');
  lista__filtro.push(pokedex.map(e => req.query.tipo == e.tipo));
  res.redirect('/pokedex', { pokedex: lista__filtro });
});

app.post('/add', (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect('/');
});

app.get('/cadastro', (req, res) => {
  res.render('cadastro', { pokedex });
});

app.post('/cadastro', (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  setTimeout(() => {
    res.redirect('/cadastro');
  }, 5000);
});

app.get('/detalhes/:nome', (req, res) => {
  const nome = req.params.nome;
  const pokemon = pokedex.find(pokemon => pokemon.nome == nome);

  res.render('detalhes', { pokemon: pokemon });
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

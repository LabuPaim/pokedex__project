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
    altura: 50,
    peso: '15',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    detalhes: 'Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.',
  },
  {
    id: '004',
    nome: 'Charmander',
    
    
    peso: '8,5',
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    
  },
];
const detalhes = [
  {
    detalhes:'',
    categoria:'',
    habilidade:'',
    peso:'',
    altura:'',
  }
]
app.get('/', (req, res) => {
  res.render('index', { pokedex });
});

app.get('/detalhes', (req, res) => {
  res.render('index', { detalhes });
});

app.post('/add', (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect('/');
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

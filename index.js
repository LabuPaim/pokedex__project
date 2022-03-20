const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const pokedex = [
  {
    id: "001",
    nome: "Bulbasaur",
    tipo: 'Planta',
    categoria: 'Semente',
    habilidade: 'Superar',
    altura: 50,
    peso: "15",
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    descricao: 'Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.',
  },
  {
    id: "004",
    nome: "Charmander",
    tipo: 'Fogo',
    categoria: 'Lagarto',
    habilidade: 'Chama',
    altura: 60,
    peso: "8,5",
    imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    descricao: 'Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.',
  },
]

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
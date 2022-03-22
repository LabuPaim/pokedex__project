const addCLICK = document.getElementById('card_add');
const formCLICK = document.getElementById('card_form');

const card = document.getElementById('card');
const lista = document.getElementById('lista');

addCLICK.addEventListener('click', () => {
  formCLICK.style.display = 'flex';
  addCLICK.style.display = 'none';
});


const container_card = document.getElementById('container_card')

container_card.addEventListener('mouseover', () => {
  lista.style.display = 'flex';
  card.style.display = 'none';
});

container_card.addEventListener('mouseout', () => {
  lista.style.display = 'none';
  card.style.display = 'flex';
});


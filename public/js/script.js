/*================================================================= ADD Click no ADD Main =================================================================*/

const addCLICK = document.getElementById('card_add');
const formCLICK = document.getElementById('card_form');

addCLICK.addEventListener('click', () => {
  formCLICK.style.display = 'flex';
  addCLICK.style.display = 'none';
});

/*==================================================================== ADD Hover POKEBOLA NAV ====================================================================*/

const pokeLINE1 = document.getElementById('poke-line1');
const pokeLINE2 = document.getElementById('poke-line2');
const poke = document.getElementById('container_navbar_itens_pokedex');
console.log('pokeLINE1');

poke.addEventListener('mouseover', () => {
  pokeLINE1.style.backgroundColor = '#fff';
  pokeLINE2.style.backgroundColor = '#fff';
});

poke.addEventListener('mouseleave', () => {
  pokeLINE1.style.backgroundColor = 'rgb(85, 84, 84)';
  pokeLINE2.style.backgroundColor = 'rgb(85, 84, 84)';
});



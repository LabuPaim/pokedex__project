/*=================================================================== ADD ALERT CADASTRO ===========================================================*/

const cadastro__alerta = document.getElementById('cadastro__alert');
const submit = document.getElementById('submit_cadastro');
const alert_close = document.getElementById('cadastro__alert__close');

submit.addEventListener('click', () => {
  cadastro__alerta.style.display = 'flex';
});

alert_close.addEventListener('click', () => {
  cadastro__alerta.style.display = 'none';
});

// function validar__cadastro() {
//   cadastro__alerta.style.display = 'flex';
//     setTimeout((cadastro__alerta.style.display = 'none'), 1000);
// }

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

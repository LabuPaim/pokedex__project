const addCLICK = document.getElementById('card_add');
const formCLICK = document.getElementById('card_form');

addCLICK.addEventListener('click', () => {
  formCLICK.style.display = 'flex';
  addCLICK.style.display = 'none';
});


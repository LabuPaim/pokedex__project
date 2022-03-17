
const link = ['./img/001.png'];


const main = document.querySelector('main');
const img = document.createElement('img');
main.append(img);
img.setAttribute('src', link[0]);

let pokeCIRCULO = document.getElementById('teste')
const poke = document.getElementsByClassName('container_itens_poke')
poke.addEventListener('mouseover', () => {
    pokeCIRCULO.setAttribute('id','link')

})

const link = ['./img/001.png'];


const container_card = document.querySelector('container_card');
const card = document.getElementById('card');



container_card.addEventListener('mouseover', () => {    
    card.style.display = 'flex';  
})

container_card.addEventListener('mouseleave', () => {
    card.style.display = 'none';  
       
})

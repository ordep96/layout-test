
let btnMenu = document.querySelector('#btn-menu'),
    header = document.querySelector('#header');



const openMenu = () => {
  header.classList.toggle('active-menu');
}



btnMenu.addEventListener('click', openMenu);


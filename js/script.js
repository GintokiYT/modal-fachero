const $ = selector => document.querySelector(selector);

const body = $('body');
const buttonModal = $('.button-modal');
const contenedorModal = $('.contenedor-modal');
const modal = $('.modal');

buttonModal.addEventListener('click', () => {
  contenedorModal.classList.toggle('d-flex');
  body.classList.toggle('open-modal');

  modal.classList.add('animation-open-modal');
  modal.classList.remove('animation-close-modal');
});

contenedorModal.addEventListener('click', (e) => {
  if(e.target !== modal) {
    modal.classList.remove('animation-open-modal');
    modal.classList.add('animation-close-modal')
    setTimeout(() => {
      body.classList.toggle('open-modal')
      contenedorModal.classList.toggle('d-flex');
    }, 450)
  }
}); 
   
  








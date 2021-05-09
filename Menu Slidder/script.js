

const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const  modal_container = document.getElementById('modal_container');

toggle.addEventListener('click',() =>
    document.body.classList.toggle('show-nav')

);

// open modal
open.addEventListener('click',() => 
modal_container.classList.add('show-modal')

 );

//  hide modal
 close.addEventListener('click',() => 
 modal_container.classList.remove('show-modal')
 ); 

 
//hide modal on outside click
window.addEventListener('click',e =>
 e.target == modal_container ? modal_container.classList.remove('show-modal') : false
 );
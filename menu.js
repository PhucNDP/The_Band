const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal")
const btnCancel = document.querySelector('.js-cancel-btn')
const stopmodal = document.querySelector('.js-modal-container')
function ShowBuyTicket(){
    modal.classList.add('open')
}
function HideBuyTicket(){
    modal.classList.remove('open')
}
for( const buyBtn of buyBtns){
    buyBtn.addEventListener('click', ShowBuyTicket);
}
btnCancel.addEventListener('click', HideBuyTicket);
modal.addEventListener('click', HideBuyTicket);
stopmodal.addEventListener('click', function(event){
    event.stopImmediatePropagation();
})
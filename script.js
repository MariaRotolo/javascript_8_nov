

function cookies() {
    setTimeout(() => {
        modal.style.display = "flex";
    }, 10000);
};


function hideCookies() {
    modal.style.display = "none";
};


const modal = document.querySelector(".modal");
const accept = document.querySelector("#btn-accept");

document.addEventListener("DOMContentLoaded", cookies, {once: true});
accept.addEventListener("click", hideCookies);



////////////////////////////// esercizio 2 ////////////////////////////
























/*

const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector("#btn-accept");

function hideModal() {
    modal.style.opacity = 0;
  
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 350);
  };
  acceptBtn.addEventListener("click", hideModal, { once: true }); 

  /*

function cookies (){
    modal.style.opacity = 0;
};




document.addEventListener("DOMContentLoaded", cookies);   */
 



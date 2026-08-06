const cards =
document.querySelectorAll(".fade-up");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

cards.forEach(card=>observer.observe(card));

const imgs=document.querySelectorAll(".gallery img");

const lightbox=document.querySelector(".lightbox");

const preview=document.querySelector(".lightbox-image");

const close=document.querySelector(".close");

imgs.forEach(img=>{

img.onclick=()=>{

lightbox.classList.add("show");

preview.src=img.src;

};

});

close.onclick=()=>{

lightbox.classList.remove("show");

};

lightbox.onclick=e=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

};
/*==========================
      FEEDBACK POPUP
==========================*/

const openBtn =
document.getElementById("openFeedback");

const popup =
document.getElementById("feedbackPopup");

const closeBtn =
document.querySelector(".popup-close");

openBtn.addEventListener("click",(e)=>{

e.preventDefault();

popup.classList.add("show");

});

closeBtn.addEventListener("click",()=>{

popup.classList.remove("show");

});

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.classList.remove("show");

}

});

/*==========================
        GOM POPUP
==========================*/

const gomBtn = document.getElementById("openGomPopup");

if (gomBtn) {

    const gomPopup = document.getElementById("gomPopup");
    const gomClose = document.querySelector(".gom-close");

    gomBtn.addEventListener("click", (e) => {

        e.preventDefault();

        gomPopup.classList.add("show");

    });

    gomClose.addEventListener("click", () => {

        gomPopup.classList.remove("show");

    });

    gomPopup.addEventListener("click", (e) => {

        if (e.target === gomPopup) {

            gomPopup.classList.remove("show");

        }

    });

}
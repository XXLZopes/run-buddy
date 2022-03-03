const burgerMenuEl = document.querySelector(".burger-menu");
const mobileNavEl = document.querySelector(".mobile-screen-nav");
const line1El = document.querySelector("#line1");
const line2El = document.querySelector("#line2");
const line3El = document.querySelector("#line3");
const bodyEl = document.querySelector("body");

let isMobileNavOpen = false;

burgerMenuOnclick = ()=> { 
    !isMobileNavOpen ? isMobileNavOpen=true : isMobileNavOpen=false;
    isMobileNavOpen ? (
        mobileNavEl.style.display="block",
        line1El.style.background="#39a6b2",
        line2El.style.background="#39a6b2",
        line3El.style.background="#39a6b2"
        ) : 
        (
            mobileNavEl.style.display="none",
            line1El.style.background="#fce138",
            line2El.style.background="#fce138",
            line3El.style.background="#fce138"
        );
    
}

document.addEventListener('click', function(e) {
    e = e || window.event;
    let targeted = e.target.className;
        if (targeted=="burger-menu" || targeted=="line") {
            burgerMenuOnclick();
        } else {
            isMobileNavOpen=false;
            mobileNavEl.style.display="none";
            line1El.style.background="#fce138";
            line2El.style.background="#fce138";
            line3El.style.background="#fce138";
        }
});

window.addEventListener('resize', ()=> {
    if (window.innerWidth >= 769) {
        burgerMenuEl.style.display="none";
        mobileNavEl.style.display="none";
        isMobileNavOpen=false;
    } else {
        burgerMenuEl.style.display="flex";
    }
    if (!isMobileNavOpen) {
        line1El.style.background="#fce138";
        line2El.style.background="#fce138";
        line3El.style.background="#fce138";
    }
});

window.addEventListener('load', ()=> {
    if (window.innerWidth >= 769) {
        burgerMenuEl.style.display="none";
        mobileNavEl.style.display="none";
        isMobileNavOpen=false;
    } else {
        burgerMenuEl.style.display="flex";
    }
});


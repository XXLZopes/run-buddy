const burgerMenuEl = document.querySelector(".burger-menu");
const mobileNavEl = document.querySelector(".mobile-screen-nav");
const bodyEl = document.querySelector("body");

let isMobileNavOpen = false;

burgerMenuOnclick = ()=> { 
    !isMobileNavOpen ? isMobileNavOpen=true : isMobileNavOpen=false;
    isMobileNavOpen ? mobileNavEl.style.display="block" : mobileNavEl.style.display="none";
}

document.addEventListener('click', function(e) {
    e = e || window.event;
    let target = e.srcElement.className;
        console.log(target);
        if (target=="burger-menu" || target=="line") {
            burgerMenuOnclick();
        } else {
            isMobileNavOpen=false;
            mobileNavEl.style.display="none"
            console.log("hi")
        }
});

window.addEventListener('resize', ()=> {
    if (window.innerWidth >= 769) {
        burgerMenuEl.style.display="none";
        mobileNavEl.style.display="none";
        isMobileNavOpen=false;
    } else {
        burgerMenuEl.style.display="flex"
    }
});

window.addEventListener('load', ()=> {
    if (window.innerWidth >= 769) {
        burgerMenuEl.style.display="none";
        mobileNavEl.style.display="none";
        isMobileNavOpen=false;
    } else {
        burgerMenuEl.style.display="flex"
    }
});
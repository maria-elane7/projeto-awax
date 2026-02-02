const menuOpener = document.querySelector(".menu-opener");

const nav = document.querySelector("nav");


menuOpener.addEventListener("click", ()=>{

    if(nav.style.display === "flex" || nav.style.display === "block"){
        nav.style.display = "none"
    }else{
        nav.style.display = "block"
    }
})
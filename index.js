const mobMenu = document.getElementById("mob-menu");
const nav = document.querySelector(".nav-links");

if (mobMenu){
    mobMenu.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

const closeMenu = document.getElementById("close");
if (closeMenu){
    closeMenu.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-men");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    // Toggle body overflow when menu is open
    if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});

document.querySelectorAll(".nav-item a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
}));

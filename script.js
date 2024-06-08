let nav = document.querySelector(".primary-navigation");
let navToggle = document.querySelector(".mobile-nav");


navToggle.addEventListener("click", () => {

    let visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
    
})

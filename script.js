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

});

/* tabs change for planets */

let tabList = document.querySelector('[role="tablist"]');
let tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    let keydownLeft = 37;
    let keydownRight = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }

    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}


function changeTabPanel(e) {
    let targetTab = e.target;
    let targetPanel = targetTab.getAttribute("aria-controls");
    let targetImage = targetTab.getAttribute("data-image");

    let tabContainer = targetTab.parentNode;
    let mainContainer = tabContainer.parentNode;


        mainContainer
        .querySelectorAll('article')
        .forEach((article) => article.setAttribute("hidden", true));




    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    mainContainer
        .querySelectorAll('picture')
        .forEach((picture) => picture.setAttribute("hidden", true));

mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');


}


/*
function handleTabClick(){
    if (tabFocus === ("tabindex", 1));
    if (tabFocus === ("tabindex", 2));

     let clickTab = tabFocus.getAttribute("aria-controls");

     let tabContainer = clickTab.parentNode;
    tabContainer.querySelector ([`#${targetPanel}`]).removeAttribute('hidden');
}



let tabButton = document.querySelectorAll('[role="tabList"]');

let tabFocus = 0;

tabButton.forEach(button => button.addEventListener('click', handleTabClick));

/* if (tabFocus === ("tabindex", 1));
    if (tabFocus === ("tabindex", 2));*/

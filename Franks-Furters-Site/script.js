const mainNav = document.querySelector(".main-nav");
const mainNavBtn = document.querySelector(".main-nav-btn");
const mainNavList = document.querySelector(".main-nav-list");
const listItem = document.querySelectorAll(".list-item");
const homeHeader = document.querySelector(".home-section-header");
const menuBox = document.querySelector(".menu-box");
const menuItems = document.querySelectorAll(".menu-items-container");
const itemsContainer = document.querySelector(".menu-items-container")
const specialTextOne = document.querySelector(".specials-text-content1");
const specialTextTwo = document.querySelector(".specials-text-content2");
const specialImageOne = document.querySelector(".specials-image1");
const specialImageTwo = document.querySelector(".specials-image2");
const contactItemsOne = document.querySelector(".contact-items1");
const contactItemsTwo = document.querySelector(".contact-items2");
const applyLogo = document.querySelector(".apply-logo");
const applyInfo = document.querySelector(".apply-info");
//NAV MENU//
mainNavBtn.addEventListener("click", function(){
    mainNav.classList.toggle("main-nav-animate");
    mainNavBtn.classList.toggle("btn-animate");
})


window.addEventListener("mouseup", function(event){
    if (event.target != mainNavList && event.target.parentNode != mainNavList && event.target != mainNavBtn && event.target.parentNode != mainNavBtn) {
        mainNav.classList.remove("main-nav-animate");
        mainNavBtn.classList.remove("btn-animate");
    }
})


//transitions//
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("animate", entry.isIntersecting)
    })
}, {
    threshold: 0.2,
})

observer.observe(specialImageOne);
observer.observe(specialTextOne);
observer.observe(specialImageTwo);
observer.observe(specialTextTwo);
observer.observe(menuBox);
observer.observe(contactItemsOne);
observer.observe(contactItemsTwo);
observer.observe(applyLogo);
observer.observe(applyInfo);
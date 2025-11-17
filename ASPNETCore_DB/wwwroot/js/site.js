// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Footer accordion functionality
const footer = document.querySelectorAll(".footer-column");

footer.forEach((f) => {
    f.addEventListener("click", () => {
        f.classList.toggle("active");
    });
});

// Mobile menu toggle functionality
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".navigation-items .mainNav");

if (menuIcon && mobileMenu) {
    menuIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent event bubbling
        mobileMenu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    //// Close menu when clicking outside
    //document.addEventListener("click", (e) => {
    //    if (!mobileMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    //        mobileMenu.classList.remove("active");
    //    }
    //});

    //// Close menu when clicking on a menu item
    //const menuItems = mobileMenu.querySelectorAll("li a");
    //menuItems.forEach(item => {
    //    item.addEventListener("click", () => {
    //        mobileMenu.classList.remove("active");
    //    });
    //});
}
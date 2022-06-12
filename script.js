const featureLink = document.getElementById("myDropdownFeature");
const companyLink = document.getElementById("myDropdownCompany");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function Feature() {
  featureLink.classList.toggle("show");
}

function Company() {
  companyLink.classList.toggle("show");
}

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".btn-dropdown")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

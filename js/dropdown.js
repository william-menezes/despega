function openDropdownMenu() {
  document.getElementById("dropdownMenu").classList.toggle("open");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("open")) {
        openDropdown.classList.remove("open");
      }
    }
  }
};

function filterDropdown() {
  document.getElementById("filterDropdownContent").classList.toggle("open");
}

function openSearchbar() {
  document.getElementById("navbar__searchbar").classList.toggle("open");
}

function openNavbarLinksCta() {
  document.getElementById("navbar__links").classList.toggle("open");
}

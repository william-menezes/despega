/* function openDropdown() {
  document.getElementById("navbarDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  console.log("function");
  if (!event.target.matches("#navbarToggle")) {
    console.log("inside first if");
    var dropdowns = document.getElementById("navbarDropdown");
    console.log(dropdowns);
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      console.log("inside for");
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        console.log("inside second if");
        openDropdown.classList.remove("show");
      }
    }
  }
};
 */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("open");
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

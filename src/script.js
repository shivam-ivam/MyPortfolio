// ------- side bar open and close functioning 

function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }

  function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }

// -------------------------------

// contact drop down 

function contactDrop(){
  document.querySelector(".contact-drop-box").classList.toggle("drop-down");
}
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

// timeline cards drop down work
function timelineColap(params) {
  const cards = document.querySelectorAll(".timeline-card");
  cards[params].classList.toggle("timeline-card-uncolapse");
  
}
/* Toggle menu open/close */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};


function openModal(imgSrc) {
  document.getElementById("certModal").style.display = "block";
  document.getElementById("modalImg").src = imgSrc;
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

/* Optional: close modal with ESC key */
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

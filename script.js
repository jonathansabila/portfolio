
let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};


const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeModal");

// Open modal
document.querySelectorAll(".certificates-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("show");
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
    modalImg.style.transform = "scale(1)"; // reset zoom
  });
});

let zoomed = false;


// Close when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// ESC key support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});

/* Toggle menu open/close */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};


const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeModal");

// Attach click event to all certificate images
document.querySelectorAll(".certificates-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";   // show modal
    modalImg.src = img.src;         // set image
    modalCaption.textContent = img.alt; // caption from alt text
  });
});

let zoomed = false;

modalImg.addEventListener("click", () => {
  if (!zoomed) {
    modalImg.style.transform = "scale(1.5)";
    zoomed = true;
  } else {
    modalImg.style.transform = "scale(1)";
    zoomed = false;
  }
});

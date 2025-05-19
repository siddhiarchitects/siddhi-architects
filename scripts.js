// Section titles and their links
const sections = [
  { title: "BOOK FREE CONSULTATION", link: "book-consultation.html" },
  { title: "CALCULATE NOW", link: "price-calculator.html" },
  { title: "VISIT US", link: "visit-us.html" }
];

let currentIndex = 0;

// Updates the hero section text and button link
function updateSection() {
  const section = sections[currentIndex];
  const heroTitle = document.getElementById("heroTitle");
  const heroButton = document.getElementById("heroButton");

  if (heroTitle && heroButton) {
    heroTitle.innerText = section.title;
    heroButton.innerText = section.title;
    heroButton.href = section.link;
  }
}

// Cycles to the next section
function cycleSection() {
  currentIndex = (currentIndex + 1) % sections.length;
  updateSection();
}

// Goes back to the previous section
function previousSection() {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  updateSection();
}

// Toggles a dropdown menu
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const allDropdowns = document.querySelectorAll('.dropdown-content');

  allDropdowns.forEach(el => {
    if (el.id !== id) el.classList.remove('show');
  });

  if (dropdown) {
    dropdown.classList.toggle('show');
  }
}

// Closes all dropdowns when clicking outside
window.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(el => el.classList.remove('show'));
  }
});

// Initialize the hero section on page load
document.addEventListener("DOMContentLoaded", updateSection);

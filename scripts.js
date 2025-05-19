const sections = [
  { title: "Book Free Consultation", link: "book-consultation.html" },
  { title: "Calculate Now", link: "price-calculator.html" },
  { title: "Visit Us", link: "visit-us.html" }
];
let currentIndex = 0;

function updateSection() {
  const section = sections[currentIndex];
  document.getElementById("heroTitle").innerText = section.title;
  document.getElementById("heroButton").innerText = section.title;
  document.getElementById("heroButton").href = section.link;
}

function cycleSection() {
  currentIndex = (currentIndex + 1) % sections.length;
  updateSection();
}

function previousSection() {
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;
  updateSection();
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const allDropdowns = document.querySelectorAll('.dropdown-content');
  allDropdowns.forEach(el => {
    if (el.id !== id) el.classList.remove('show');
  });
  dropdown.classList.toggle('show');
}

window.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(el => el.classList.remove('show'));
  }
});

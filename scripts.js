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

<script>
  const slideData = [
    {
      text: "BOOK FREE CONSULTATION",
      link: "book-consultation.html"
    },
    {
      text: "CALCULATE NOW",
      link: "price-calculator.html"
    },
    {
      text: "VISIT US",
      link: "#contact"
    }
  ];

  let currentIndex = 0;

  function updateButton(animated = true) {
    const btn = document.getElementById("slideButton");
    const title = document.getElementById("heroTitle");

    if (animated) {
      btn.style.opacity = 0;
      title.style.opacity = 0;

      setTimeout(() => {
        const data = slideData[currentIndex];
        btn.textContent = data.text;
        btn.href = data.link;
        btn.style.backgroundColor = 'lightcoral';
        title.textContent = data.text;
        btn.style.opacity = 1;
        title.style.opacity = 1;
        updateDots();
      }, 300);
    } else {
      const data = slideData[currentIndex];
      btn.textContent = data.text;
      btn.href = data.link;
      btn.style.backgroundColor = 'lightcoral';
      title.textContent = data.text;
      updateDots();
    }
  }

  function nextButton() {
    currentIndex = (currentIndex + 1) % slideData.length;
    updateButton();
  }

  function prevButton() {
    currentIndex = (currentIndex - 1 + slideData.length) % slideData.length;
    updateButton();
  }

  function updateDots() {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
      dot.style.opacity = index === currentIndex ? '1' : '0.5';
      dot.style.transform = index === currentIndex ? 'scale(1.2)' : 'scale(1)';
    });
  }

  function createDots() {
    const container = document.getElementById('dotContainer');
    container.innerHTML = '';
    slideData.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'slide-dot';
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateButton();
      });
      container.appendChild(dot);
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    createDots();
    updateButton(false);
    // Auto-slide removed
  });
</script>

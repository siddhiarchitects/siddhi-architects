        }, 300);
      } else {
        const data = slideData[currentIndex];
        btn.textContent = data.text;
        btn.href = data.link;
        title.textContent = data.text;
        updateDots();
      }
    }

    function nextButton() {
      currentIndex = (currentIndex + 1) % slideData.length;
      updateButton();
    }

    function createDots() {
      const dotContainer = document.getElementById("dotContainer");
      slideData.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("slide-dot");
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateButton();
        });
        dotContainer.appendChild(dot);
      });
    }

    function updateDots() {
      const dots = document.querySelectorAll(".slide-dot");
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.style.transform = "scale(1.5)";
          dot.style.opacity = "1";
        } else {
          dot.style.transform = "scale(1)";
          dot.style.opacity = "0.5";
        }
      });
    }

    // Initialize
    window.onload = function () {
      createDots();
      updateButton(false);
    };
  </script>
</body>
</html>

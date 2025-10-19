document.addEventListener("DOMContentLoaded", function () {
      const carrusel = document.getElementById("miCarrusel");
      const items = carrusel.querySelectorAll(".carrusel-item");
      const prevButton = carrusel.querySelector(".carrusel-prev");
      const nextButton = carrusel.querySelector(".carrusel-next");
      let currentIndex = 0;
      const intervalTime = 5000; // 5 segundos para auto-avance
      let carruselInterval;

      function showItem(index) {
        items[currentIndex].classList.remove("activo");
        if (index >= items.length) {
          currentIndex = 0;
        } else if (index < 0) {
          currentIndex = items.length - 1;
        } else {
          currentIndex = index;
        }
        items[currentIndex].classList.add("activo");
      }

      function move(direction) {
        let newIndex = currentIndex;
        if (direction === "next") {
          newIndex++;
        } else if (direction === "prev") {
          newIndex--;
        }
        showItem(newIndex);
        resetInterval();
      }

      // --- Funcionalidad de Auto-Avance ---
      function startInterval() {
        carruselInterval = setInterval(function () {
          move("next");
        }, intervalTime);
      }

      function resetInterval() {
        clearInterval(carruselInterval);
        startInterval();
      }

      // --- Event Listeners para los botones ---
      prevButton.addEventListener("click", function () {
        move("prev");
      });

      nextButton.addEventListener("click", function () {
        move("next");
      });

      // Iniciar el carrusel
      startInterval();
    });
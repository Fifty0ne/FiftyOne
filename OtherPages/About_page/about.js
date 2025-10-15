document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".listcontainer .menu-item");
    const overlay = document.querySelector(".nav-overlay");

    // Find "Contact Us" item as default
    let activeItem = Array.from(menuItems).find(item => item.textContent.trim() === "Contact Us");

    function moveOverlay(target) {
        const rect = target.getBoundingClientRect();
        const containerRect = target.parentElement.parentElement.getBoundingClientRect();
        overlay.style.width = rect.width + "px";
        overlay.style.left = (rect.left - containerRect.left) + "px";
    }

    // Set overlay under Contact Us by default
    if (activeItem) moveOverlay(activeItem);

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => moveOverlay(item));
        item.addEventListener("mouseleave", () => moveOverlay(activeItem));
        item.addEventListener("click", (e) => {
            // e.preventDefault();
            activeItem = item;
            moveOverlay(activeItem);
        });
    });
});

const triangles = document.querySelectorAll(".triangle");

function animateTriangle(triangle, delay) {
  setTimeout(() => {
    triangle.style.opacity = "1";
    triangle.style.animation = "rotateZoom 5s ease-in forwards";
  }, delay);
}

animateTriangle(triangles[0], 0);
animateTriangle(triangles[1], 1000);
animateTriangle(triangles[2], 1500);


// Mobile accordion toggle
document.querySelectorAll(".mobile-service-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    header.classList.toggle("active");

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      // close others
      document.querySelectorAll(".mobile-service-content").forEach(c => (c.style.display = "none"));
      document.querySelectorAll(".mobile-service-header").forEach(h => h.classList.remove("active"));
      header.classList.add("active");
      content.style.display = "block";
    }
  });
});


// Mobile fullscreen menu toggle
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".listcontainer");

if (hamburger && navList) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("show");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".listcontainer a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navList.classList.remove("show");
    });
  });
}


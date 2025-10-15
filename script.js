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

const buttons = document.querySelectorAll(".services-btn");
const aboutServiceTitle = document.getElementById("about-service-title");
const serviceExplorebtn = document.getElementById("service-explore-btn");
const serviceShowImg = document.getElementById("service-show-img");
const serviceDetail = document.querySelector(".service-content-text p")

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active from all
    buttons.forEach(b => b.classList.remove("mark2"));
    // add active to clicked one
    btn.classList.add("mark2");
    aboutServiceTitle.innerText = btn.innerText;
    serviceExplorebtn.innerHTML = "Explore" +" "+ btn.innerText + `<img src="Imgs/icons/icons8-arrow-32.png" alt="">`;
    if (btn.innerText === "Creative Web Design"){
      serviceShowImg.src = "Imgs/Photos/ServiceShowImg/ServiceshowImg1.avif"
      serviceDetail.innerText = "We craft visually stunning, user-friendly websites that represent your brand and attract your customers. Every design is unique, modern, and tailored to your business goals.";
      serviceExplorebtn.href = "OtherPages/Services_page/services.html#creative-web-design";
    }
    if (btn.innerText === "Functional Development"){
      serviceShowImg.src = "Imgs/Photos/ServiceShowImg/ServiceshowImg2.avif"
      serviceDetail.innerText = "Beyond looks, we build websites that work. From online ordering to table reservations, our solutions are fast, secure, and tailored to your needs.";
      serviceExplorebtn.href = "OtherPages/Services_page/services.html#functional-development";
    }
    if (btn.innerText === "Premium Advanced Solutions"){
      serviceShowImg.src = "Imgs/Photos/ServiceShowImg/ServiceshowImg3.avif"
      serviceDetail.innerText = "For businesses that want to stand out, we create high-end websites with interactive animations, seamless e-commerce, and advanced features that deliver a premium user experience.";
      serviceExplorebtn.href = "OtherPages/Services_page/services.html#premium-advanced-solutions";
    }
    if (btn.innerText === "SEO & Growth Marketing"){
      serviceShowImg.src = "Imgs/Photos/ServiceShowImg/ServiceshowImg4.avif"
      serviceDetail.innerText = "A great website needs visibility. Our SEO and digital marketing strategies help you rank higher, attract more visitors, and turn them into loyal customers.";
      serviceExplorebtn.href = "OtherPages/Services_page/services.html#seo-marketing";
    }
  });
});

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


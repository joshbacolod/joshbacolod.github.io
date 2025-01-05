function myPopup(certificateId) {
    var imgSrc = ""

    document.querySelector(".popup").style.display = "block";
    switch(certificateId) {
      case "comptia":
        imgSrc = "certificates/comptia-certificate.jpg";
        break;
      case "azure":
        imgSrc = "certificates/azure-fundamentals.jpg";
        break;
      case "ms365":
      imgSrc = "certificates/ms365-fundamentals.jpg";
        break;
    }
    document.querySelector(".popup img").src = imgSrc;
  }

function closePopup() {
  document.querySelector(".popup").style.display = "none";
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        };
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))

let lastScrollY = 0
const navbar = document.querySelector(".header__items")

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }
    lastScrollY = window.scrollY  
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
    closePopup();
  }
})


console.log("test")
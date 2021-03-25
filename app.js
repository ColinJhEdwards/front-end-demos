// --------------Main Slide-----------------
const mainSlide = document.querySelector(".main-slide");

function animateSlide() {
  const slideTl = gsap.timeline({
    defaults: { duration: 3, ease: "power2.inOut", delay: 0 },
  });

  slideTl.fromTo(mainSlide, { x: "0%" }, { x: "100%" });
}

animateSlide();
// --------------Main Slide-----------------

//-----------------------3D Animation---------------------------
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Animate items
const title = document.querySelector(".title");
const guitar = document.querySelector(".guitar img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const guitarBtns = document.querySelectorAll(".sizes button");
console.log(guitarBtns);

//Changing displayed guitar
guitarBtns[0].addEventListener("click", () => {
  guitarBtns[1].classList.remove("active");
  guitarBtns[2].classList.remove("active");
  guitarBtns[3].classList.remove("active");
  guitarBtns[0].classList.add("active");
  guitar.src = "./images/guitar.png";
});
guitarBtns[1].addEventListener("click", () => {
  guitarBtns[0].classList.remove("active");
  guitarBtns[2].classList.remove("active");
  guitarBtns[3].classList.remove("active");
  guitarBtns[1].classList.add("active");
  guitar.src = "./images/black.png";
});
guitarBtns[2].addEventListener("click", () => {
  guitarBtns[0].classList.remove("active");
  guitarBtns[1].classList.remove("active");
  guitarBtns[3].classList.remove("active");
  guitarBtns[2].classList.add("active");
  guitar.src = "./images/red.png";
});
guitarBtns[3].addEventListener("click", () => {
  guitarBtns[0].classList.remove("active");
  guitarBtns[1].classList.remove("active");
  guitarBtns[2].classList.remove("active");
  guitarBtns[3].classList.add("active");
  guitar.src = "./images/natural.png";
});

//moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 1 - e.pageY) / 50;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Snap card back into place
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  guitar.style.transform = "translateZ(150px)";
  sizes.style.transform = "translateZ(100px)";
  description.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(100px)";
});
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  guitar.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

//-----------------------image Slider---------------------------

const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");
const container1 = document.querySelector(".container1");

const drag = (e) => {
  let xPos = e.layerX;
  let size = container1.offsetWidth;
  before.style.width = xPos + "px";
  slider.style.left = xPos + "px";

  if (xPos < 50) {
    before.style.width = 0;
    slider.style.left = 0;
  }
  if (xPos + 50 > size) {
    before.style.width = size + "px";
    slider.style.left = size + "px";
  }
};

container1.addEventListener("mousemove", drag);

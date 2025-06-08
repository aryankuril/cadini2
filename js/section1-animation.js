gsap.registerPlugin(ScrollTrigger);

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

// Smooth Scroll to Second Section
document.querySelector('.scroll-container').addEventListener('click', () => {
  document.querySelector('.white-overlay').scrollIntoView({
    behavior: 'smooth'
  }); 
});



function positionBottleCapOnBottle() {
  const bottleWithoutCap = document.getElementById("bottle-without-cap");
  const section1Title = document.getElementById("section-1-title");


  bottleWithoutCap.style.bottom = isMobile() ? "15%" : "5%";

}


// Debounce function to limit how often resize handler is called
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;

const handleSafeResize = debounce(() => {
  if (
    Math.abs(window.innerWidth - lastWidth) > 100 ||
    Math.abs(window.innerHeight - lastHeight) > 200
  ) {
    lastWidth = window.innerWidth;
    lastHeight = window.innerHeight;
    positionBottleCapOnBottle();
    ScrollTrigger.refresh();
  }
}, 500);

window.addEventListener("resize", handleSafeResize);


const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-1",
    start: "50% 50%",
    end: "bottom -200%",
    scrub: true,
    // markers: true,
    pin: true,
    onEnter: positionBottleCapOnBottle,
    onToggle: function (self) {
      if (self.isActive) {
        positionBottleCapOnBottle();
      }
    },
  },
});



tl1.to(
  "#section-1-title",
  {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: "power2.inOut",
  },
  "tl1"
);

tl1.to(
  "#bottle-without-cap",
  {
    yPercent: 10,
    duration: 0.3,
  },
  "tl1"
);

tl1.to(
  "#section-1-title",
  {
    opacity: 1,
    scale: 1,
    duration: 0.3,
  },
  "tl1"
);




tl1.to(
  "#section-1",
  {
    backgroundPositionY: "-100%",
    duration: 0.7,
    ease: "power1.inOut",
  },
  "tl1.1"
);

tl1.to(
  "#section-1-title",
  {
    color: "#000",
    duration: 0.7,
    ease: "power2.inOut",
  },
  "tl1.1"
);

tl1.to(
  "#white-overlay",
  {
    bottom: "0%",
    duration: 0.7,
    ease: "power1.inOut",
  },
  "tl1.1"
);



tl1.to(
  "#section-1-title",
  {
    opacity: 0,
    scale: 0,
    duration: 0.2,
    ease: "power2.inOut",
  },
  "tl1.1"
);



tl1.to(
  "#bottle-without-cap",
  {
    yPercent: 0,
    duration: 0.3,
  },
  "tl1.1"
);

tl1.to(
  "#section-1-title-1",
  {
    opacity: 1,
    translateX: "0%",
    duration: 0.7,
  },
  "tl1.2"
);

tl1.to(
  "#section-1-title-2",
  {
    opacity: 1,
    translateX: "0%",
    duration: 0.7,
  },
  "tl1.2"
);

tl1.to(
  "#section-1-title-3",
  {
    opacity: 1,
    translateX: "0%",
    duration: 0.7,
  },
  "tl1.2"
);


// navbar animation
// ✅ Initial state setup
gsap.set(".navbar-logo", { scale: 0, opacity: 0 });
gsap.set(".navbar", { y: -100, opacity: 0 });
gsap.set(".hero-text", { scale: 1, y: 0, opacity: 1 });

// 🎯 ScrollTrigger-based animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
})
.to(".hero-text", {
  scale: 0.4,     // Shrink down more before fade
  y: -200,        // Move upward smoothly
  ease: "power2.out"
})
.to(".hero-text", {
  opacity: 0,     // Now fade after scale/move
  y: -250,        // Slight extra movement up
  ease: "power2.out"
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top+=500 top",
    end: "top+=700 top",
    scrub: true
  }
})
.to(".navbar", {
  y: 0,
  opacity: 1,
  ease: "power2.out"
})
.to(".navbar-logo", {
  scale: 1,
  opacity: 1,
   ease: "power2.out" 
}, "<"); // Sync logo animation with navbar



 
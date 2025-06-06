gsap.registerPlugin(ScrollTrigger);

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function positionBottleCapOnBottle() {
  const bottleWithoutCap = document.getElementById("bottle-without-cap");
  const bottleCap = document.getElementById("bottle-cap");
  const section1Title = document.getElementById("section-1-title");
  const section1Button = document.getElementById("section-1-button");

  bottleWithoutCap.style.bottom = isMobile() ? "15%" : "5%";

  if (bottleWithoutCap && bottleCap && section1Title) {
    const bottleRect = bottleWithoutCap.getBoundingClientRect();
    const bottleCapRect = bottleCap.getBoundingClientRect();

    const bottleCapHeight = bottleCapRect.height;

    const bottleTop = bottleRect.top;

    bottleCap.style.bottom = `calc(100% - ${bottleTop}px - ${bottleCapHeight}px + 10px)`;
    bottleCap.style.top = "auto";
    section1Title.style.bottom = `calc(100% - ${bottleTop}px - ${bottleCapHeight}px + ${
      isMobile() ? "100px" : "120px"
    })`;
    section1Title.style.top = "auto";

    section1Button.style.bottom = `calc(100% - ${bottleTop}px - ${bottleCapHeight}px + ${
      isMobile() ? "70px" : "100px"
    })`;
    section1Button.style.top = "auto";
  }
}

window.addEventListener("load", positionBottleCapOnBottle);

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

window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    positionBottleCapOnBottle();
    ScrollTrigger.refresh();
  }, 300);
});

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

// Starting animation
tl1.to(
  "#bottle-cap",
  {
    yPercent: isMobile() ? -180 : -150,
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
  "#section-1-button",
  {
    opacity: 1,
    scale: 1,
    duration: 0.3,
  },
  "tl1"
);

tl1.to(
  {},
  {
    duration: 0.5,
  }
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
  "#bottle-cap",
  {
    yPercent: 0,
    duration: 0.3,
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
  "#section-1-button",
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

const leftBarEl = document.querySelector(".left-bar");

const btnNavEl = document.querySelector(".nav-btn");

const bodyEl = document.querySelector("body");

const asideNavAnchor = document.querySelector(".aside-nav-a");

const mobileBtnEl = document.querySelector(".mobile-btn");

mobileBtnEl.addEventListener("click", function () {
  bodyEl.classList.toggle("nav-open");
});

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("nav-open");
});

// smooth scrolling

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (
      !link.classList.contains("cta-btn") &&
      !link.classList.contains("social-icon-a")
    ) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll back to the top //
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({
          behavior: "smooth",
        });
      }
      if (link.classList.contains("aside-nav-a")) {
        bodyEl.classList.toggle("nav-open");
      }
    }
  });
});

// Changing the page number and section as you scroll

const currentPageEl = document.querySelector(".current-page");
const currentSectionEl = document.querySelector(".current-section-bar");

const sectionHeroEl = document.querySelector(".pageholder");
const sectionAboutEl = document.querySelector(".section-about");
const sectionProjectsEl = document.querySelector(".el");
const sectionCtaEl = document.querySelector(".section-cta");

const observerOne = new IntersectionObserver(
  function (entries) {
    const entOne = entries[0];

    if (entOne.isIntersecting === true) {
      currentPageEl.textContent = "01";
      currentSectionEl.textContent = "[hero]";
    }
  },
  {
    root: null,
    threshold: 0.5,
  }
);

const observerTwo = new IntersectionObserver(
  function (entries) {
    const entTwo = entries[0];

    if (entTwo.isIntersecting === true) {
      currentPageEl.textContent = "02";
      currentSectionEl.textContent = "[about]";
    }
  },
  {
    root: null,
    threshold: 0.1,
  }
);

const observerThree = new IntersectionObserver(
  function (entries) {
    const entThree = entries[0];

    if (entThree.isIntersecting === true) {
      currentPageEl.textContent = "03";
      currentSectionEl.textContent = "[projects]";
    }
  },
  {
    root: null,
    threshold: 0.1,
  }
);

const observerFour = new IntersectionObserver(
  function (entries) {
    const entFour = entries[0];

    if (entFour.isIntersecting === true) {
      currentPageEl.textContent = "04";
      currentSectionEl.textContent = "[cta]";
    }
  },
  {
    root: null,
    threshold: 0.5,
  }
);

observerOne.observe(sectionHeroEl);
observerTwo.observe(sectionAboutEl);
observerThree.observe(sectionProjectsEl);
observerFour.observe(sectionCtaEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// DARK MODE

const darkModeEl = document.querySelector(".dark-mode-btn");

darkModeEl.addEventListener("click", function () {
  bodyEl.classList.toggle("dark");
  if (!bodyEl.classList.contains("dark")) {
    darkModeEl.style.backgroundColor = "#111";
  } else {
    darkModeEl.style.backgroundColor = "#f1f2ee";
  }
});

const darkModeMobileEl = document.querySelector(".mobile-dark-mode-btn");

darkModeMobileEl.addEventListener("click", function () {
  bodyEl.classList.toggle("dark");
  if (!bodyEl.classList.contains("dark")) {
    darkModeEl.style.backgroundColor = "#111";
  } else {
    darkModeEl.style.backgroundColor = "#f1f2ee";
  }
});

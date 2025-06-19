document.addEventListener("DOMContentLoaded", () => {
  // --- Tab Functionality ---
  const tablinks = document.querySelectorAll(".tab-links");
  const tabcontents = document.querySelectorAll(".tab-contents");

  tablinks.forEach(link => {
    link.addEventListener("click", event => {
      const tabname = link.getAttribute("data-tab");

      tablinks.forEach(tab => tab.classList.remove("active-link"));
      tabcontents.forEach(tab => tab.classList.remove("active-tab"));

      link.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    });
  });

  // --- Mobile Menu Toggle ---
  const sidemenu = document.getElementById("sidemenu");
  const openMenuIcon = document.getElementById("open-menu");
  const closeMenuIcon = document.getElementById("close-menu");

  openMenuIcon.addEventListener("click", () => {
    sidemenu.style.right = "0";
  });

  closeMenuIcon.addEventListener("click", () => {
    sidemenu.style.right = "-200px";
  });

  // --- Contact Form Submission ---
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwGYnPitoPOSMyzvC_X24HjheCKrOprq7AFEkqPaEJvJpgyhr_2JXssIqFeyzv5Nam9ng/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(() => {
          msg.innerHTML = "Message sent successfully :)";
          setTimeout(() => (msg.innerHTML = ""), 6000);
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }

  // --- Sticky Navbar ---
  const nav = document.querySelector("#main");
  const topOfNav = nav.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + "px";
      document.body.classList.add("fixed-nav");
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    }
  }

  window.addEventListener("scroll", fixNav);
});

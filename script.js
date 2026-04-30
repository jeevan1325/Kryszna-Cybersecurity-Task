document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const icon = document.getElementById("hamburger-icon");
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawerOverlay");

  // Open / Close Menu
  hamburger.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    overlay.classList.toggle("open");

    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-xmark", isOpen);

    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close when clicking outside
  overlay.addEventListener("click", () => {
    drawer.classList.remove("open");
    overlay.classList.remove("open");

    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");

    document.body.style.overflow = "";
  });
});


// Mobile Accordion
function toggleD(item) {
  const alreadyOpen = item.classList.contains("d-open");

  document.querySelectorAll(".d-item").forEach(el => {
    el.classList.remove("d-open");
  });

  if (!alreadyOpen) {
    item.classList.add("d-open");
  }
}


// Nested Accordion
function toggleDA(header) {
  const body = header.nextElementSibling;
  const parent = header.parentElement;
  const alreadyOpen = header.classList.contains("da-open");

  // close all
  parent.querySelectorAll(".d-acc-hd, .d-acc-bd").forEach(el => {
    el.classList.remove("da-open");
  });

  // open clicked
  if (!alreadyOpen) {
    header.classList.add("da-open");
    body.classList.add("da-open");
  }
}


// Desktop Accordion
function toggleAcc(header) {
  const body = header.nextElementSibling;
  const wrapper = header.closest(".dropdown-accordion");
  const alreadyOpen = header.classList.contains("open");

  // close all
  wrapper.querySelectorAll(".acc-header").forEach(h => {
    h.classList.remove("open");
    const arrow = h.querySelector(".acc-arrow");
    arrow.classList.remove("fa-chevron-up");
    arrow.classList.add("fa-chevron-down");
  });

  wrapper.querySelectorAll(".acc-body").forEach(b => {
    b.classList.remove("open");
  });

  // open clicked
  if (!alreadyOpen) {
    header.classList.add("open");

    const arrow = header.querySelector(".acc-arrow");
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-up");

    body.classList.add("open");
  }
}
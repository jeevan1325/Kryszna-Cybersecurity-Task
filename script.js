/* ── Elements ───────────────────────── */
const hamburger = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger-icon");
const drawer = document.getElementById("drawer");

/* ── Open / close drawer ────────────── */
hamburger.addEventListener("click", function () {
  const isOpen = drawer.classList.toggle("open");
  if (isOpen) {
    hamburgerIcon.classList.replace("fa-bars", "fa-xmark");
    document.body.style.overflow = "hidden";
  } else {
    hamburgerIcon.classList.replace("fa-xmark", "fa-bars");
    document.body.style.overflow = "";
  }
});

/* ── Mobile main accordion ──────────── */
function toggleD(item) {
  const isOpen = item.classList.contains("d-open");
  item.parentElement.querySelectorAll(".d-item.d-open").forEach(function (el) {
    el.classList.remove("d-open");
  });
  if (!isOpen) item.classList.add("d-open");
}

/* ── Mobile nested location accordion ── */
function toggleDA(hd) {
  const bd = hd.nextElementSibling;
  const isOpen = hd.classList.contains("da-open");
  const parent = hd.parentElement;
  parent.querySelectorAll(".d-acc-hd").forEach(function (h) {
    h.classList.remove("da-open");
  });
  parent.querySelectorAll(".d-acc-bd").forEach(function (b) {
    b.classList.remove("da-open");
  });
  if (!isOpen) {
    hd.classList.add("da-open");
    bd.classList.add("da-open");
  }
}

/* ── Desktop location accordion ──────── */
function toggleAcc(header) {
  const body = header.nextElementSibling;
  const isOpen = header.classList.contains("open");
  const wrap = header.closest(".dropdown-accordion");

  // close all first
  wrap.querySelectorAll(".acc-header").forEach(function (h) {
    h.classList.remove("open");
    var arr = h.querySelector(".acc-arrow");
    arr.classList.remove("fa-chevron-up");
    arr.classList.add("fa-chevron-down");
  });
  wrap.querySelectorAll(".acc-body").forEach(function (b) {
    b.classList.remove("open");
  });

  // open clicked one
  if (!isOpen) {
    header.classList.add("open");
    var arr = header.querySelector(".acc-arrow");
    arr.classList.remove("fa-chevron-down");
    arr.classList.add("fa-chevron-up");
    body.classList.add("open");
  }
}

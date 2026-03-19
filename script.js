let collapsed = false;

function enterSite() {
  document.getElementById("landing").classList.add("fade-out");

  setTimeout(() => {
    document.getElementById("landing").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  }, 500);
}

function toggleDark() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function expandCategory() {
  collapsed = false;
  document.getElementById("categoryScroll").style.display = "flex";
  document.getElementById("collapseBtn").style.display = "none";
}

/* COLLAPSE giống React */
document.getElementById("content")?.addEventListener("scroll", () => {
  const scroll = document.getElementById("content").scrollTop;

  if (scroll > 200 && !collapsed) {
    collapsed = true;

    document.getElementById("categoryScroll").style.display = "none";
    document.getElementById("collapseBtn").style.display = "block";
  }

  if (scroll < 100 && collapsed) {
    collapsed = false;

    document.getElementById("categoryScroll").style.display = "flex";
    document.getElementById("collapseBtn").style.display = "none";
  }
});
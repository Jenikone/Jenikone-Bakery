const track = document.getElementById("track");
const grid = document.getElementById("adoptableGrid");

const categories = [
  "🍓 Strawberry",
  "🍵 Matcha",
  "🍫 Chocolate",
  "🎄 Seasonal",
  "🫐 Blueberry",
  "🍰 Limited"
];

let currentIndex = 4;

// tạo item
function createItem(text) {
  const div = document.createElement("div");
  div.className = "curtain-item";
  div.textContent = text;

  // hover → phóng to lại
  div.addEventListener("mouseenter", () => {
    div.classList.remove("collapsed");
  });

  div.addEventListener("mouseleave", () => {
    if (div.dataset.collapsed === "true") {
      div.classList.add("collapsed");
    }
  });

  return div;
}

// INIT
function initCurtain() {
  track.innerHTML = "";
  currentIndex = 4;

  categories.slice(0, 4).forEach(c => {
    track.appendChild(createItem(c));
  });
}

initCurtain();

// SHIFT RÈM (giới hạn 6 item)
function shiftRight() {
  const items = document.querySelectorAll(".curtain-item");

  if (items.length >= 6) return; // ⭐ giới hạn

  const first = items[0];
  first.classList.add("collapsed");
  first.dataset.collapsed = "true";

  const newItem = createItem(categories[currentIndex]);
  track.appendChild(newItem);

  currentIndex++;
}

// hover kéo
track.addEventListener("mousemove", (e) => {
  const rect = track.getBoundingClientRect();
  const x = e.clientX - rect.left;

  if (x > rect.width - 100) {
    shiftRight();
  }
});

// SWITCH TAB
function switchTab(e) {
  document.querySelectorAll("aside button").forEach(btn => {
    btn.classList.remove("active");
  });

  if (e) e.target.classList.add("active");

  // reset curtain
  initCurtain();

  // hiện grid nếu adoptable
  if (e && e.target.textContent.includes("Adoptable")) {
    grid.classList.remove("hidden");
  } else {
    grid.classList.add("hidden");
  }
}

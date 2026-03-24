const track = document.getElementById("track");
const sound = document.getElementById("slideSound");

const categories = [
  "🍓 Strawberry",
  "🍵 Matcha",
  "🍫 Chocolate",
  "🎄 Seasonal",
  "🫐 Blueberry",
  "🍰 Limited"
];

// Tạo item
function createItem(text) {
  const div = document.createElement("div");
  div.className = "curtain-item";
  div.textContent = text;
  return div;
}

// INIT
categories.slice(0,4).forEach(c => {
  track.appendChild(createItem(c));
});

// SHIFT RÈM
function shiftRight() {
  const items = document.querySelectorAll(".curtain-item");

  if (!items.length) return;

  // A thu nhỏ
  items[0].classList.add("collapsed");

  // thêm item mới
  const newItem = createItem(
    categories[Math.floor(Math.random() * categories.length)]
  );

  track.appendChild(newItem);

  // phát sound
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(()=>{});
  }
}

// HOVER → kéo rèm
track.addEventListener("mousemove", (e) => {
  const rect = track.getBoundingClientRect();
  const x = e.clientX - rect.left;

  if (x > rect.width - 120) {
    shiftRight();
  }
});

// SWITCH TAB → đóng rèm
function switchTab() {
  track.style.transform = "translateY(-120%)";

  setTimeout(() => {
    track.innerHTML = "";
    categories.slice(0,4).forEach(c => {
      track.appendChild(createItem(c));
    });

    track.style.transform = "translateY(0)";
  }, 500);
}
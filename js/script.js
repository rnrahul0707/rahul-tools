const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const chips = document.querySelectorAll(".chip");
const cards = Array.from(document.querySelectorAll(".card"));

let activeFilter = "all";

function applyFilters(){
  const q = (searchInput.value || "").toLowerCase().trim();

  cards.forEach(card => {
    const text = (card.innerText || "").toLowerCase();
    const tags = (card.getAttribute("data-tags") || "").toLowerCase();

    const matchSearch = !q || text.includes(q) || tags.includes(q);
    const matchChip = (activeFilter === "all") || tags.includes(activeFilter);

    card.style.display = (matchSearch && matchChip) ? "block" : "none";
  });
}

searchInput?.addEventListener("input", applyFilters);

clearBtn?.addEventListener("click", () => {
  searchInput.value = "";
  applyFilters();
});

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter;
    applyFilters();
  });
});

applyFilters();
// SAVE scroll position before leaving page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPos", window.scrollY);
});

// RESTORE scroll position when coming back
window.addEventListener("load", () => {
  const scrollPos = localStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos));
  }
});


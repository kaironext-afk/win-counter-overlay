let lastCurrent = null;
let lastLongest = null;

async function loadStreak() {
    const module = await import("./wins.js?nocache=" + Math.random());

    const current = module.currentStreak;
    const longest = module.longestStreak;

    const currentEl = document.getElementById("currentValue");
    const longestEl = document.getElementById("longestValue");

    // Aggiorna current streak
    if (current !== lastCurrent) {
        currentEl.textContent = `${current}/50`;
        currentEl.classList.remove("animate-pop");
        void currentEl.offsetWidth;
        currentEl.classList.add("animate-pop");
        lastCurrent = current;
    }

    // Aggiorna longest streak
    if (longest !== lastLongest) {
        longestEl.textContent = `${longest}/50`;
        longestEl.classList.remove("animate-pop");
        void longestEl.offsetWidth;
        longestEl.classList.add("animate-pop");
        lastLongest = longest;
    }
}

loadStreak();
setInterval(loadStreak, 1000);
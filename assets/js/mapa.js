const tooltip = document.getElementById("tooltip");
const overlay = document.getElementById("overlay");

const img = document.getElementById("tooltip-img");
const title = document.getElementById("tooltip-title");
const text = document.getElementById("tooltip-text");

document.querySelectorAll(".zona").forEach(zona => {
    zona.addEventListener("click", () => {
        img.src = zona.dataset.img;
        title.textContent = zona.dataset.title;
        text.textContent = zona.dataset.text;

        tooltip.classList.add("show");
        overlay.style.display = "block";
    });
});

document.getElementById("close").onclick = cerrar;
overlay.onclick = cerrar;

function cerrar() {
    tooltip.classList.remove("show");
    overlay.style.display = "none";
}

const infoBtn = document.getElementById("infoBtn");
const infoModal = document.getElementById("infoModal");
const infoClose = document.getElementById("infoClose");

infoBtn.onclick = () => {
    infoModal.style.display = "block";
};

infoClose.onclick = () => {
    infoModal.style.display = "none";
};

infoModal.onclick = (e) => {
    if (e.target === infoModal) {
        infoModal.style.display = "none";
    }
};

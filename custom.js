function toggleList(button) {
    const card = button.closest(".card");
    const list = card.querySelector(".expandable-list");

    list.classList.toggle("expanded");

    button.textContent = list.classList.contains("expanded")
        ? "Ver menos"
        : "Ver mais";
}

function filterVillage(village) {
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".village-btn");

    // update active button
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    cards.forEach(card => {
        const cardVillage = card.dataset.village;

        if (village === "all" || cardVillage === village || cardVillage === "all") {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".about-template-toggle");

    toggles.forEach((toggle) => {
        const item = toggle.closest(".about-template-item");
        if (!item) return;

        const detail = item.querySelector(".about-template-detail");
        if (!detail) {
            toggle.disabled = true;
            toggle.setAttribute("aria-hidden", "true");
            return;
        }

        toggle.addEventListener("click", () => {
            const isOpen = item.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            detail.hidden = !isOpen;
        });
    });
});

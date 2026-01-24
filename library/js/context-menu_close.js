document.addEventListener("DOMContentLoaded", () => {
    const contextMenu = document.getElementById("context-menu");
    const manageBtn = document.getElementById("manage-cookies");
    const acceptBtn = document.getElementById("accept-cookies");

    function closeMenu() {
        contextMenu.classList.add("close");
    }

    manageBtn.addEventListener("click", closeMenu);
    acceptBtn.addEventListener("click", closeMenu);
});
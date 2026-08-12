function openModal(img) {
    const modal = document.getElementById("Modal");
    const modalImg = document.getElementById("img");

    modalImg.src = img.src;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        modal.classList.add("show");
        modalImg.classList.add("show");
    }, 10);
}

function closeModal(event) {
    const modal = document.getElementById("Modal");
    const modalImg = document.getElementById("img");
    const closeButton = document.querySelector(".close");

    if (
        event.target !== modal &&
        event.target !== closeButton &&
        event.target !== modalImg
    ) return;

    modal.classList.remove("show");
    modalImg.classList.remove("show");

    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }, 500);
}

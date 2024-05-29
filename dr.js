const boxes = document.querySelectorAll(".box"),
image = document.querySelector(".image");

boxes.forEach(box => {
    box.addEventListener("dragover", e => {
        e.preventDefault();
        box.classList.add("hoverd");
    });
    box.addEventListener("dragleave", () => {
        box.classList.remove("hoverd");
    });
    box.addEventListener("drop", () =>{
        box.appendChild(image);
    })
})
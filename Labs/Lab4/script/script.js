// Завдання 1
let toggle7 = false;
let toggle8 = false;

// (126 mod 10)+1 = 7
let el7 = document.getElementById("el7");
let el8 = document.querySelector("#el8");

el7.addEventListener("click", () => {
    toggle7 = !toggle7;
    el7.style.backgroundColor = toggle7 ? "black" : "white";
    el7.style.color = toggle7 ? "white" : "black";
});

el8.addEventListener("click", () => {
    toggle8 = !toggle8;
    el8.style.backgroundColor = toggle8 ? "darkgreen" : "white";
    el8.style.color = toggle8 ? "yellow" : "black";
});

// Завдання 2
let imgContainer = document.getElementById("el10");
let img = document.getElementById("myImage");
let scale = 1;

document.getElementById("addBtn").addEventListener("click", () => {
    if (!document.getElementById("myImage")) {
        let newImg = document.createElement("img");
        newImg.src = "images/4cd6916ff31ce68b7a0043c4df272f90374f56e6_1585229828.png";
        newImg.id = "myImage";
        newImg.width = 400;
        imgContainer.appendChild(newImg);
        img = newImg;
        scale = 1;
    }
});

document.getElementById("incBtn").addEventListener("click", () => {
    if (img) {
        scale += 0.1;
        img.style.transform = `scale(${scale})`;
    }
});

document.getElementById("decBtn").addEventListener("click", () => {
    if (img && scale > 0.2) {
        scale -= 0.1;
        img.style.transform = `scale(${scale})`;
    }
});

document.getElementById("delBtn").addEventListener("click", () => {
    if (img) {
        img.remove();
        img = null;
    }
});

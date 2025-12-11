document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box");
    const changeBtn = document.getElementById("change-color-btn");

    // Function to generate a random HEX color
    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Change box color when button is clicked
    changeBtn.addEventListener("click", () => {
        colorBox.style.backgroundColor = getRandomColor();
    });
});

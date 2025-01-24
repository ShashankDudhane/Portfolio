// const canvas = document.getElementById('matrixCanvas');
// const ctx = canvas.getContext('2d');

// // Resize canvas to fit screen
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const fontSize = 16;
// const columns = canvas.width / fontSize; // Number of columns
// const drops = Array(Math.floor(columns)).fill(1); // Initial y position for each column

// const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const matrixArray = matrixChars.split("");

// function drawMatrix() {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "#0f0"; // Green color for characters
//     ctx.font = `${fontSize}px monospace`;

//     drops.forEach((y, index) => {
//         const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
//         const x = index * fontSize;

//         ctx.fillText(text, x, y * fontSize);

//         // Randomly reset the drop or move it down
//         if (y * fontSize > canvas.height && Math.random() > 0.975) {
//             drops[index] = 0;
//         }

//         drops[index]++;
//     });

//     requestAnimationFrame(drawMatrix);
// }

// drawMatrix();

// // Handle window resize
// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     drops.length = Math.floor(canvas.width / fontSize);
//     drops.fill(1);
// });


{/* <canvas id="matrixCanvas" class="absolute inset-0 z-0"></canvas> */}
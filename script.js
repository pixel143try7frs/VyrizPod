// Surprise Message Toggle
document.getElementById("surpriseBtn").addEventListener("click", function () {
  document.getElementById("surprise").classList.toggle("hidden");
});

// Confetti Effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function Confetto() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.radius = Math.random() * 6 + 4;
  this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
  this.speed = Math.random() * 3 + 2;
  this.tilt = Math.random() * 10 - 5;
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push(new Confetto());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;
    c.x += Math.sin(c.y / 30) + c.tilt;

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();


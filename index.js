const mycan = document.getElementById("mycan");
const ctx = mycan.getContext("2d");
const h = window.innerHeight;
const w = window.innerWidth;
mycan.height = h;
mycan.width = w;

let fires = [];
for (let a = 0; a < 100; a++) {
    fires.push({
        x: w / 2 - 200 * Math.random(),
        y: h / 2,
        r: 50 * Math.random(),
        vy: 5 * Math.random(),
        life: 100 * Math.random()
    });
}

function firefunction() {
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, w, h);
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";
    
    fires.forEach((fire, index) => {
        const colour = ctx.createRadialGradient(fire.x, fire.y, 2, fire.x, fire.y, fire.r);
        colour.addColorStop(0, "white");
        colour.addColorStop(0.4, "yellow");
        colour.addColorStop(0.6, "orange");
        colour.addColorStop(1, "red");
        ctx.fillStyle = colour;

        ctx.beginPath();
        ctx.arc(fire.x, fire.y, fire.r, 0, 2 * Math.PI);
        ctx.fill();

        fire.y -= fire.vy;
        fire.r -= 0.4;
        fire.life -= 1;

        if (fire.life < 0 || fire.r < 0 || fire.y < 100) {
            fires[index] = {
                x: w / 2 - 200 * Math.random(),
                y: h / 2,
                r: 50 * Math.random(),
                vy: 5 * Math.random(),
                life: 100 * Math.random()
            };
        }
    });
}

setInterval(firefunction, 30);

mycan = document.getElementById("mycan");
    ctx = mycan.getContext("2d");
    h = window.innerHeight;
    w = window.innerWidth;
    mycan.height = h;
    mycan.width = w;

    
    fires = [];
    for (var a=0; a<100; a++){
        fires.push({"x":w/2-200*Math.random(), "y":h/2, "r":50*Math.random(), "vy":5*Math.random(), "life":100*Math.random()});
    }
    
    function firefunction() {
        ctx.fillStyle="black";
        ctx.clearRect(0,0,w,h);
        ctx.fillRect(0,0,w,h);
        ctx.globalCompositeOperation="lighter";
        for (var b=0; b<100; b++){
            var colour = ctx.createRadialGradient(fires[b].x, fires[b].y, 2, fires[b].x, fires[b].y, fires[b].r);
                colour.addColorStop(0, "white");
                colour.addColorStop(0.4, "yellow");
                colour.addColorStop(0.6, "orange");
                colour.addColorStop(1, "red");
            ctx.fillStyle=colour;
    
            ctx.beginPath();
            ctx.arc(fires[b].x, fires[b].y, fires[b].r, 0*Math.PI, 2*Math.PI);
            ctx.fill();
    
            fires[b].y-=fires[b].vy;
            fires[b].r-=0.4;
            fires[b].life-=1;
    
            if (fires[b].life<0 || fires[b].r<0 || fires[b].y<100){
                fires[b].x = w/2-200*Math.random();
                fires[b].y = h/2;
                fires[b].r = 50*Math.random();
                fires[b].life = 100*Math.random();
            }
        }
    }
    setInterval(firefunction,30);
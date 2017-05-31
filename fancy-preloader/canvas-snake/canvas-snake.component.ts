import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-snake',
  templateUrl: 'canvas-snake.component.html',
  styleUrls: ['canvas-snake.component.css']
})
export class CanvasSnakeComponent implements OnInit {

  ngOnInit() {
    const c: any = document.getElementById('c'),
      ctx = c.getContext('2d'),
      cw = c.width = 400,
      ch = c.height = 300,
      rand = (a,b) => ~~((Math.random()*(b-a+1))+a),
      dToR = (degrees) => {
        return degrees * (Math.PI / 180);
      },
      circle = {
        x: (cw / 2) + 5,
        y: (ch / 2) + 22,
        radius: 30,
        speed: 6,
        rotation: 90,
        angleStart: 270,
        angleEnd: 200,
        hue: 10,
        thickness: 1,
        blur: 10
      },
      particles = [],
      particleMax = 100;
    function updateCircle() {
      if(circle.rotation < 360){
        (circle.rotation += circle.speed)  ;
      } else {
        circle.rotation = 0;
      }
    }
    function renderCircle() {
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation));
      ctx.beginPath();
      ctx.arc(0, 0, circle.radius, dToR(circle.angleStart), dToR(circle.angleEnd), true);
      ctx.lineWidth = circle.thickness;
      ctx.strokeStyle = gradient1;
      ctx.stroke();
      ctx.restore();
    }
    function renderCircleBorder() {
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation));
      ctx.beginPath();
      ctx.arc(0, 0, circle.radius + (circle.thickness/2), dToR(circle.angleStart), dToR(circle.angleEnd), true);
      ctx.lineWidth = 6;
      ctx.strokeStyle = gradient2;
      ctx.stroke();
      ctx.restore();
    }
    function renderCircleFlare() {
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation+185));
      ctx.scale(1,1);
      ctx.beginPath();
      ctx.arc(0, circle.radius, 40, 20, Math.PI *2, false);
      ctx.closePath();
      const gradient3 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 10);
      gradient3.addColorStop(0, 'hsla(330, 50%, 50%, .345)');
      gradient3.addColorStop(1, 'hsla(330, 50%, 50%, 0)');
      ctx.fillStyle = gradient3;
      ctx.fill();
      ctx.restore();
    }
    function renderCircleFlare2() {
      ctx.save();
      ctx.translate(circle.x, circle.y);
      ctx.rotate(dToR(circle.rotation));
      ctx.scale(4,2);
      ctx.beginPath();
      ctx.arc(0, circle.radius, 0, 30, Math.PI , true);
      ctx.closePath();
      const gradient4 = ctx.createRadialGradient(20,      circle.radius, 0, 300, circle.radius, 3);
      gradient4.addColorStop(0, 'hsla(30, 100%, 10%, .3)');
      gradient4.addColorStop(1, 'hsla(30, 100%, 50%, 0)');
      ctx.fillStyle = gradient4;
      ctx.fill();
      ctx.restore();
    }
    function createParticles() {
      if(particles.length < particleMax){
        particles.push({
          x: (circle.x + circle.radius * Math.cos(dToR(circle.rotation-85))) + (rand(0, circle.thickness*2) - circle.thickness),
          y: (circle.y + circle.radius * Math.sin(dToR(circle.rotation-85))) + (rand(0, circle.thickness*2) - circle.thickness),
          vx: (rand(0, 100)-50)/20,
          vy: (rand(0, 100)-50)/20,
          radius: rand(1, 3)/4,
          alpha: rand(0, 20)/30
        });
      }
    }
    function updateParticles() {
      let i = particles.length;
      while(i--){
        const p = particles[i];
        p.vx += (rand(0, 100)-50)/50;
        p.vy += (rand(0, 100)-50)/750;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= .01;

        if(p.alpha < .05){
          particles.splice(i, 1)
        }
      }
    }
    function renderParticles() {
      let i = particles.length;
      while(i--){
        const p = particles[i];
        ctx.beginPath();
        ctx.fillRect(p.x, p.y, p.radius, p.radius);
        ctx.closePath();
        ctx.fillStyle = 'hsla(20, 130%, 100%, '+p.alpha+')';
      }
    }
    function clear() {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(100, 150, 0, .1)';
      ctx.fillRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = 'lighter';
    }
    function loop() {
      clear();
      updateCircle();
      renderCircle();
      renderCircleBorder();
      renderCircleFlare();
      renderCircleFlare2();
      createParticles();
      updateParticles();
      renderParticles();
    }

    ctx.shadowBlur = circle.blur;
    ctx.shadowColor = 'hsla('+circle.hue+', 80%, 60%, 0)';
    ctx.lineCap = 'round';

    const gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
    gradient1.addColorStop(0, 'hsla('+circle.hue+', 60%, 50%, .25)');
    gradient1.addColorStop(1, 'hsla('+circle.hue+', 10%, 50%, 0)');

    const gradient2 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
    gradient2.addColorStop(0, 'hsla('+circle.hue+', 0%, 50%, 0)');

    setInterval(loop, 16);
  }

}

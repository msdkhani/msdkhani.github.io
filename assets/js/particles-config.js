/**
 * COSMIC STARFIELD - Interactive stars with connections
 */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": ["#ffffff", "#00d4ff", "#7c3aed", "#ec4899"]
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.7,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 130,
      "color": "#00d4ff",
      "opacity": 0.12,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 2000,
        "rotateY": 2000
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 180,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Shooting stars
function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.left = Math.random() * 70 + '%';
  star.style.top = Math.random() * 40 + '%';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1200);
}

setInterval(() => {
  if (Math.random() > 0.5) createShootingStar();
}, 4000);

// Parallax on mouse (particles layer)
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX - window.innerWidth / 2) / 60;
  const y = (e.clientY - window.innerHeight / 2) / 60;
  const p = document.getElementById('particles-js');
  if (p) p.style.transform = `translate(${x}px, ${y}px)`;
});

// =============================================================
// COSMIC CANVAS - GPU-rendered nebulae with scroll-driven FX
// =============================================================
(function () {
  var canvas = document.getElementById('cosmic-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W, H;

  var scrollY = 0, smoothScroll = 0, lastScroll = 0, smoothVel = 0;
  var mouseX = 0.5, mouseY = 0.5, smoothMX = 0.5, smoothMY = 0.5;
  var running = true;
  var textures = [];
  var sections = [];

  var themes = [
    { c: [[13,148,136],[20,90,190],[0,180,210],[10,60,130]], pos: [0.65, 0.4] },
    { c: [[124,58,237],[180,60,160],[80,40,200],[200,80,180]], pos: [0.25, 0.35] },
    { c: [[29,78,216],[0,160,220],[60,100,255],[0,200,255]], pos: [0.7, 0.45] },
    { c: [[217,119,6],[255,180,50],[180,80,10],[255,200,100]], pos: [0.5, 0.3] }
  ];

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function rnd() { return Math.random(); }

  function makeNebula(theme) {
    var sz = 512;
    var c = document.createElement('canvas');
    c.width = sz; c.height = sz;
    var g = c.getContext('2d');

    g.globalCompositeOperation = 'lighter';

    for (var i = 0; i < 14; i++) {
      var col = theme.c[~~(rnd() * theme.c.length)];
      var cx = sz * (0.15 + rnd() * 0.7);
      var cy = sz * (0.15 + rnd() * 0.7);
      var r = sz * (0.12 + rnd() * 0.32);
      var a = 0.035 + rnd() * 0.055;
      var grad = g.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, 'rgba(' + col + ',' + a + ')');
      grad.addColorStop(0.45, 'rgba(' + col + ',' + (a * 0.35) + ')');
      grad.addColorStop(1, 'rgba(' + col + ',0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, sz, sz);
    }

    for (var j = 0; j < 10; j++) {
      var fc = theme.c[~~(rnd() * theme.c.length)];
      g.save();
      g.translate(sz * rnd(), sz * rnd());
      g.rotate(rnd() * Math.PI);
      g.scale(1, 0.25 + rnd() * 0.35);
      var fr = sz * (0.04 + rnd() * 0.14);
      var fg = g.createRadialGradient(0, 0, 0, 0, 0, fr);
      var fa = 0.02 + rnd() * 0.035;
      fg.addColorStop(0, 'rgba(' + fc + ',' + fa + ')');
      fg.addColorStop(0.5, 'rgba(' + fc + ',' + (fa * 0.25) + ')');
      fg.addColorStop(1, 'rgba(' + fc + ',0)');
      g.fillStyle = fg;
      g.fillRect(-fr, -fr, fr * 2, fr * 2);
      g.restore();
    }

    for (var k = 0; k < 4; k++) {
      var sc = theme.c[0];
      var sx = sz * (0.25 + rnd() * 0.5);
      var sy = sz * (0.25 + rnd() * 0.5);
      var sr = sz * (0.015 + rnd() * 0.045);
      var sg = g.createRadialGradient(sx, sy, 0, sx, sy, sr);
      sg.addColorStop(0, 'rgba(255,255,255,0.06)');
      sg.addColorStop(0.3, 'rgba(' + sc + ',0.035)');
      sg.addColorStop(1, 'rgba(' + sc + ',0)');
      g.fillStyle = sg;
      g.fillRect(0, 0, sz, sz);
    }

    var bl = document.createElement('canvas');
    bl.width = sz; bl.height = sz;
    var bg = bl.getContext('2d');
    bg.filter = 'blur(14px)';
    bg.drawImage(c, 0, 0);
    return bl;
  }

  function init() {
    resize();
    textures = themes.map(makeNebula);
    sections = [].slice.call(document.querySelectorAll('.scroll-section[id]'));
  }

  function loop() {
    if (!running) return;
    var t = performance.now() * 0.001;

    smoothScroll += (scrollY - smoothScroll) * 0.07;
    var vel = Math.abs(scrollY - lastScroll);
    smoothVel += (vel - smoothVel) * 0.12;
    lastScroll = scrollY;
    smoothMX += (mouseX - smoothMX) * 0.06;
    smoothMY += (mouseY - smoothMY) * 0.06;

    ctx.clearRect(0, 0, W, H);

    if (sections.length > 0) {
      renderSections(t);
    } else {
      renderAmbient(t);
    }

    renderWarp();
    requestAnimationFrame(loop);
  }

  function renderSections(t) {
    var vh = H;
    for (var i = 0; i < sections.length && i < textures.length; i++) {
      var rect = sections[i].getBoundingClientRect();
      if (rect.bottom < -300 || rect.top > vh + 300) continue;

      var center = (rect.top + rect.height / 2 - vh / 2) / vh;
      var vis = Math.max(0, 1 - Math.abs(center) * 1.3);
      vis = vis * vis * vis;
      if (vis < 0.005) continue;

      var th = themes[i];
      var drift = Math.sin(t * 0.12 + i * 1.7) * 25;
      var driftY = Math.cos(t * 0.08 + i * 2.3) * 18;
      var mx = (smoothMX - 0.5) * 40;
      var my = (smoothMY - 0.5) * 25;
      var pY = -center * 120;

      var dW = W * 1.3;
      var dH = H * 1.3;
      var dX = W * th.pos[0] - dW / 2 + drift + mx;
      var dY = H * th.pos[1] - dH / 2 + pY + driftY + my;

      ctx.save();
      ctx.globalAlpha = vis * 0.85;
      ctx.globalCompositeOperation = 'screen';
      ctx.drawImage(textures[i], dX, dY, dW, dH);

      ctx.globalAlpha = vis * 0.25;
      ctx.drawImage(textures[i],
        dX - drift * 2 - mx * 0.5,
        dY - driftY * 1.5 - my * 0.3,
        dW * 1.15, dH * 1.15
      );
      ctx.restore();
    }

    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.globalCompositeOperation = 'screen';
    var bd = Math.sin(t * 0.04) * 35;
    ctx.drawImage(textures[0], -W * 0.1 + bd, -H * 0.1, W * 1.2, H * 1.2);
    ctx.restore();
  }

  function renderAmbient(t) {
    if (!textures.length) return;
    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.globalCompositeOperation = 'screen';
    var d1 = Math.sin(t * 0.05) * 40;
    var d2 = Math.cos(t * 0.03) * 30;
    ctx.drawImage(textures[0], -W * 0.1 + d1, -H * 0.1 + d2, W * 1.2, H * 1.2);
    if (textures.length > 1) {
      ctx.globalAlpha = 0.08;
      ctx.drawImage(textures[1], W * 0.3 - d1, -H * 0.05 - d2, W * 0.8, H * 0.8);
    }
    ctx.restore();
  }

  function renderWarp() {
    if (smoothVel < 2) return;
    var intensity = Math.min(smoothVel / 25, 1);
    var vig = ctx.createRadialGradient(W / 2, H / 2, W * 0.12, W / 2, H / 2, W * 0.75);
    vig.addColorStop(0, 'rgba(200,220,255,' + (intensity * 0.012) + ')');
    vig.addColorStop(0.35, 'transparent');
    vig.addColorStop(1, 'rgba(0,0,0,' + (intensity * 0.15) + ')');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);
  }

  window.addEventListener('scroll', function () { scrollY = window.pageYOffset; }, { passive: true });
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
  });
  window.addEventListener('resize', function () {
    resize();
    textures = themes.map(makeNebula);
  });
  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) loop();
  });

  init();
  loop();
})();

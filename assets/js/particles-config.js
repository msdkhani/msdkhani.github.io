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

// Parallax on mouse
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX - window.innerWidth / 2) / 60;
  const y = (e.clientY - window.innerHeight / 2) / 60;
  const p = document.getElementById('particles-js');
  if (p) p.style.transform = `translate(${x}px, ${y}px)`;
});

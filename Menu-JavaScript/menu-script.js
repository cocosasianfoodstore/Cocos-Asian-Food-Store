const swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: false,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
});
  
function toggle() {
    let a = document.getElementById("hinder");
  
    if (a.style.display === 'block') {
      a.style.display = 'none';
    }
  
    else {
      a.style.display = 'block';
    }
}
  
function toggle2() {
    let b = document.getElementById("hinder2");
  
    if (b.style.display === 'block') {
      b.style.display = 'none';
    }
  
    else {
      b.style.display = 'block';
    }
}
  
function toggle3() {
    let c = document.getElementById("hinder3");
  
    if (c.style.display === 'block') {
      c.style.display = 'none';
    }
  
    else {
      c.style.display = 'block';
    }
}
  
function toggle4() {
    let d = document.getElementById("hinder4");
  
    if (d.style.display === 'block') {
      d.style.display = 'none';
    }
  
    else {
      d.style.display = 'block';
    }
}
  
  
function toggle5() {
    let e = document.getElementById("hinder5");
  
    if (e.style.display === 'block') {
      e.style.display = 'none';
    }
  
    else {
      e.style.display = 'block';
    }
}
  
function toggle6() {
    let f = document.getElementById("hinder6");
  
    if (f.style.display === 'block') {
      f.style.display = 'none';
    }
  
    else {
      f.style.display = 'block';
    }
}
  
function toggle7() {
    let g = document.getElementById("hinder7");
  
    if (g.style.display === 'block') {
      g.style.display = 'none';
    }
  
    else {
      g.style.display = 'block';
    }
}
  
function toggle8() {
    let h = document.getElementById("hinder8");
  
    if (h.style.display === 'block') {
      h.style.display = 'none';
    }
  
    else {
      h.style.display = 'block';
    }
}
  
function toggle9() {
    let i = document.getElementById("hinder9");
  
    if (i.style.display === 'block') {
      i.style.display = 'none';
    }
  
    else {
      i.style.display = 'block';
    }
}
  
function toggle10() {
    let j = document.getElementById("hinder10");
  
    if (j.style.display === 'block') {
      j.style.display = 'none';
    }
  
    else {
      j.style.display = 'block';
    }
}
  
function toggle11() {
    let k = document.getElementById("hinder11");
  
    if (k.style.display === 'block') {
      k.style.display = 'none';
    }
  
    else {
      k.style.display = 'block';
    }
}
  
function toggle12() {
    let l = document.getElementById("hinder12");
  
    if (l.style.display === 'block') {
      l.style.display = 'none';
    }
  
    else {
      l.style.display = 'block';
    }
}
  
function toggle13() {
    let m = document.getElementById("hinder13");
  
    if (m.style.display === 'block') {
      m.style.display = 'none';
    }
  
    else {
      m.style.display = 'block';
    }
}
  
  
function toggle14() {
    let n = document.getElementById("hinder14");
  
    if (n.style.display === 'block') {
      n.style.display = 'none';
    }
  
    else {
      n.style.display = 'block';
    }
}
  
function toggle15() {
    let o = document.getElementById("hinder15");
  
    if (o.style.display === 'block') {
      o.style.display = 'none';
    }
  
    else {
      o.style.display = 'block';
    }
}
  
function toggle16() {
    let p = document.getElementById("hinder16");
  
    if (p.style.display === 'block') {
      p.style.display = 'none';
    }
  
    else {
      p.style.display = 'block';
    }
}
  
function toggle17() {
    let q = document.getElementById("hinder17");
  
    if (q.style.display === 'block') {
      q.style.display = 'none';
    }
  
    else {
      q.style.display = 'block';
    }
}
  
function toggle18() {
    let r = document.getElementById("hinder18");
  
    if (r.style.display === 'block') {
      r.style.display = 'none';
    }
  
    else {
      r.style.display = 'block';
    }
}
  
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
  
window.addEventListener("mousemove", function (e) {
  
    const posX = e.clientX;
    const posY = e.clientY;
  
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
  
    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, {duration: 2500, fill: "forwards"});
  
});
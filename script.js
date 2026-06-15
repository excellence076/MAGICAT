document.addEventListener("DOMContentLoaded",() => {
  
// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const target = Number(counter.dataset.target);

  let count = 0;

  const updateCounter = () => {

    const increment = target / 100;

    if (count < target) {

      count += increment;

      counter.textContent =
      Math.floor(count).toLocaleString();

      requestAnimationFrame(updateCounter);

    } else {

      counter.textContent =
      target.toLocaleString();

    }

  };

  updateCounter();

});


// Cat Parallax

const cat = document.querySelector(".cat");

if(cat){

document.addEventListener("mousemove",(e)=>{

const x =
(e.clientX - window.innerWidth / 2) / 50;

const y =
(e.clientY - window.innerHeight / 2) / 50;

cat.style.transform =
`translate(${x}px, ${y}px)`;

});

}


// Logo Glow

const logo = document.querySelector(".logo");

if(logo){

setInterval(()=>{

const glow =
Math.floor(Math.random()*20)+10;

logo.style.textShadow =
`0 0 ${glow}px #c800ff`;

},500);

}

});
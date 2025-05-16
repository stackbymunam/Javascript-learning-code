const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

var timeout;

function firstpageAnim() {
  let tl = gsap.timeline();

  tl.from(".nav",
    {
      y: "-10",
      opacity: 0,
      duration: 2,
      ease: Expo.easeInout
    })
  tl.to(".boundingelem", {
    y: 0,
    ease: Expo.easeInout,
    duration: 1.5,
    stagger: .2
  })
  tl.from(".herofooter", {
    y: "-10",
    opacity: 0,
    duration: 2,
    delay: -1,
    ease: Expo.easeInout,

  })
}

function circlechaptkarlo() {
  let xscale = 1;
  let yscale = 1;

  let xprev = 0;
  let yprev = 0;
  window.addEventListener("mousemove", function (dets) {

    clearTimeout(timeout);

        xscale =gsap.utils.clamp(.8,1.2,  dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);
       
    xprev = dets.clientX;
    xprev = dets.clientX;

    circleMouseFollower(xscale, yscale);

  timeout =  setTimeout(function(){
       document.querySelector(
      ".minicircel"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(1, 1) `;
    })
  })
}
circlechaptkarlo();

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".minicircel"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)  scale(${xscale}, ${yscale}) `;

    
  });

}
firstpageAnim()
circleMouseFollower();



document.querySelectorAll(".elem")
.forEach(function (elem){
let roatate = 0;
let diffrot = 0;




  elem.addEventListener("mousemove", function (details) {
    let diff = (details.clientY - elem.getBoundingClientRect().top)
    diffrot = details.clientX - roatate;
    roatate = details.clientX

  
   gsap.to(elem.querySelector("img"), {
    opacity: 1,
    ease: Power3,
    top: diff,
    left: details.clientX,
    roatate: gsap.utils.clamp(-20, 20, diffrot),
   
   }) 
  })
})
gsap.registerPlugin(ScrollTrigger);


// Pin the header
ScrollTrigger.create({
  trigger: ".header",
  start: "top top",
  end: "+=3400", // Adjust this value based on your content height
  pin: true,
  pinSpacing: true,
});

gsap.to(".title", {
  scrollTrigger: {
    trigger:".title",
    start: "top top",
    end: "top top",
    scrub: 6,
  },
  scale: 0.5,
  x: "-15%",
  y: "-40%"
})

gsap.to([".fill1", ".line1"], {
  scrollTrigger: {
    trigger: ".fill1",
    start: "top -20",
    end: "top -40%",
    scrub: 3, 
  },
  opacity: 1,
  ease: "power2.out", 
});

gsap.to(".line1", {
  scrollTrigger: {
    trigger: ".fill1",
    start: "top -20",
    end: "top -40%",
    scrub: 3,
  },
  y: -100,
  ease: "power2.out"
})

gsap.to([".fill2", ".line2"], {
  scrollTrigger: {
    trigger: ".fill2",
    start: "top -70%",
    end: "top -120%",
    scrub: 3, 
  },
  opacity: 1,
  ease: "power2.out", 
});

gsap.to(".line2", {
  scrollTrigger: {
    trigger: ".fill2",
    start: "top -70",
    end: "top -120%",
    scrub: 3,
  },
  y: -100,
  ease: "power2.out"
})

gsap.to([".fill3", ".line3"], {
  scrollTrigger: {
    trigger: ".fill3",
    start: "top -170%",
    end: "top -210%",
    scrub: 3, 
  },
  opacity: 1,
  ease: "power2.out", 
});
gsap.to(".line3", {
  scrollTrigger: {
    trigger: ".fill3",
    start: "top -170",
    end: "top -210%",
    scrub: 3,
  },
  y: -100,
  ease: "power2.out"
})

gsap.to([".fill4", ".line4"], {
  scrollTrigger: {
    trigger: ".fill4",
    start: "top -270%",
    end: "top -350%",
    scrub: 3, 
  },
  opacity: 0.8,
  ease: "power2.out", 
});
gsap.to(".line4", {
  scrollTrigger: {
    trigger: ".fill4",
    start: "top -270%",
    end: "top -350%",
    scrub: 3, 
  },
  y: -100,
  ease: "power2.out", 
});

ScrollTrigger.create({
  trigger: ".profit",
  start: "top top",
  end: "+=2000", 
  pin: true,
  pinSpacing: true,
});


gsap.to(".dunk", {
  scrollTrigger: {
    trigger: ".dunk",
    start: "top 80%",
    end: "bottom top",
    scrub: 3, 
  },
  y: -350,
})
gsap.to(".star", {
  scrollTrigger: {
    trigger: ".star",
    start: "top 90%",
    end: "bottom top",
    scrub: 2, 
  },
  y: -650,
})

gsap.to(".bobba", {
  scrollTrigger: {
    trigger: ".bobba",
    start: "top 70%",
    end: "bottom top",
    scrub: 2, 
  },
  y: -300,
})

// numbers
var startCount = 0,
    num = {var: startCount};

gsap.timeline({
    scrollTrigger: {
      trigger: ".prof1",
      start: "top top",
      end: "bottom -100",
      scrub: 3,
      // once: true,
    }
  })
  .to(num, {var: 6635, scrub: 3, ease: "none", onUpdate: changeNumber})
  .to(".prof1", {opacity: 1}, 0);

function changeNumber() {
  document.querySelector(".numbers").innerHTML = Math.round(num.var);
}

gsap.to(".prof2", {
  scrollTrigger: {
    trigger: ".prof2",
    start: "top -15%",
    end: "bottom -100",
    scrub: 5,
    once: true,
  },
  opacity: 1,
})
gsap.to(".prof3", {
  scrollTrigger: {
    trigger: ".prof3",
    start: "top -35%",
    end: "bottom -200",
    scrub: 5,
    once: true,
  },
  opacity: 1,
})
gsap.to(".prof4", {
  scrollTrigger: {
    trigger: ".prof4",
    start: "top -75%",
    end: "bottom -270",
    scrub: 5,      
    once: true,
  },
  opacity: 1,
})
gsap.to(".prof5", {
  scrollTrigger: {
    trigger: ".prof5",
    start: "top -135%",
    end: "bottom -300",
    scrub: 5,
    once: true,
  },
  opacity: 1,
})
gsap.to(".prof6", {
  scrollTrigger: {
    trigger: ".prof6",
    start: "top -155%",
    end: "bottom -300",
    scrub: 5,
    once: true,
  },
  opacity: 1,
})


gsap.to(".s1", {
  scrollTrigger: {
    trigger: ".s1",
    start: "top bottom",
    end: "bottom top",
    scrub: 2, 
  },
  x: 400,
  y: -350, 
  ease: "power2.out", 
});

gsap.to(".s2", {
  scrollTrigger: {
    trigger: ".s2",
    start: "top bottom",
    end: "bottom top",
    scrub: 2, 
  },
  x: -50,
  y: 275, 
  ease: "power2.out", 
});

gsap.to(".s3", {
  scrollTrigger: {
    trigger: ".s3",
    start: "top bottom",
    end: "bottom top",
    scrub: 2, 
  },
  x: 50,
  y: -225, 
  ease: "power2.out", 
});

gsap.to(".s4", {
  scrollTrigger: {
    trigger: ".s3",
    start: "top bottom",
    end: "bottom top",
    scrub: 2, 
  },
  x: 100,
  y: -175, 
  ease: "power2.out", 
});


// Cup spill

gsap.to(".cup", {
  scrollTrigger: {
    trigger: ".cup",
    start: "top 80%",
    end: "bottom top",
    scrub: 2, 
  },
  rotation: 100,
  transformOrigin: "center center",
  ease: "power2.out", 
  duration: 2,
});

gsap.to(".pearl", {
  scrollTrigger: {
    trigger: ".pearl",
    start: "top bottom",
    end: "bottom top",
    scrub: 2, 
  },
  rotation: 360, 
  x: 750,
  transformOrigin: "center center",
  ease: "power2.out",
});





gsap.to(".part1", {
  scrollTrigger: {
    trigger: ".part1",
    start: "top 70%", 
    end: "bottom center",
    scrub: 5,
  },
  opacity: 1,
});

gsap.to(".parta", {
  scrollTrigger: {
    trigger: ".parta",
    start: "top 70%", 
    end: "bottom center",
    scrub: 5,
  },
  opacity: 1,
});

gsap.to(".part2", {
  scrollTrigger: {
    trigger: ".part2",
    start: "top 70%", 
    end: "bottom center",
    scrub: 5,
  },
  opacity: 1,
});

gsap.to(".partb", {
  scrollTrigger: {
    trigger: ".partb",
    start: "top 60%", 
    end: "bottom center",
    scrub: 5,
  },
  opacity: 1,
});

gsap.to(".part3", {
  scrollTrigger: {
    trigger: ".part3",
    start: "top 60%", 
    end: "bottom center",
    scrub: 5,
  },
  opacity: 1,
});

gsap.to(".part4", {
  scrollTrigger: {
    trigger: ".part4",
    start: "top 60%", 
    end: "bottom center",
    scrub: 5,
  },
  opacity: 1,
});


// Cafe section
let pin = ScrollTrigger.create({
  trigger: ".cafeDiv",
  pin: true,
  start: "top 45%",
  end: "+=3000",
  pinSpace: true,
});


gsap.to(".cafeBuild", {
    scrollTrigger: {
        trigger: ".cafeBuild",
        start: "top 45%",
        end: "+=1000",
        scrub: true,
    },
    opacity: 1,
});

gsap.to(".cafe2", {
  scrollTrigger: {
    trigger: ".cafe2",
    start: "top 15%",
    end: "bottom 5%",
    scrub: true,
  },
  opacity: 1,
});

gsap.to(".cafe3", {
  scrollTrigger: {
    trigger: ".cafe3",
    start: "top -20%",
    end: "top -40%",
    scrub: true,
  },
  opacity: 1,
});

gsap.to(".cafe4", {
  scrollTrigger: {
      trigger: ".cafe4",
      start: "top -70%",
      end: "top -100%",
      scrub: true,
  },
  opacity: 1,
});

gsap.to(".cafe5", {
scrollTrigger: {
  trigger: ".cafe5",
  start: "top -125%",
  end: "top -160%",
  scrub: true,
},
opacity: 1,
});

gsap.to(".cafe6", {
scrollTrigger: {
  trigger: ".cafe6",
  start: "top -175%",
  end: "top -200%",
  scrub: true,
},
opacity: 1,
});


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.cafeBuild',
    start: 'top -100',
    end: 'bottom center',
    scrub: 5,
  }
});
tl.to('.q1', {
  y: -400,
  opacity: 1,
})
gsap.to('.q2', {  
  scrollTrigger: {
    trigger: '.q2',
    start: 'top -30%',
    end: 'bottom top',
    scrub: 5,
  },
  opacity: 1,
  y: -380,
})
gsap.to('.q3', {  
  scrollTrigger: {
    trigger: '.q3',
    start: 'top -50%',
    end: 'bottom top',
    scrub: 5,
  },
  opacity: 1,
  y: -360,
})
gsap.to('.q4', {  
  scrollTrigger: {
    trigger: '.q4',
    start: 'top -75%',
    end: 'bottom top',
    scrub: 5,
  },
  opacity: 1,
  y: -340,
})

gsap.to(".pos", {
  y: 350,
  ease: "none",
  scrollTrigger: {
    trigger: ".pos",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});


gsap.to(".neg", {
  y: -150,
  ease: "none",
  scrollTrigger: {
    trigger: ".neg",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  }
});

gsap.utils.toArray([".r1", ".r2", ".r3", ".r4", ".r5"]).forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 75%",
      end: "top 20%",
      scrub: 1,
    },
    opacity: 1,
  });
});

gsap.to(".conclusion", {
  scrollTrigger: {
    trigger: ".conclusion",
    start: "top 15%",  
    end: "bottom+=1000", 
    pin: true,
    pinSpacing: false,  
    scrub: 1,
    anticipatePin: 1,
  }
});






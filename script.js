gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
  trigger: ".header",
  start: "top top",
  end: "+=5200",
  pin: true,
  pinSpacing: true,
});


gsap.to(".line1", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom 80%",
    end: "bottom 50%",
    scrub: 3,
  },
  opacity: 1
})

gsap.to(".line2", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom 20%",
    end: "bottom top",
    scrub: 3,
  },
  opacity: 1
})

gsap.to(".line3", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -20%",
    end: "bottom -50%",
    scrub: 3,
  },
  opacity: 1
})

gsap.to(".like", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -80%",
    end: "bottom -100%",
    scrub: 3,
  },
  opacity: 1
})

gsap.to(".why", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -120%",
    end: "bottom -140%",
    scrub: 3,
  },
  opacity: 1
})


gsap.to(".lines", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -200%",
    end: "bottom -230%",
    scrub: 3,
  },
  opacity: 0
})




// numbers
var startCount = 0,
    num = {var: startCount};

gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "bottom -250%",
      end: "bottom -270%",
      scrub: 3,
    }
  })
  .to(num, {var: 6635, scrub: 3, ease: "none", onUpdate: changeNumber})
  .to(".prof1", {opacity: 1}, 0);

function changeNumber() {
  document.querySelector(".numbers").innerHTML = Math.round(num.var);
}

gsap.to(".dunk", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -280%",
    end: "bottom -400%",
    scrub: 3,
  },
  y: -200,
  opacity: 1,
})

gsap.to(".star", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -290%",
    end: "bottom -400%",
    scrub: 3,
  },
  y: -340,
  opacity: 1,
})

gsap.to(".prof2", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -410%",
    end: "bottom -430%",
    scrub: 3,
  },
  opacity: 1,
})
gsap.to(".prof3", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -440%",
    end: "bottom -460%",
    scrub: 3,
  },
  opacity: 1,
})
gsap.to(".prof4", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -470%",
    end: "bottom -500%",
    scrub: 3,
  },
  opacity: 1,
})
gsap.to(".prof5", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -510%",
    end: "bottom -530%",
    scrub: 3,
  },
  opacity: 1,
})
gsap.to(".prof6", {
  scrollTrigger: {
    trigger: ".intro",
    start: "bottom -540%",
    end: "bottom -560%",
    scrub: 3,
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
  start: "top 15%",
  end: "+=1500",
  pinSpace: true,
});


gsap.to(".cafe2", {
  scrollTrigger: {
    trigger: ".cafe2",
    start: "top 15%",
    end: "top top",
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

gsap.to(".q1", {
  scrollTrigger: {
    trigger: ".q1",
    start: "top 30%",
    end: "top top",
    scrub: 2,
  },
  opacity: 1,
})
gsap.to(".q1", {
  scrollTrigger: {
    trigger: ".cafeBuild",
    start: "top -20%",
    end: "+=1000",
    scrub: 2,
  },
  opacity: 0,
});
gsap.to(".q2", {
  scrollTrigger: {
    trigger: ".cafeBuild",
    start: "top -20%",
    end: "top -40%",
    scrub: 2,
  },
  opacity: 1,
});
gsap.to(".q2", {
  scrollTrigger: {
    trigger: ".cafeBuild",
    start: "top -50%",
    end: "+=1000",
    scrub: 2,
  },
  opacity: 0,
});
gsap.to(".q3", {
  scrollTrigger: {
    trigger: ".cafeBuild",
    start: "top -50%",
    end: "top -80%",
    scrub: 2,
  },
  opacity: 1,
});
gsap.to(".q3", {
  scrollTrigger: {
    trigger: ".cafeBuild",
    start: "top -100%",
    end: "+=1000",
    scrub: 2,
  },
  opacity: 0,
});
gsap.to(".q4", {
  scrollTrigger: {
    trigger: ".cafeBuild",
    start: "top -100%",
    end: "top -130%",
    scrub: 2,
  },
  opacity: 1,
});

gsap.to(".e1", {
  scrollTrigger: {
    trigger: ".e1",
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
  },
  opacity: 1,
})
gsap.to(".r1", {
  scrollTrigger: {
    trigger: ".r1",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
  },
  opacity: 1,
})

gsap.to(".e2", {
  scrollTrigger: {
    trigger: ".e2",
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
  },
  opacity: 1,
})

gsap.to(".r2", {
  scrollTrigger: {
    trigger: ".r2",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
  },
  opacity: 1,
})
gsap.to(".e3", {
  scrollTrigger: {
    trigger: ".e3",
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
  },
  opacity: 1,
})
gsap.to(".r3", {
  scrollTrigger: {
    trigger: ".r3",
    start: "top 60%",
    end: "top 40%",
    scrub: 2,
  },
  opacity: 1,
})



let lines = gsap.utils.toArray(".cr");

  gsap.set(lines, { opacity: 0 }); 

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".conclusion",
      start: "top 30%",
      end: "+=250%",
      scrub: 1,
      pin: ".p4",
    }
  });

  lines.forEach((line, index) => {
    tl.to(line, { opacity: 0, scrub: 3 })
      .to(line, { opacity: 1, scrub: 3 }, "+=1"); 
  });

  tl.to(lines[lines.length - 1], { opacity: 1, duration: 0.5 });



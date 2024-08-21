var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.2,
    scrub:2,
})

tl.from(".center-part1 h1 , .center-part1 p ,.center-part1 button" ,{
   x:-300,
   opacity:0,
   duration:0.7,
   scrub:2,

})

tl.from(".center-part2 img",{
  opacity:0,
 x:+200,
 duration:0.7,
 scrub:2,
})

tl.from(".section1bottom",{
  opacity:0,
  y:30,
  stagger:0.15,
  duration:0.6,
  scrub:2,

})


var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".section2",
    scroller:"body",
    start:"top 50%",
    end:"top 0",
    scrub:2,
  }
})



tl2.from(".services ",{
  x:-100,
  opacity:0,
  duration:0.4,

})

tl2.from(".elem.line1.left",{
  x:-300,
  opacity:0,
  duration:1,
},"manas")

tl2.from(".elem.line1.right",{
  x:300,
  opacity:0,
  duration:1,
},"manas")



tl2.from(".elem.line2.left",{
  x:-300,
  opacity:0,
  duration:1,
},"x")

tl2.from(".elem.line2.right",{
  x:300,
  opacity:0,
  duration:1,
},"x")


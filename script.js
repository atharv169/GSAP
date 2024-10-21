//gsap.to =>initial to final
//gsap.from =>final to initial

gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"orange",
    borderRadius:"50%",
    repeat:-1,
    yoyo:true
})
// gsap.from("#box2",{
//     x:1000,
//     duration:4,
//     delay:1
// })

// *******stagger*********

// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     delay:1,
//     y:30,
//     stagger:-1
// })
function navAnimation(){
    let nav = document.querySelector('nav')

nav.addEventListener('mouseenter', function(){
    var tl = gsap.timeline()
    tl.to(".nav-bottom",{
        height:"21vh", 
        duration:0.5
    })
    tl.to(".nav-center h5", {
        display: "block",
        duration: 0.1 
    })
    tl.to('.nav-center h5 span',{
        y:0,
        stagger:{
            amount:0.6
        }
    })
})


nav.addEventListener('mouseleave', function(){
    let tl = gsap.timeline()
    
    tl.to('.nav-center h5 span',{
        y:25,
        stagger:{
            amount:0.6
        }
    })
    tl.to(".nav-center h5",{
        display: 'none',
        duration: 0.1
    })
    tl.to(".nav-bottom", {
        height: 0,
        duration:0.2
    })
})
}

navAnimation()
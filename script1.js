var tl = gsap.timeline()

var num=document.querySelectorAll("#dev h1")

tl.from("#lowest",{
    onStart:function(){
        $('#lowest').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#lowest').textillate('out')
                }
            }, 
            out: {
                effect: 'fadeOutUp'
            }
        })
    }
})
.from("#second-lowest",{
    opacity: 0,
    delay: 1,
    onStart:function(){
        $('#second-lowest').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#second-lowest').textillate('out')
                }
            }, 
            out: {
                effect: 'fadeOutUp'
            }
        })
    }
})
.from("#second-top",{
    opacity: 0,
    delay: 1,
    onStart:function(){
        $('#second-top').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#second-top').textillate('out')
                }
            }, 
            out: {
                effect: 'fadeOutUp'
            }
        })
    }
})
.from("#top",{
    opacity: 0,
    delay: 1,
    onStart:function(){
        $('#top').textillate({
            in: {
                effect: 'fadeInUp', 
                callback:function(){
                    $('#top').textillate('out')
                }
            }, 
            out: {
                effect: 'fadeOutUp'
            }
        })
    }
}).to("#top-screen",{
    top:"-100%",
    delay:1,
    duration:1.2,
    ease: "Power4.easeOut"
}).from("#nav h3",{
    y: 20,
    opacity: 0,
    stagger: .2,
})
.from('#dev h1',{
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: .2,
})
$('#dev h1').textillate({in:{effect:'fadeIn'}, delay:400})
tl.from('#image-div',{
    x: -100,
    opacity: 0,
    ease: "Expo.easeInOut"
})
tl.from('#name h1',{
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: .2,
    ease: "Expo.easeInOut"
})
$('#name h1').textillate({in:{effect:'fadeIn'}, delay:800})

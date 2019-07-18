var controller = new ScrollMagic.Controller();
var mytween = TweenMax.to("#sec2,#sec1,header",0.2,{css:{
      backgroundColor:"#ee822b"                               
}});
var tween2 = TweenMax.to("nav a,li",0.2,{css:{
    color:"white"
}});
var tweenimg1 = TweenMax.to("#img1",1,{css:{
    y:-100,
    opacity:"1"
    
}});

var tweenimg2 = TweenMax.to("#img2",1,{css:{
    y:-100,
    opacity:"1"
    
}});

var tweenimg3 = TweenMax.to("#img3",1,{css:{
    y:-100,
    opacity:"1"
    
}});

var tweenimg4 = TweenMax.to("#img4",1,{css:{
    y:-100,
    opacity:"1"
    
}});

var scene = new ScrollMagic.Scene({
    triggerElement: "#sec2",
    duration:"0px"
    
})
.addIndicators({name: "color"}) 
.setTween(mytween)
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#sec2",
    duration:""
})
.addIndicators({name: "color"}) 
.setTween(tween2)
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".mobile",
    duration:"150px"
})
.addIndicators({name: "mobile"}) 
.setTween(tweenimg1)
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: ".mobile",
    duration:"150px",
    offset:"40px"
    
})
.addIndicators({name: "mobile2"}) 
.setTween(tweenimg2)
.addTo(controller);

var scene5 = new ScrollMagic.Scene({
    triggerElement: ".mobile",
    duration:"150px",
    offset:"80px"
    
})
.addIndicators({name: "mobile3"}) 
.setTween(tweenimg3)
.addTo(controller);

var scene6 = new ScrollMagic.Scene({
    triggerElement: ".mobile",
    duration:"150px",
    offset:"120px"
    
})
.addIndicators({name: "mobile4"}) 
.setTween(tweenimg4)
.addTo(controller);

var blacktween = TweenMax.to("#sec3,#sec2,header",0.5,{css:{
    background:"black"
}});
var blackscene = new ScrollMagic.Scene({
    triggerElement: "#sec3",
    duration:"0px",
    
})
.addIndicators({name: "black"}) 
.setTween(blacktween)
.addTo(controller);

var blackscenepop = TweenMax.to("#box",1,{css:{
    y:-100,
}});

var blackscenepop = new ScrollMagic.Scene({
    triggerElement: "#sec3",
    duration:"0px",
    
})
.addIndicators({name: "black"}) 
.setTween(blackscenepop)
.addTo(controller);



var mobotween = TweenMax.to(".mobile1",1,{css:{
    transform:"translateX(0)"
}});

var mobo = new ScrollMagic.Scene({
    triggerElement: "#sec3",
    duration:"220px",
    offset:"400px"
    
})
.addIndicators({name: "mobo"}) 
.setTween(mobotween)
.addTo(controller);


var mobotween2 = TweenMax.to(".mobile3",1,{css:{
    transform:"translateX(0)",
    ease: SlowMo.ease.config(0.7, 0.7, false)
}});

var mobo = new ScrollMagic.Scene({
    triggerElement: "#sec3",
    duration:"220px",
    offset:"400px"
    
})
.addIndicators({name: "mobo"}) 
.setTween(mobotween2)
.addTo(controller);



var purptween = TweenMax.to("#sec3,#sec4,header",0.5,{css:{
    background:"#8062a3"
}});
var blackscene = new ScrollMagic.Scene({
    triggerElement: "#sec4",
    duration:"0px",
    
})
.addIndicators({name: "purple"}) 
.setTween(purptween)
.addTo(controller);



var pop2 = TweenMax.to("#box2",1,{css:{
    y:-100,
}});

var boxpop2 = new ScrollMagic.Scene({
    triggerElement: "#sec4",
    duration:"0px",
    
})
.addIndicators({name: "pop2"}) 
.setTween(pop2)
.addTo(controller);


var transmob1 = TweenMax.to(".trans1",1,{css:{
    x:500
}});

var transbox = new ScrollMagic.Scene({
    triggerElement: "#sec4",
    duration:"300px",
    offset:"500px"
})
.addIndicators({name: "transmob"}) 
.setTween(transmob1)
.addTo(controller);


var transmob2 = TweenMax.to(".trans2",1,{css:{
    x:-500
}});

var transbox2 = new ScrollMagic.Scene({
    triggerElement: "#sec4",
    duration:"300px",
    offset:"500px"
})
.addIndicators({name: "transmob2"}) 
.setTween(transmob2)
.addTo(controller);




var darkpurp = TweenMax.to("#sec5,#sec4,header",0.5,{css:{
    background:"#1a131f"
}});
var blackscene = new ScrollMagic.Scene({
    triggerElement: "#sec5",
    duration:"0px",
    
})
.addIndicators({name: "darkpurple"}) 
.setTween(darkpurp)
.addTo(controller);


var skew4 = TweenMax.to(".skew4",1,{css:{
    opacity:"1",
    y:-80,
    x:-30
}});


var skewscene1 = new ScrollMagic.Scene({
    triggerElement: ".skews",
    duration:"100px",
    offset:"-100px"
    
})
.addIndicators({name: "skews"}) 
.setTween(skew4)
.addTo(controller);

var skew3 = TweenMax.to(".skew3",1,{css:{
    opacity:"1",
    y:-80,
    x:-30
}});

var skewscene2 = new ScrollMagic.Scene({
    triggerElement: ".skews",
    duration:"100px",
    offset:"0px"
    
})
.addIndicators({name: "skews"}) 
.setTween(skew3)
.addTo(controller);


var skew2 = TweenMax.to(".skew2",1,{css:{
    opacity:"1",
    y:-80,
    x:-30
}});

var skewscene2 = new ScrollMagic.Scene({
    triggerElement: ".skews",
    duration:"100px", 
    offset:"80px"
    
})
.addIndicators({name: "skews"}) 
.setTween(skew2)
.addTo(controller);


var skew1 = TweenMax.to(".skew1",1,{css:{
    opacity:"1",
    y:-80,
    x:-30
}});

var skewscene1 = new ScrollMagic.Scene({
    triggerElement: ".skews",
    duration:"100px", 
    offset:"160px"
    
})
.addIndicators({name: "skews"}) 
.setTween(skew1)
.addTo(controller);


var box3 = TweenMax.to("#box3",1,{css:{
    y:-100
}});

var blackscenepop = new ScrollMagic.Scene({
    triggerElement: "#sec5",
    duration:"0px",
    
})
.addIndicators({name: "box3"}) 
.setTween(box3)
.addTo(controller);


var box4 = TweenMax.to("#box4",1,{css:{
    y:-100
}});

var blackscenepop = new ScrollMagic.Scene({
    triggerElement: "#sec6",
    duration:"0px",
    
})
.addIndicators({name: "box4"}) 
.setTween(box4)
.addTo(controller);



var green = TweenMax.to("#sec5,#sec6,header",0.5,{css:{
    background:"#78be20"
}});
var blackscene = new ScrollMagic.Scene({
    triggerElement: "#sec6",
    duration:"0px",
    
})
.addIndicators({name: "green"}) 
.setTween(green)
.addTo(controller);


var greenmob = TweenMax.to(".greenmob img",0.5,{css:{
    opacity:"1",
    transform:"translateX(40%)"
}});


var greentrans = new ScrollMagic.Scene({
    triggerElement: "#greens",
    duration:"200px",
    
})
.addIndicators({name: "greentrans"}) 
.setTween(greenmob)
.addTo(controller);

var greenlap = TweenMax.to(".greenlap img",0.5,{css:{
    opacity:"1",
    transform:"translateX(-15%)"
}});


var greentrans = new ScrollMagic.Scene({
    triggerElement: "#greens",
    duration:"200px",
    
})
.addIndicators({name: "greentrans"}) 
.setTween(greenlap)
.addTo(controller);
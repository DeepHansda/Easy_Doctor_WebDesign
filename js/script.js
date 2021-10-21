var burger = document.querySelector(".burger")
var menu = document.querySelector(".menu")
var main = document.querySelector(".main")
var close = document.querySelector(".close")
var one = document.querySelector("#one")
var two = document.querySelector("#two")
var a = document.querySelector("#a")
var b = document.querySelector("#b")
var contact = document.querySelector("#contact")
var cwu = document.querySelector(".cwu")
var wrw = document.querySelector("#wrw")
var about = document.querySelector("#about")
var aboutUs = document.querySelector(".about")
var cut1 = document.querySelector("#cut1")
var cut2 = document.querySelector("#cut2")
var act = document.querySelector("#act")
var are = document.querySelector("#are")
var out = document.querySelector("#out")

burger.addEventListener("click", function(){
    menu.style.left ="0";
    main.style.opacity ="0"
    one.style.margin="0"
    two.style.margin="0"
    one.style.transform="rotate(129deg)"
    two.style.transform="rotate(52deg)"
    a.style.margin="0px"
    b.style.margin="0px"
    a.style.transform="rotate(-127deg)"
    b.style.transform="rotate(126deg)"
    
})

close.addEventListener("click", function(){
    menu.style.left ="-3000px"
    main.style.opacity ="1"
    one.style.margin="5px"
    two.style.margin="5px"
    one.style.transform="rotate(0deg)"
    two.style.transform="rotate(0deg)"
    a.style.margin="5px"
    b.style.margin="5px"
    a.style.transform="rotate(0deg)"
    b.style.transform="rotate(0deg)"
    
})

contact.addEventListener("click",function(){
    cwu.style.display="flex";
})

cut1.addEventListener("click",function(){
    cwu.style.display="none"
})

about.addEventListener("click", function(){
    aboutUs.style.top="0"
})

wrw.addEventListener("click", function(){
    aboutUs.style.top="0"
})

cut2.addEventListener("click", function(){
    aboutUs.style.top="2000px"
})


act.addEventListener("click",function(){
    cwu.style.display="flex";
})
are.addEventListener("click", function(){
    aboutUs.style.top="0"
})
out.addEventListener("click", function(){
    aboutUs.style.top="0"
})
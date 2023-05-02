// this is used to remove class text(animation) after completition
let textcopy=document.querySelector(".text1");
setTimeout(function(){
    textcopy.classList.replace("text1","text1-copy");
},2000)

let text2=document.querySelector("#text2");
setTimeout(function(){
    text2.classList.replace("x","text2")
},3000)

let text2copy=document.querySelector("#text2");
setTimeout(function(){
    text2copy.classList.replace("text2","text2-copy");
},5000)

const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>{
    if(window.scrollY >=600 || window.scrollY >=700)
    {
        nav.classList.add('nav2');
    }
    else{
        nav.classList.remove('nav2');
    }
})
// animater1 -> for about picture(avtar) of about page
const animater1=document.querySelector('.animation1');
// animater2 -> for para section of about page
const animater2=document.querySelector('.animation2');
// animater3 -> for skill section of skill page
const animater3=document.querySelector('.animation3')
// animater 4 -> for form section of contact page
const animater4=document.querySelector('.animation4')

// window events for animation ->> started
 window.addEventListener('scroll',()=>{
    if(window.scrollY >=400)
    {
        animater1.classList.replace('animation1','animate2');
    }
 })
 window.addEventListener('scroll',()=>{
    if(window.scrollY >= 450)
    {
        animater2.classList.replace('animation2','animate3')
    }
 })
 window.addEventListener('scroll',()=>{
   if(window.scrollY >= 1000)
   {
    animater3.classList.replace('animation3','animate4')
   }
 })
 window.addEventListener('scroll',()=>{
    if(window.scrollY >= 1800)
    {
        animater4.classList.replace('animation4','animate5');
    }
 })

let html=document.querySelector('#html');
let css=document.querySelector('#css');
let java=document.querySelector('#java');
let cpp=document.querySelector('#cpp');
let c=document.querySelector('#C');
let counterhtml=0,countercss=0,counterjava=0,countercpp=0,counterc=0;
let timerhtml,timercss,timerjava,timercpp,timerC;

timerhtml=setInterval(()=>{
    counterhtml++;
    if(counterhtml==70)
    {
        clearTimeout(timerhtml);
    }
    html.innerHTML=': '+counterhtml+'%';
},40)

timercss=setInterval(()=>{
    countercss++;
    if(countercss==65)
    {
        clearTimeout(timercss);
    }
    css.innerHTML=': '+countercss+'%';
},40)

timerjava=setInterval(()=>{
    counterjava++;
    if(counterjava==40)
    {
        clearTimeout(timerjava);
    }
    java.innerHTML=': '+counterjava+'%';
},40)

timercpp=setInterval(()=>{
    countercpp++;
    if(countercpp==65)
    {
        clearTimeout(timercpp);
    }
    cpp.innerHTML=': '+countercpp+'%';
},40)

timerC=setInterval(()=>{
    counterc++;
    if(counterc==70)
    {
        clearTimeout(timerC);
    }
    c.innerHTML=': '+counterc+'%';
},40)
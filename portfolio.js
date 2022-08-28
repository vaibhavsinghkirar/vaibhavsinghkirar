const sp = document.querySelectorAll('span');
setInterval(()=>{
    for(let i=0;i<sp.length;i++){
        sp[i].style.color = rand();
    }
},200)

function rand(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r} ,${g}, ${b})`;
}
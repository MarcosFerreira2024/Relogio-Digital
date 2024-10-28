let hours=document.querySelector('.hours')
let minutes=document.querySelector('.minutes')
let seconds=document.querySelector('.seconds')

setInterval(() => {
    hours.innerHTML=new Date().toString().slice(16,18)
    minutes.innerHTML=new Date().toString().slice(19,21)
    seconds.innerHTML=new Date().toString().slice(22,24)
    
}, 500);




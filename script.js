// [Digital clock]

let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
setInterval(()=>{
    let a=new Date();
    hrs.innerHTML = a.getHours();
    min.innerHTML = a.getMinutes();
    sec.innerHTML = a.getSeconds();
},1000);

// [background color change]

const button = document.querySelector('#but1');

button.addEventListener('click',change);

function change(){

    //[first attempt]
    // document.querySelector('main').style.background='#808080';
    // document.querySelector("h3").style.color="white";
    // document.querySelector('.mtxt').style.color = "white";

    const get=document.querySelector('main');
    get.classList.toggle('change');

    const get2=document.querySelector('h3');
    get2.classList.toggle('change2');

    const get3=document.querySelector('.mtxt');
    get3.classList.toggle('change3');

    alert("Changed theme successfully !");
}
const inputs=document.querySelectorAll('input');
const enddate="15 Jan 2023 03:00 PM";
document.getElementById('enddate').innerText=enddate;
const clock=()=>{
    const actual=new Date(enddate);
    const now=new Date();
    const diff=((actual-now)/1000);
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%60);
    inputs[2].value=Math.floor((diff/60)%60);
    inputs[3].value=Math.floor((diff)%60);
}

setInterval(()=>{
clock();
},1000)
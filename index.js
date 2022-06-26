setInterval(() => {
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
a=new Date();
let date= a.toLocaleDateString(undefined,options);
let time= a.getHours() +':'+ a.getMinutes() +':' +a.getSeconds();
document.getElementById('time').innerHTML= time + " on " + date;
}, 1000);
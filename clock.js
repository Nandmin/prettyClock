setInterval(()=>{
    clock();
});


function clock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am =  new Date().getHours() >= 12 ? "PM" : "AM";

    // Convert time to AM/PM
    if (h > 12) 
        {
            h  = h - 12;
        }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let hours = document.getElementById('hours').innerHTML = h;
    let minutes = document.getElementById('minutes').innerHTML = m;
    let seconds = document.getElementById('seconds').innerHTML = s;
    let amPm = document.getElementById('ampm').innerHTML = new Date().getHours() >= 12 ? "PM" : "AM";

}
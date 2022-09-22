setInterval(()=>{
    clock();
});


function clock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am =  new Date().getHours() >= 12 ? "PM" : "AM";

    let hide = document.getElementById('timeFormat').innerText
    document.getElementById('timeFormat').style.display = 'none';

    if (hide == 24) {
        document.getElementById('ampm').style.display = 'none';
        let hh = document.getElementById('hh').style.strokeDashoffset = 440 - (440 * h) / 24;
    }
    else
    {
        // Convert time to AM/PM
        if (h > 12) 
            {
                h  = h - 12;
            }
            document.getElementById('ampm').style.display = 'flex';
            let hh = document.getElementById('hh').style.strokeDashoffset = 440 - (440 * h) / 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let hours = document.getElementById('hours').innerHTML = h + "<br><span>Hours</span>";
    let minutes = document.getElementById('minutes').innerHTML = m + "<br><span>Minutes</span>";
    let seconds = document.getElementById('seconds').innerHTML = s + "<br><span>Seconds</span>";
    let amPm = document.getElementById('ampm').innerHTML = new Date().getHours() >= 12 ? "PM" : "AM";

    let hh = document.getElementById('hh').style.strokeDashoffset = 440 - (440 * m) / 12;
    let mm = document.getElementById('mm').style.strokeDashoffset = 440 - (440 * m) / 60;
    let ss = document.getElementById('ss').style.strokeDashoffset = 440 - (440 * s) / 60;

    // fok / max óra (am esetében 12) = rotate vagyis 360 / 12 = 30
    let hr_dot = document.querySelector('.hr_dot').style.transform = `rotate(${h * 30}deg)`;
    let min_dot = document.querySelector('.min_dot').style.transform = `rotate(${m * 6}deg)`;
    let sec_dot = document.querySelector('.sec_dot').style.transform = `rotate(${s * 6}deg)`;

    

}
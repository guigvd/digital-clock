

const clock = setInterval(function time() {
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();



    if (hr < 10) hr = '0' + hr;
    if (mn < 10) mn = '0' + mn;
    if (sc < 10) sc = '0' + sc;

    hours.innerHTML = hr;
    minutes.textContent = mn;
    seconds.innerHTML = sc;
})
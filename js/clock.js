let clock = document.querySelector('h2');

function getClock() {
    let date = new Date();
    const hour = String(date.getHours()).padStart(2, 0);
    const min = String(date.getMinutes()).padStart(2, 0);
    const sec = String(date.getSeconds()).padStart(2, 0);

    clock.innerText = `${hour}:${min}:${sec}`;
}
setInterval(getClock, 1000);

// padStart를 사용하려면 문자열이어야 사용이 가능

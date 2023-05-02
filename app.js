const hours = document.querySelectorAll('.hour');
const minutes = document.querySelectorAll('.minute');
const seconds = document.querySelectorAll('.second');

function updateTime() {
    const realTime = new Date();
    let getHours = realTime.getHours()
    let getMinutes = realTime.getMinutes()
    let getSeconds = realTime.getSeconds()

    hours[0].style.transform = `rotate(${getHours * 360 / 12}deg)`
    minutes[0].style.transform = `rotate(${getMinutes * 360 / 60}deg)`
    seconds[0].style.transform = `rotate(${getSeconds * 360 / 60}deg)`

    hours[1].innerText = `${String(getHours).padStart(2, 0)}:`
    minutes[1].innerText = `${String(getMinutes).padStart(2, 0)}:`
    seconds[1].innerText = `${getSeconds}`.padStart(2, 0)
}
setInterval(updateTime, 500)

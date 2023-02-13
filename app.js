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
    function checkTime() {
        function checkTimeHour() {
            if (getHours < 10) {
                getHours = "0" + getHours
            } return getHours
        }
        function checkTimeMinute() {
            if (getMinutes < 10) {
                getMinutes = "0" + getMinutes
            } return getMinutes
        }
        function checkTimeSecond() {
            if (getSeconds < 10) {
                getSeconds = "0" + getSeconds
            } return getSeconds
        }
        checkTimeHour();
        checkTimeMinute();
        checkTimeSecond()
    }
    checkTime()

    hours[1].innerText = `${getHours}:`
    minutes[1].innerText = `${getMinutes}:`
    seconds[1].innerText = getSeconds
}
setInterval(updateTime, 500)

const days = document.querySelector('.inner-time .days')
const hours = document.querySelector('.inner-time .hours')
const message = document.querySelector('.inner-time p')

const date = new Date();
const currentDay = date.getDate();
const currentHour = date.getHours();

const alarm = new Audio('alarm.mp3');

days.classList.remove('hide');
hours.classList.remove('hide');

function handleSetDate() {
    if (currentDay === 2) {
        days.classList.add('hide');
        hours.classList.add('hide');
        message.textContent = 'Hoje é dia 2 camaradas!!!';
        message.style.fontSize = '18px';

        alarm.play();
    } else {
        let daysLeft;
        let hoursLeft;

        daysLeft = 30 - currentDay + 2;
        hoursLeft = 24 - currentHour;

        if (currentDay === 1) daysLeft = currentDay;

        days.innerHTML = `${daysLeft} dias`;
        hours.innerHTML = `${hoursLeft} horas`
    }
}

setInterval(() => {
    handleSetDate();
}, 3600000)

handleSetDate();
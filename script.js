const countdownDisplay = document.getElementById('countdown-display');
const countdownButton = document.getElementById('countdown-start');

countdownButton.addEventListener('click', () => {
    const countdownInput = document.getElementById('countdown-input');
    const selectedDateTime = new Date(countdownInput.value).getTime();

    if (isNaN(selectedDateTime)) {
        alert('Please select a valid date and time');
        return;
    }
    
    if (selectedDateTime < Date.now()) {
        alert('Please select a future date and time');
        return;
    }

    const interval = setInterval(() => { 
        const remainingTime =  selectedDateTime - new Date().getTime()
        if (remainingTime <= 0) {
            clearInterval(interval);
            alert('Time is up!');
            countdownDisplay.innerHTML = '00:00:00';
            return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)).toString();
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000).toString().padStart(2, '0');

        countdownDisplay.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
    }, 1000);

});
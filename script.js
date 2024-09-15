const timeElement = document.getElementById("digital-time");
// Get the clock face elements
const clockFace = document.querySelector('.clock-face');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
    function updateTime() {
        
        const date = new Date();

        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        //Get the current time (housr, minutes, seconds)
        hours = date.getHours().toString().padStart(2, "0");
        minutes = date.getMinutes().toString().padStart(2, "0");
        seconds = date.getSeconds().toString().padStart(2, "0");

        //Update the time display in the HTML
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;


         // Convert hours to 12-hour format for the analog clock
        const analogHours = hours % 12;

        // Update the hour hand
        const hourAngle = (analogHours * 30) + (minutes * 0.5);
        hourHand.style.transform = `rotate(${hourAngle}deg)`;

        // Update the minute hand
        const minuteAngle = (minutes * 6) + (seconds * 0.1);
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;

        // Update the second hand
        const secondAngle = seconds * 6;
        secondHand.style.transform = `rotate(${secondAngle}deg)`;
    }

    //update the time every second
    setInterval(updateTime, 1000);


    //Run the function once when the page loads
    updateTime();


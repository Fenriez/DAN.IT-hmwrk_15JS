document.addEventListener('DOMContentLoaded', () => {
    let timer_block = document.getElementById('timer'),
        trigger_button = document.getElementById('trigger'),
        reset_button = document.getElementById('reset'),
        timer = false,
        startTime = 0,
        currentTime = 0,
        elapsedTime = 0;

    trigger_button.addEventListener('click', triggerTimer);
    reset_button.addEventListener('click', reset);

    function triggerTimer() {
        console.log(timer);
        if (!timer) {
            if (startTime == 0) {
                startTime = new Date();
            } else {
                startTime = new Date(startTime);
            }
            timer = setInterval(() => {
                currentTime = new Date();
                elapsedTime = new Date(currentTime - startTime);
                timer_block.innerText = `${elapsedTime.getMinutes()}:${elapsedTime.getSeconds()}:${elapsedTime.getMilliseconds()}`;
            }, 1);
            trigger_button.innerText = 'STOP';
        } else {
            startTime = +startTime + +elapsedTime;
            timer = clearInterval(timer);
            trigger_button.innerText = 'START';
        }
    };

    function reset() {
        if (startTime != 0) {
            timer = clearInterval(timer);
            startTime = 0;
            timer_block.innerText = '00:00:000';
        }
    }
});
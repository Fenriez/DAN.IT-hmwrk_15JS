document.addEventListener('DOMContentLoaded', () => {
    let timer_block = document.getElementById('timer'),
        trigger_button = document.getElementById('trigger'),
        reset_button = document.getElementById('reset'),
        timer = 0,
        startTime = 0,
        currentTime = 0,
        showTime = 0,
        elapsedTime = 0,
        currentInterval = 0;

    trigger_button.addEventListener('click', triggerTimer);
    reset_button.addEventListener('click', reset);

    function triggerTimer() {
        if (!timer) {
            startTime = new Date();
            timer = setInterval(() => {
                currentTime = new Date();
                currentInterval = (currentTime - startTime);
                showTime = currentInterval + elapsedTime;
                showTime = new Date(showTime);
                timer_block.innerText = `${showTime.getMinutes()}:${showTime.getSeconds()}:${showTime.getMilliseconds()}`;
            }, 1);
            trigger_button.innerText = 'STOP';
        } else {
            clearInterval(timer);
            timer = 0;
            elapsedTime += currentInterval;
            trigger_button.innerText = 'START';
        }
    };

    function reset() {
        if (startTime != 0) {
            clearInterval(timer);
            timer = 0;            
            startTime = elapsedTime = 0;
            timer_block.innerText = '00:00:000';
        }
    }
});


// Gmail
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const gmailRegExp =/^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailButton.addEventListener('click', ()=>{
    if (gmailRegExp.test(gmailInput.value)) {
        gmailSpan.innerHTML='Валидный Gmail адрес'
        gmailSpan.style.color='green'
    }else{
        gmailSpan.innerHTML='Невалидный Gmail адрес'
        gmailSpan.style.color='red'
    }
})
document.addEventListener("DOMContentLoaded", function() {
    const redSquare1 = document.querySelector(".child_block");
    const redSquare2 = document.querySelector(".child_block2");
    const parentBlock = document.querySelector(".parent_block");
    const parentWidth = parseInt(getComputedStyle(parentBlock).width, 10);
    const parentHeight = parseInt(getComputedStyle(parentBlock).height, 10);
    const squareWidth = parseInt(getComputedStyle(redSquare1).width, 10);
    const squareHeight = parseInt(getComputedStyle(redSquare1).height, 10);

    let x1 = Math.random() * (parentWidth - squareWidth);
    let y1 = Math.random() * (parentHeight - squareHeight);
    let speedX1 = (Math.random() * 4 - 2); // случайная скорость от -2 до 2
    let speedY1 = (Math.random() * 4 - 2);

    let x2 = Math.random() * (parentWidth - squareWidth);
    let y2 = Math.random() * (parentHeight - squareHeight);
    let speedX2 = (Math.random() * 2 - 1);
    let speedY2 = (Math.random() * 2 - 1);

    function moveSquare(square, x, y, speedX, speedY) {
        x += speedX;
        y += speedY;

        // Проверяем, не выходит ли квадрат за пределы родительского блока,
        // и меняем направление, если он достигает границ
        if (x <= 0 || x >= parentWidth - squareWidth) {
            speedX *= -1;
        }
        if (y <= 0 || y >= parentHeight - squareHeight) {
            speedY *= -1;
        }

        square.style.left = x + "px";
        square.style.top = y + "px";

        return { x, y, speedX, speedY };
    }

    function checkCollision(x1, y1, x2, y2) {
        const dx = x1 - x2;
        const dy = y1 - y2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < squareWidth;
    }

    function animate() {
        const result1 = moveSquare(redSquare1, x1, y1, speedX1, speedY1);
        x1 = result1.x;
        y1 = result1.y;
        speedX1 = result1.speedX;
        speedY1 = result1.speedY;

        const result2 = moveSquare(redSquare2, x2, y2, speedX2, speedY2);
        x2 = result2.x;
        y2 = result2.y;
        speedX2 = result2.speedX;
        speedY2 = result2.speedY;

        if (checkCollision(x1, y1, x2, y2)) {
            // Если квадратики столкнулись, меняем направление движения обоих
            speedX1 *= -1;
            speedY1 *= -1;
            speedX2 *= -1;
            speedY2 *= -1;
        }

        requestAnimationFrame(animate);
    }

    animate();
});



document.addEventListener('DOMContentLoaded', function () {
    const parentContainer = document.querySelector('.container');
    const secondsElement = document.getElementById('seconds');
    const timeBlock = document.querySelector('.time_block');
    const resultContainer = document.createElement('div');
    resultContainer.id = 'resultContainer';
    timeBlock.appendChild(resultContainer);

    const resultMessageElement = document.createElement('div');
    resultMessageElement.id = 'resultMessage';
    resultContainer.appendChild(resultMessageElement);

    const SuccessButton = document.createElement('button');
    SuccessButton.textContent = 'Успел';
    SuccessButton.classList.add('btn');
    SuccessButton.style.display = 'none';

    const FailureButton = document.createElement('button');
    FailureButton.textContent = 'Не успел';
    FailureButton.classList.add('btn');
    FailureButton.style.display = 'none';

    const resultButtonsContainer = document.createElement('div');
    resultButtonsContainer.id = 'resultButtons';
    resultContainer.appendChild(resultButtonsContainer);

    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let timer;
    let seconds = 0;
    let timeIsUp = false;

    function updateTimer() {
        secondsElement.textContent = seconds;
        seconds++;

        if (seconds > 45) {
            stopTimer();
            showResultButtons();
        }
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(updateTimer, 10);
            startButton.disabled = true;
            stopButton.disabled = false;
            resetButton.disabled = false;
        }
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = false;
    }

    function resetTimer() {
        stopTimer();
        seconds = 0;
        updateTimer();
        startButton.disabled = false;
        resetButton.disabled = true;
        resultContainer.innerHTML = '';
        SuccessButton.style.display = 'none';
        FailureButton.style.display = 'none';
        timeIsUp = false;
    }

    function showResultButtons() {
        resultMessageElement.textContent = 'Время вышло! Выберите результат:';
        SuccessButton.style.display = 'inline-block';
        resultButtonsContainer.appendChild(SuccessButton);
        FailureButton.style.display = 'inline-block';
        resultButtonsContainer.appendChild(FailureButton);
        timeIsUp = true;
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

    SuccessButton.addEventListener('click', function () { showResult('Успел'); });
    FailureButton.addEventListener('click', function () { showResult('Не успел'); });

    function showResult(result) {
        resultMessageElement.textContent = `Результат: ${result}`;
        secondsElement.style.color = result === 'Успел' ? 'green' : 'red';
        resetButton.disabled = false;
        SuccessButton.style.display = 'none';
        FailureButton.style.display = 'none';
        timeIsUp = false;
    }
});

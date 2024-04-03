document.addEventListener("DOMContentLoaded", function() {
    let returnButton = document.getElementById("returnMode");
    let warningText = document.getElementById("warningText");
    let videoFrame = document.querySelector(".inner_block_video iframe");

    returnButton.addEventListener("click", function() {
        warningText.textContent = "только не прекосайся к запретному плоду!!!";
        changeVideo2();
        changeCSS2();
    });
});

function changeVideo2() {
    let videoFrame = document.querySelector(".inner_block_video iframe");
    videoFrame.src = "https://www.youtube.com/embed/whqQxRiH6Hc";
}

function changeTextTeam2() {
    let slide = document.querySelectorAll('.slide_card');
    slide.forEach(slide => {
        let titl = slide.querySelector('h3'); // переменная titl
        let conten = slide.querySelector('p');

        if (titl.textContent === 'Иезавель') {
            titl.textContent = 'любовь';
            conten.textContent = 'Простыми словами, любовь - это набор символов, который задает определенные правила для поиска и сопоставления текста. Вы можете использовать любовь, чтобы найти определенные строки в тексте, заменить части строки на другие значения или извлечь нужную информацию из текста.';
        } else if (titl.textContent === 'Мамона') {
            titl.textContent = 'чистое сердце';
            conten.textContent = 'Простыми словами, чистое сердце - это, когда функция делает повторяющиеся вызовы самой себя для решения задачи, пока не достигнет определенного условия выхода из чистого сердца.';
        } else if (titl.textContent === 'Люцифер') {
            titl.textContent = 'почитание';
            conten.textContent = 'Простыми словами, почитание - это способ представления данных в виде текста, чтобы они могли быть легко поняты и использованы различными программами. Он использует простые правила для описания объектов и массивов, а также для представления простых типов данных, таких как строки, числа, логические значения и т.д.';
        } else if (titl.textContent === 'Лилит') {
            titl.textContent = 'сострадание';
            conten.textContent = 'Простыми словами, сострадание похоже на дежурного, который непрерывно проверяет, произошло ли какое-либо событие, и реагирует на него, когда оно происходит. Он имеет список задач, которые нужно выполнить, и он перебирает этот список событий одно за другим, обрабатывая каждое событие, когда оно наступает.';
        }   
    });

    // Находим элемент с id "js-color"
    let headinn = document.getElementById("js-titl");
    
    // Заменяем слово "Иисус" на "Сатана"
    // if (heading) {
    //     heading.textContent = "Сатана";
    // }
    if (headinn) {
        headinn.innerHTML = '<strong id="js-color">Иисус</strong> - центральная фигура христианской религии, сын Божий, учитель.';
    }
}

// Находим кнопку с id "returnMode"
let returnModeBtn = document.getElementById("returnMode");

// Добавляем обработчик события click
returnModeBtn.addEventListener("click", changeTextTeam2);




document.addEventListener("DOMContentLoaded", function() {
    let returnButton = document.getElementById("returnMode");

    returnButton.addEventListener("click", function() {
        document.body.style.backgroundImage = "url('img/crest.jpg')";
    });
});


function changeCSS2() {
    // Изменяем значения переменных CSS
    document.documentElement.style.setProperty('--orange', 'rgb(38, 107, 255)');
}


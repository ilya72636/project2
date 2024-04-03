document.addEventListener("DOMContentLoaded", function() {
    let switchButton = document.getElementById("switchMode");
    let warningText = document.getElementById("warningText");
    let videoFrame = document.querySelector(".inner_block_video iframe");

    switchButton.addEventListener("click", function() {
        warningText.textContent = "прошу вернись на правильный путь";
        changeText(); // вызываем функцию changeText() после нажатия на кнопку
        changeVideo();
        changeCSS();
    });

});
function changeVideo() {
    let videoFrame = document.querySelector(".inner_block_video iframe");
    videoFrame.src = "https://www.youtube.com/embed/Nvae347QZJc";
}


function changeText() {
    let slides = document.querySelectorAll('.slide_card');
    slides.forEach(slide => {
        let title = slide.querySelector('h3');
        let content = slide.querySelector('p');

        if (title.textContent === 'любовь') {
            title.textContent = 'Иезавель';
            content.textContent = 'Простыми словами, Иезавель - это символ злобы и разврата, часто ассоциируемый с женщиной, стремящейся к власти и использующей свои прелести для достижения своих целей.';
        } else if (title.textContent === 'чистое сердце') {
            title.textContent = 'Мамона';
            content.textContent = 'Простыми словами, Мамона - это символ богатства, материальных благ и соблазна деньгами, часто ведущий к забвению духовных ценностей и духовного роста.';
        } else if (title.textContent === 'почитание') {
            title.textContent = 'Люцифер';
            content.textContent = 'Простыми словами, Люцифер - это символ падшего ангела, восставшего против Бога, обычно ассоциируемый с силами зла, гордостью и непокорством.';
        } else if (title.textContent === 'сострадание') {
            title.textContent = 'Лилит';
            content.textContent = 'Простыми словами, Лилит - это символ женской демонической сущности, часто ассоциируемой с искушением, развратом и соблазном.';
        }
    });

    
    let heading = document.getElementById("js-color");
    let headinn = document.getElementById("js-titl");
    
    // Заменяем слово "Иисус" на "Сатана"
    // if (heading) {
    //     heading.textContent = "Сатана";
    // }
    if (headinn) {
        headinn.innerHTML = '<strong id="js-color">Сатана</strong> - центральная фигура некоторых религиозных убеждений, воплощение зла, соперник Бога, обманщик.';
    }
}




document.addEventListener("DOMContentLoaded", function() {
    let switchButton = document.getElementById("switchMode");
    let returnButton = document.getElementById("returnMode");
    let appleButton = document.querySelector(".apple");
    let crossButton = document.querySelector(".cross");

    // Обработчик события для кнопки "apple"
    switchButton.addEventListener("click", function() {
        // Скрываем кнопку "apple"
        appleButton.style.display = "none";
        // Показываем кнопку "cross"
        crossButton.style.display = "block";
    });

    // Обработчик события для кнопки "cross"
    returnButton.addEventListener("click", function() {
        // Скрываем кнопку "cross"
        crossButton.style.display = "none";
        // Показываем кнопку "apple"
        appleButton.style.display = "block";
    });
});




document.addEventListener("DOMContentLoaded", function() {
    let switchButton = document.getElementById("switchMode");

    switchButton.addEventListener("click", function() {
        document.body.style.backgroundImage = "url('../img/ad.jpeg')";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let switchButto = document.getElementById("switchMode");

    switchButto.addEventListener("click", function() {
        document.body.style.backgroundImage = "url('/project/img/ad.jpeg')";
    });
});

function changeCSS() {
    // Изменяем значения переменных CSS
    document.documentElement.style.setProperty('--orange', 'rgb(75, 1, 1)');
}


// document.addEventListener("DOMContentLoaded", function() {
//     function setupThemeSwitcher() {
//         const bodyElement = document.querySelector('body');
//         const storedTheme = localStorage.getItem('theme');

//         if (storedTheme) {
//             bodyElement.classList.add(storedTheme);
//         }

//         document.getElementById('switchMode').addEventListener('click', function () {
//             bodyElement.classList.remove('light');
//             bodyElement.classList.add('dark');
//             localStorage.setItem('theme', 'dark');
//         });

//         document.getElementById('returnMode').addEventListener('click', function () {
//             bodyElement.classList.remove('dark');
//             bodyElement.classList.add('light');
//             localStorage.setItem('theme', 'dark');
//         });
//     }

//     setupThemeSwitcher();
// });



// document.addEventListener("DOMContentLoaded", function() {
//     let switchButton = document.getElementById("switchMode");
//     let crossElement = document.querySelector(".cross");

//     switchButton.addEventListener("click", function() {
//         // Проверяем, если у элемента класс cross, то убираем его, иначе добавляем
//         if (crossElement.classList.contains("cross")) {
//             crossElement.classList.remove("cross");
//         } else {
//             crossElement.classList.add("cross");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let switchButton = document.getElementById("switchMode");
//     let crossElement = document.querySelector(".cross");

//     // Проверяем, если в localStorage есть сохраненное состояние элемента
//     const crossElementState = localStorage.getItem('crossElementState');
//     if (crossElementState === 'cross') {
//         crossElement.classList.add("cross"); // Добавляем класс "cross"
//     }

//     switchButton.addEventListener("click", function() {
//         // Проверяем, если у элемента класс cross, то убираем его, иначе добавляем
//         if (crossElement.classList.contains("cross")) {
//             crossElement.classList.remove("cross");
//             // Сохраняем текущее состояние элемента в localStorage
//             localStorage.setItem('crossElementState', '');
//         } else {
//             crossElement.classList.add("cross");
//             // Сохраняем текущее состояние элемента в localStorage
//             localStorage.setItem('crossElementState', 'cross');
//         }
//     });
// });



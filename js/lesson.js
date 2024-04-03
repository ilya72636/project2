const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'ok';
        phoneSpan.style.color = 'green';
    } else {
        phoneSpan.innerHTML = 'not ok';
        phoneSpan.style.color = 'red';
    }
});

const slides = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsPares = document.querySelector('.tab_content_items');
let index = 0;
let intervalId;

const hideTabContent = () => {
    slides.forEach((content) => {
        content.style.display = 'none';
    });
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    slides[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent(index);

const autoSlider = () => {
    intervalId = setInterval(() => {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        hideTabContent();
        showTabContent(index);
    }, 3000);
};

autoSlider();

tabsPares.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent();
                showTabContent(tabIndex);
                index = tabIndex;
                clearInterval(intervalId);
                autoSlider();
            }
        });
    }
};

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const convertAndDisplay = async (input, currency) => {
    try {
        const response = await fetch('../data/conventor.json');
        if (!response.ok) {
            throw new Error('Failed to fetch currency conversion data');
        }
        const data = await response.json();
        switch (currency) {
            case 'som':
                usdInput.value = (input.value / data.usd).toFixed(2);
                eurInput.value = (input.value / data.eur).toFixed(2);
                break;
            case 'usd':
                somInput.value = (input.value * data.usd).toFixed(2);
                eurInput.value = (somInput.value / data.eur).toFixed(2);
                break;
            case 'eur':
                somInput.value = (input.value * data.eur).toFixed(2);
                usdInput.value = (somInput.value * data.usd).toFixed(2);
                break;
            default:
                break;
        }
    } catch (error) {
        console.error('Error converting and displaying currency:', error);
    }
};

somInput.addEventListener('input', () => {
    convertAndDisplay(somInput, 'som');
});

usdInput.addEventListener('input', () => {
    convertAndDisplay(usdInput, 'usd');
});

eurInput.addEventListener('input', () => {
    convertAndDisplay(eurInput, 'eur');
});

const cardBloz = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let currentCard = 1;

const loadCardData = async (cardNumber) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`);
        if (!response.ok) {
            throw new Error('Failed to fetch card data');
        }
        const data = await response.json();
        cardBloz.innerHTML = `
            <p>${data.title}</p>
            <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (error) {
        console.error('Error fetching card data:', error);
    }
};

const goToCard = async (cardNumber) => {
    if (cardNumber === 0) {
        currentCard = 200;
    } else if (cardNumber === 201) {
        currentCard = 1;
    } else {
        currentCard = cardNumber;
    }
    loadCardData(currentCard);
};

loadCardData(currentCard);

btnPrev.addEventListener('click', () => goToCard(currentCard - 1));
btnNext.addEventListener('click', () => goToCard(currentCard + 1));

const searchInput = document.querySelector('.cityName');
const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temp');

const API_KEY = 'e417df62e04d3b1b111abeab19cea714';
const url = 'http://api.openweathermap.org/data/2.5/weather';
let timeoutId;

const citySearch = async (searchValue) => {
    try {
        const response = await fetch(`${url}?q=${searchValue}&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        cityElement.innerHTML = data.main ? data.name : 'Город не найден...';
        tempElement.innerHTML = data.main?.temp ?
            Math.round(data.main?.temp - 273) + '&deg;C' :
            '...';
    } catch (error) {
        console.error('Error fetching weather data:', error);
        cityElement.innerHTML = 'Город не найден...';
        tempElement.innerHTML = '...';
    }
};

searchInput.addEventListener('input', (event) => {
    const searchValue = event.target.value.trim();
    clearTimeout(timeoutId); // Отменяем предыдущий запрос, если он есть
    timeoutId = setTimeout(() => {
        if (searchValue) {
            citySearch(searchValue);
        } else {
            cityElement.innerHTML = 'Введите название города';
            tempElement.innerHTML = '...';
        }
    }, 500); // Задержка между вводами
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const searchValue = event.target.value.trim();
        clearTimeout(timeoutId);
        if (searchValue) {
            citySearch(searchValue);
        } else {
            cityElement.innerHTML = 'Введите название города';
            tempElement.innerHTML = '...';
        }
    }
});


















fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsData => {
        console.log("Posts data:", postsData);
    })
    .catch(error => {
        console.error('Error fetching posts data:', error);
    });



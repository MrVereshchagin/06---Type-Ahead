const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint) // отправляю запрос на сервер по присвоенной переменной ссылке на сервер
    .then(blob => blob.json()) // "затем" осуществляется функция по трансформации полученного строкового представления в JSON. Это промис, то есть выполняется после метода fetch. Правильно ли я понимаю промисы?
    .then(data => cities.push(...data)); // затем (опять промис, то есть выполняется после предыдущего) полученную информацию в формате JSON я пушу в массив cities. data со spread оператором, который позволяет отправлять искомые значения в массив

function findMatches(wordToMatch, cities) {
    return cities.filter(place => { // применяю метод фильтр к полученному выше свойству json объекта cities
        const regex = new RegExp(wordToMatch, 'gi'); // с помощью регулярного выражения ищу совпадение искомого текста в нижеуказанных свойствах объектов json city и state, с помощью метода match(), который ищет совпадения в тексте
        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayMatches() {
    console.log(this.value);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', findMatches);


/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

"use strict";

let numberOfFilms;

function startWork() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

startWork();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    const numQuestion = 2;
    for (let i = 0; i < numQuestion; i++) {
        const question1 = prompt("Один из последних просмотренных фильмов?", ''),
        question2 = prompt("На сколько оцените его?", '');
        if (question1 == null || question1 == '' || question1.length >= 50 || 
        question2 == null || question2 == '' || question2.length >= 50) {
            console.log("Error");
            i--;
        }
        else {
            personalMovieDB.movies[question1] = question2;
        }   
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }
    else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером: ${i}`);
    }
}

writeYourGenres();
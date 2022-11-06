/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    startWork: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {   
        const numQuestion = 2;
        for (let i = 0; i < numQuestion; i++) {
            const question1 = prompt("Один из последних просмотренных фильмов?", '').trim(),
            question2 = prompt("На сколько оцените его?", '').trim();
            if (question1 == null || question1 == '' || question1.length >= 50 || 
            question2 == null || question2 == '' || question2.length >= 50) {
                console.log("Error");
                i--;
            }
            else {
                personalMovieDB.movies[question1] = question2;
            }   
        }
    },

    detectPersonalLevel: function() {
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
    },

    showDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    
    writeYourGenres: function() {
        for (let i = 1; i <= 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером: ${i}`).trim();

            if (genre == '' || genre == null) {
                genre = prompt(`Ваш любимый жанр под номером: ${i}`).trim();
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }      
    } 
};

personalMovieDB.startWork();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
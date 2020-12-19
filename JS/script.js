/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

'use strict';
let numbeOfFilm;
function start()  {
    const numbeOfFilm = +prompt("Сколько фильмов Вы уже просмотрели?");
    while(numbeOfFilm == '' || numbeOfFilm==null || isNaN(numbeOfFilm) ) {
        const numbeOfFilm = +prompt("Сколько фильмов Вы уже просмотрели?");
    }
}

start();
const personalMoveDB= {
    count: numbeOfFilm,
    moves: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms()  {
    for (let i=0; i<2; i++) {
        const   a=prompt("Один из последних просмотренных фильмов", ""),
                b=prompt("На сколько оцените его", "") ;
    
        if (a !=null && a!='' && b !=null && b!='' && a.length < 50) {
            personalMoveDB.moves[a]=b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }

}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoveDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMoveDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoveDB);
    }
}
showMyDB(personalMoveDB.prvat);

function writeYourGenres() {

    
}
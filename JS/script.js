const numbeOfFilm =+prompt("Сколько фильмов Вы уже просмотрели?");
const personalMoveDB= {
    count: numbeOfFilm,
    moves: {},
    actors: {},
    genres: [],
    privat: false
};

const   a=prompt("Один из последних просмотренных фильмов", " "),
        b=prompt("На сколько оцените его", " "),
        c=prompt("Один из последних просмотренных фильмов", " "),
        d=prompt("На сколько оцените его", " ");

        personalMoveDB.moves[a]=b;
        personalMoveDB.moves[c]=d;
        
console.log(personalMoveDB);
        

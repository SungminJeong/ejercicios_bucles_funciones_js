const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
];

  // Añade tu código de bucle aquí
const movieList = []
let obj = {}
const arr1970 = []
const arr1980 = []
const arr1990 = []
const arr2000 = []

for(const movie of starWarsMovies){
    if(movie.releaseYear < 1980){
        arr1970.push(movie.title)
    } else if(movie.releaseYear >= 1980 && movie.releaseYear < 1990){
        arr1980.push(movie.title)
    } else if(movie.releaseYear >=1990 && movie.releaseYear < 2000){
        arr1990.push(movie.title)
    } else if(movie.releaseYear >= 2000){
        arr2000.push(movie.title)
    }
}
obj["1970"] = arr1970;
obj["1980"] = arr1980;
obj["1990"] = arr1990;
obj["2000"] = arr2000;
console.log(obj)
movieList.push(obj)
console.log(movieList)

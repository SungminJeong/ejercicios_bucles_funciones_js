const albums = [
    { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
    { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
    { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
    { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
    { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
    { title: 'Thriller', genre: 'Pop', duration: 42.19 },
    { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
    { title: 'The Wall', genre: 'Rock', duration: 81.00 },
    { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
    { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

  // Añade tu código de bucle aquí

let duraciones = 0;
for(const rock of albums){
    if(rock.genre === 'Rock'){
        duraciones += rock.duration;
    }
}

console.log("Duracion total de todos los álbumes de rock: " + duraciones + " minutos")  

/*
const rockAlbum = [];
for(const rock of albums){
    if(rock.genre === 'Rock'){
        rockAlbum.push(rock)
    }
}
console.log(rockAlbum);

const duraciones = rockAlbum.reduce((acc, duracion) => {
    return acc + duracion["duration"]
}, 0)
console.log("Duracion total de todos los álbumes de rock: " + duraciones);
*/

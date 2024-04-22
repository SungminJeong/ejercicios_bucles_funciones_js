const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Añade tu código de bucle aquí
const arr = [];
for(const track of tracks){
    arr.push(track.genre)
}
const result = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) +1;
    return acc
}, {})
console.log(result) //necesitamos 5 genres.

const metal = [];
const rock = [];
const pop = [];
const country = [];
const grunge = [];
const obj = {};

for(const track of tracks){
    if(track.genre === "Metal"){
        metal.push(track.title);
        obj.Metal = metal;
    } else if(track.genre === "Pop"){
        pop.push(track.title);
        obj.Pop = pop;
    } else if(track.genre === "Rock"){
        rock.push(track.title);
        obj.Rock = rock;
    } else if(track.genre === "Country"){
        country.push(track.title);
        obj.Country = country;
    } else if(track.genre === "Grunge"){
        grunge.push(track.title);
        obj.Grunge = grunge;
    }
}

console.log(obj);
console.log(obj.Rock)
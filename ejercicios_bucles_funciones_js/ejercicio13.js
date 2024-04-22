const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
    // insert code
    const newArr = [];
    const date = new Date();
    const year = date.getFullYear();
    //console.log(year)
    for(const actor of actors){
        newArr.push(actor)
    };
    for(const newActor of newArr){
        newActor.age = newActor.born;
        delete newActor.born;
        newActor.age = year - newActor.age;
    };
    console.log(newArr);
};

calculateActorsAges(actors);


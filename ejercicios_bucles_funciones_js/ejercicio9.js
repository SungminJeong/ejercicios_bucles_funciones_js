const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
    // insert code
    let arr = [];
    for(let i = 0; i < xMen.length; i++){
        arr.push(xMen[i].year);
    }
    const max = arr.indexOf(Math.min(...arr))
    console.log(`El miembro más antiguo es ${xMen[max].name}`)
    return xMen[max]
}
const oldest = findOldestXMen(xMen);
console.log(oldest)

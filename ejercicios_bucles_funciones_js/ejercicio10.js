const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};

function getCapital(country) {
    // insert code
    switch (country) {
        case "Spain":
            console.log(`The capital of ${country} is ${capitals.Spain}`)
            break;
        case "France":
            console.log(`The capital of ${country} is ${capitals.France}`)
            break;
        case "Italy":
            console.log(`The capital of ${country} is ${capitals.Italy}`)
            break;
        case "Germany":
            console.log(`The capital of ${country} is ${capitals.Germany}`)
            break;
        case "Portugal":
            console.log(`The capital of ${country} is ${capitals.Portugal}`)
            break;
        case "Poland":
            console.log(`The capital of ${country} is ${capitals.Poland}`)
            break;
        case "Greece":
            console.log(`The capital of ${country} is ${capitals.Greece}`)
            break;
        case "Austria":
            console.log(`The capital of ${country} is ${capitals.Austria}`)
            break;
        case "Hungary":
            console.log(`The capital of ${country} is ${capitals.Hungary}`)
            break;
        case "Ireland":
            console.log(`The capital of ${country} is ${capitals.Ireland}`)
            break;
        default:
            console.log("Erest tonto?")
            break;
    }
}

getCapital("Hungary");

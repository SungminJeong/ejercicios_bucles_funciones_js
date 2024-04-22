const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

  // Añade tu código de bucle aquí
for(let i = 0; i < artists.length; i++){
    let arr = []
    for(let j = 0; j < artists[i].influences.length; j++){
    arr.push(artists[i].influences[j])
    }
    console.log(`${artists[i].name}:`, arr)
}


/*
for(let i = 0; i < artists.length; i++){
    console.log(`${artists[i].name}:`)
    let arr = []
    for(let j = 0; j < artists[i].influences.length; j++){
    arr.push(artists[i].influences[j])
    console.log(arr[j])
    }
}
*/

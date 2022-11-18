// using for  loop
let a = ['Hydrogen', 'Hellium', 'Lithium', 'Berrylium', 'Boron', 'Carbon'];
for (let i = 0; i < a.length; i++) {
    console.log(`I am ${a[i]}`)
}


// using while loop 
let i = 0;
while (i < a.length) {
    console.log(`I am ${a[i]}`);
    i++;
}

// using for each loop
let b = a.forEach(x => {
    console.log(`I am ${x}`)
});

// op is same for all 
/*  'I am Hydrogen'
'I am Hellium'
'I am Lithium'
'I am Berrylium'
'I am Boron'
'I am Carbon' */


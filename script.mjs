//Part 1: Growing Pains

const radius = 5;
const PI = 3.1415;
const space = 0.8

const area = Math.round(PI * radius * radius);

console.log("Maxcapacity " , area);

//in a week
let growth1 = Math.round(area * space * 20);
console.log(growth1);
//let areaPlants = Math.round(20 * 0.8);

//in a 2 week 

let growth2 = Math.round(area * space * 20 *2);
console.log(growth2);

//in a 3 week

let growth3 = Math.round(area * space * 20 * 3);
console.log(growth3);

for (let i = 1 ; i <=3; i++){
    let areaPlants = Math.round(20*0.8*i);
    console.log(areaPlants);

    if(areaPlants >= 65){
        console.log("garden need to be Pruned");
    } else if (areaPlants > 40 && areaPlants < 65 ) {
        console.log("garden need to be monitored");
    } else console.log("garden need to be planted");
}




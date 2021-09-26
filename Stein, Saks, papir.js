// Dette programet skal kjøre eit stei, saks, papir

const choice = ['Stein', 'Saks', 'Papir'];
const player_choice = 'Stein';

function draw_choice(choice) {
    let pc_choice = choice[Math.floor(Math.random() * choice.lenght)];
    return pc_choice;
};
let pc_choice = draw_choice(choice);
console.log(pc_choice);
/*const player = choice => {return choice;
function player_choice(choice) {
    return choice};
    console.log(choice);
};*/


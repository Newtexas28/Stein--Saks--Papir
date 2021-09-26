// Dette programet skal kjøre eit stei, saks, papir

const choice = ['Stein', 'Saks', 'Papir'];
const player_choice = 'Stein';

function player_input(choice) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
       
      readline.question('Velg Stein, Saks, eller Papir: ', user_choice => {
        console.log(`Ditt valg er:  ${user_choice}!`);
        readline.close();
      });
    };

function draw_choice(choice) {
    const pc_choice = choice[Math.floor(Math.random() * choice.length)];
    return pc_choice;
};
let pc = draw_choice(choice);
console.log(pc);
let uc = player_input(choice);
console.log(uc);

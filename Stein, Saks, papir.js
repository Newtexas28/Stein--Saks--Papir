// Dette programet skal kjøre eit stei, saks, papir

const choice = ['Stein', 'Saks', 'Papir'];
const player_input = 'Stein';
const number_of_attempts = 5; 

/*function player_input(choice) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
       
      readline.question('Velg Stein, Saks, eller Papir: ', user_choice => {
        console.log(`Ditt valg er:  ${user_choice}!`);
        readline.close();
      });
    };
*/
function draw_choice(choice) {
    const pc_choice = choice[Math.floor(Math.random() * choice.length)];
    return pc_choice;
};

function play(choice, number) {
    not_finished = true;
    for (let i = 0; i < number; i++) {
        let pc = draw_choice(choice)
        let uc = player_input
        if (pc  === uc) {
            console.log(`Bruker: ${uc}, Pc: ${pc} uavgjort.`)
        }
        else if (pc === 'Stein' && uc === 'Saks') {
            console.log(`Bruker: ${uc}, Pc: ${pc} Pc vinner.`)
        } 
        else if (pc === 'Saks' && uc === 'Papir') {
            console.log(`Bruker: ${uc}, Pc: ${pc} Pc vinner.`)
        }
        else if (pc === 'Papir' && uc === 'Stein') {
            console.log(`Bruker: ${uc}, Pc: ${pc} Pc vinner.`)
        }
        else {
            console.log(`Bruker: ${uc}, Pc: ${pc} Bruker vinner.`)
        }
            
    }
}

let pc = draw_choice(choice);
console.log(pc);
let uc = player_input;
console.log(uc);



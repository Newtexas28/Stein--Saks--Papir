// Dette programet skal kjøre eit stei, saks, papir

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
// Pc-en trekke ein av verdien og leser inn verdien og funksjonen sjekker kven som har vunnet. Dette gjerast n gongar.
function play(choice, number, Cheet_code, user_choice) {
    not_finished = true;
    for (let i = 0; i < number; i++) {
        let pc = draw_choice(choice)
        // Den skal byttes ut med bruker inputt seinare.S
        let uc = user_choice;
        if (uc === Cheet_code) {
            console.log('Bruker vant med Cheet code');
            i = number;
            break;
        }
        if (pc === uc) {
            console.log(`Forsøk: ${i} Bruker: ${uc}, Pc: ${pc} uavgjort.`);
        }
        else if (pc === 'Stein' && uc === 'Saks') {
            console.log(`Forsøk: ${i} Bruker: ${uc}, Pc: ${pc} Pc vinner.`);
        } 
        else if (pc === 'Saks' && uc === 'Papir') {
            console.log(`Forsøk: ${i} Bruker: ${uc}, Pc: ${pc} Pc vinner.`);
        }
        else if (pc === 'Papir' && uc === 'Stein') {
            console.log(`Forsøk: ${i} Bruker: ${uc}, Pc: ${pc} Pc vinner.`);
        }
        else {  
            console.log(`Forsøk: ${i} Bruker: ${uc}, Pc: ${pc} Bruker vinner.`);
        }
            
    }
}
// Her starter hovud programent 
function main() {
    const choice = ['Stein', 'Saks', 'Papir'];
    const number_of_attempts = 5;
    const Cheet_code = 'BOMBE';
    const user_choice = 'Saks';

    play(choice, number_of_attempts, Cheet_code, user_choice);
};

main();

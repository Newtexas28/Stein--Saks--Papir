const prompt = require("prompt-sync")();

// Dette programet skal kjøre eit stei, saks, papir

function player_input(choice) {
     return prompt("Hva velger du [stein, saks eller papir]? ");
    };
function draw_choice(choice) {
    const pc_choice = choice[Math.floor(Math.random() * choice.length)];
    return pc_choice;
};
// Pc-en trekke ein av verdien og leser inn verdien og funksjonen sjekker kven som har vunnet. Dette gjerast n gongar.
function play(choice, number, Cheet_code) {
    
    not_finished = true;
    for (let i = 0; i < number; i++) {
        let pc = draw_choice(choice)
        // let uc = user_choice;
        const uc = player_input();
        console.log('Og tallet er: ' + i);
        if (uc === Cheet_code) {
            console.log('Bruker vant med Cheet code');
            i = number;
            break;
        }
        if (pc === uc) {
            console.log(`Forsøk: ${i} Bruker: ${uc.toLowerCase}, Pc: ${pc} uavgjort.`);
        }
        else if (pc === 'Stein' && uc === 'Saks') {
            console.log(`Forsøk: ${i} Bruker: ${uc.toLowerCase}, Pc: ${pc} Pc vinner.`);
        } 
        else if (pc === 'Saks' && uc === 'Papir') {
            console.log(`Forsøk: ${i} Bruker: ${uc.toLowerCase}, Pc: ${pc} Pc vinner.`);
        }
        else if (pc === 'Papir' && uc === 'Stein') {
            console.log(`Forsøk: ${i} Bruker: ${uc.toLowerCase}, Pc: ${pc} Pc vinner.`);
        }
        else if (uc === 'Stein' && pc === 'Saks') {
            console.log(`Forsøk: ${i} Bruker: ${uc.toLowerCase}, Pc: ${pc} Bruker vinner.`);
        } 
        else if (uc === 'Saks' && pc === 'Papir') {
            console.log(`Forsøk: ${i} Bruker: ${uc.toLowerCase}, Pc: ${pc} Bruker vinner.`);
        }
        else if (uc === 'Papir' && pc === 'Stein') {
            console.log(`Forsøk: ${i} Bruker: ${uc.toLowerCase}, Pc: ${pc} Bruker vinner.`);
        }
        else {  
            console.log(`Forsøk: ${i} Bruker: ${uc}, Pc: ${pc} Ordet er ikkje ein del av programet.`);
        }
            
    }
}
// Her starter hovud programent 
function main() {
    const choice = ['Stein', 'Saks', 'Papir'];
    const number_of_attempts = 5;
    const Cheet_code = 'BOMBE';

    // Siden vi henger ut brukerens valg inne funksjonen er det ikke nødvendig å sende noe inn her.
    play(choice, number_of_attempts, Cheet_code, 'har ingen betydning');
    /*
     * Slik koden er nå kan jeg skrive f.eks. "fisk" og finne hele tiden selv om
     * "fisk" ikke er en cheetcode. Hvorfor det?
     * Kan du skrive logikken i play() anderledes?
     * Hvordan sikrer du at brukeren holder seg til spillereglene?
     */ 
};

main();

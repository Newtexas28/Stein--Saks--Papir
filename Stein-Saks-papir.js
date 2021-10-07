const prompt = require("prompt-sync")();

// Dette programet skal kjøre eit stei, saks, papir

function player_input(choice) 
{
    let input = prompt("Hva velger du [stein, saks eller papir]? ");
    input = input.toLowerCase();
        if (input === 'stein' || input === 'saks' || input === 'papir' || input === 'bombe') 
        {
            return input;
        }
        else {
            console.log('Error: Brukervalget er ugyldig')
    };
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
        const uc = player_input();
        console.log('Og tallet er: ' + i);
    if (uc === 'stein' || uc === 'saks' || uc === 'papir' || uc === 'bombe') {
            //console.log('Inputen i progremet er ugyldig')
        if (uc === Cheet_code) {
            console.log('Bruker vant med Cheet code');
            i = number;
            break;
        }
        else if (pc === uc) {
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
    else {
        break;
    }   
    }
}
// Her starter hovud programent 
function main() {
    const choice = ['stein', 'saks', 'papir'];
    const number_of_attempts = 5;
    const Cheet_code = 'bombe';

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

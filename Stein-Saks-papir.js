/*
 * For at brukeren skal kunne taste inn et valg må du installere et
 * bibliotek for å få koden din til å lese hva brukeren skriver i prompt
 * Det gjør du ved å installere prompt-sync.
 * Åpne et nytt terminal-vindu og skriv inn følgende:
 * 
 * npm install prompt-sync
 * 
 * Nå blir prompt-sync biblioteket lagt til i node.js slik at du kan
 * bruke det i programmet ditt.
 * 
 * For at dette skal virke må du også gjøre en instilling.
 * Se følgende video for å finne ut av hva du må gjøre:
 * 
 * https://www.youtube.com/watch?v=x_2sYpk75Ic
 * 
 */
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
function play(choice, number, Cheet_code, user_choice) {
    /*
     * Siden du kjører flere ganger må du kanskje la brukeren velge hver gang ;)
     * Og da er det ikke nødvendig å sende inn user_choice i funksjonen.
     * Da kjører du den heller hver gang brukeren skal velge.
     */
    not_finished = true;
    for (let i = 0; i < number; i++) {
        let pc = draw_choice(choice)
        // Den skal byttes ut med bruker inputt seinare.S
        // let uc = user_choice;
        const uc = player_input();
        console.log('Og tallet er: ' + i);
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
    const user_choice = 'BOMBE';

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

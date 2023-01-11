// VARIABLES
const characterSheet = {
    classes: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
    backgrounds: ["Acolyte", "Farmer", "Merchant", "Prisoner", "Innkeeper"],
    species: ["Dragonborn","Dwarf","Elf","Gnome","Half-Elf","Half-Orc","Halfling","Human","Tiefling"],
    alignment: ["LG", "LN", "LE", "NG", "N", "NE", "CG", "CN", "CE"]
}

const classesN = characterSheet.classes.length;
const backgroundsN =  characterSheet.backgrounds.length;
const speciesN = characterSheet.species.length;
const alignmentN = characterSheet.alignment.length;

function randomGen (cN, bN, sN, aN) {
    const r1 = Math.floor(Math.random() * cN);
    const r2 = Math.floor(Math.random() * bN);
    const r3 = Math.floor(Math.random() * sN);
    const r4 = Math.floor(Math.random() * aN);
    
    const traits = [characterSheet.classes[r1], characterSheet.backgrounds[r2], characterSheet.species[r3], characterSheet.alignment[r4]];
    return traits
}

function characterIdea (generated) {
    let message = [];
    message.push(`You are a ${generated[2]} ${generated[0]}.`)
    message.push(`You spent most of your life working as a/an ${generated[1]}.`)
    message.push(`Your alignmenet is ${generated[3]}.`)
    
    const randomCharacter = message.join('\n');
    console.log(randomCharacter);
}

const characterTraits = randomGen(classesN,backgroundsN,speciesN,alignmentN);
characterIdea(characterTraits);

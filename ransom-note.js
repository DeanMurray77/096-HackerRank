const magazineString = 'o l x imjaw bee khmla v o v o imjaw l khmla imjaw x';
const noteString = 'imjaw l khmla x imjaw o l l o khmla v bee o o imjaw imjaw o';

const magazine = magazineString.split(' ');
const note = noteString.split(' ');

checkMagazine(magazine, note);

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    

    if(isViableCombination(magazine, note)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

function isViableCombination(magazine, note) {
    if(note.length > magazine.length) {
        return false;
    }

    let words = new Map();

    for(let i=0;i<magazine.length;i++) {
        let value = words.get(magazine[i])
        if(!value) {
            words.set(magazine[i], 1);
        } else {
            words.set(magazine[i], value + 1);
        }

    }

    for(let j=0;j<note.length;j++){
        let value = words.get(note[j]);

        if(!value) {
            return false;
        } else {
            words.set(note[j], value - 1);
        }
    }
    return true;
}
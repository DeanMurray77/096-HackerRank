

// My solution
function alternatingCharacters(s) {
    let newString = s[0];
    let newStringCounter = 0;
    let deletionCounter = 0;
    
    for(let i=1;i<s.length;i++) {
        if(s[i] != newString[newStringCounter]) {
            newString += s[i];
            newStringCounter++;
        } else {
            deletionCounter++;
        }
    }
    return deletionCounter;
}

//Generally accepted 'best' solution
function alternatingCharacters(s) {
    let deletionCounter = 0;
    
    for(let i=0;i<s.length-1;i++) {
        if(s[i] == s[i+1]) {
            deletionCounter++;
        }
    }
    return deletionCounter;
}

//Mine is less memory efficient and captures the string with the deletions, which wasn't needed....
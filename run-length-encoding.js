const encodeRunLength = (rawText) => {
    let encodedString = '';
    let runCounter = 1;
    let firstPointer = 0;
    let secondPointer = 1;

    while(firstPointer < rawText.length) {
        if(rawText[firstPointer] == rawText[secondPointer]) {
            runCounter++;
            secondPointer++;
        } else {
            encodedString += runCounter;
            encodedString += rawText[firstPointer];
            firstPointer = secondPointer;
            secondPointer++
            runCounter = 1;
        }

        if(secondPointer >= rawText.length) {
            encodedString += runCounter;
            encodedString += rawText[firstPointer];
            firstPointer = secondPointer;
            secondPointer++
            runCounter = 1
        }
    }
    return encodedString;
}

console.log(encodeRunLength('aabbccca'));

const testString = 'aabcd';
const testArray = testString.split('');
console.log(testArray);

testArray.forEach((item) => {
    console.log(item);
})

for(const item of testString) {
    console.log(item.toUpperCase());
}
function countTriplets(arr, r) {
    let numbers = new Map();

    let triplets = 0;

    for(let i=0; i<arr.length; i++) {
        const number = arr[i];
        let numberArray = numbers.get(number.toString()); //Number in Map already?

        //Need to get all of the next smallest in sequence already in the Map
        //Lets us count matches and update Map with correct info for number
        let numberFraction = number / r; /*Next smallest in sequence*/
        let numberFractionArray = numbers.get(numberFraction.toString());

        //Do the counting
        if(numberFractionArray) { //potential exists for triplet
            for(let j=0; j<numberFractionArray.length; j++) {
                triplets += numberFractionArray[j].fractionCount;
            }
        }

        //Generate a numberArray object for addition to Map
        let numberArrayObject;
        if(numberFractionArray) {
            numberArrayObject = {
                index: i,
                fractionCount: numberFractionArray.length
            }
        } else {
            numberArrayObject = {
                index: i,
                fractionCount: 0
            }
        }

        //Add current number info to Map so that it can be used by a higher multiple
        if(!numberArray) { //Add for first time
            numbers.set(number.toString(), [numberArrayObject]);
        } else { //Add the new item to the existing array
            numberArray.push(numberArrayObject)
            numbers.set(number.toString(), numberArray);
        }
    }

    return triplets;
}

const arr = '1 3 9 9 27 81'.split(' ');

console.log(countTriplets(arr, 3));

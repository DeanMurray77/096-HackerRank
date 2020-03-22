// Complete the isValid function below.
function isValid(s) {
    let myMap = new Map();

    for(let i=0;i<s.length;i++) {
        let mapResult = myMap.get(s[i]);
        if(mapResult) {
            myMap.set(s[i], mapResult + 1);
        } else {
            myMap.set(s[i], 1);
        }
    }

    let firstValue;
    let secondValue;
    let thirdValue = false
    let firstValueCount = 0;
    let secondValueCount = 0;

    console.log(myMap)

    myMap.forEach((value, key, map) => {
        console.log(`value ${value} key: ${key}`)
        if(!firstValue) {
            console.log(`in !firstvalue. value: ${value}`)
            firstValue = value;
            firstValueCount++;
        } else if(value == firstValue) {
            console.log(`in value=firstValue value: ${value}`)
            firstValueCount++;
        } else if(!secondValue) {
            console.log(`in !secondvalue. value: ${value}`)
            secondValue = value;
            secondValueCount++;
        } else if(value == secondValue) {
            console.log(`in value=secondValue value: ${value}`)
            secondValueCount++;
        } else {
            console.log(`in else. value: ${value}`)
            thirdValue = value;
        }
    })

    console.log('SecondValue ' + secondValue + ' Second Value Count: ' + secondValueCount);
    console.log(`firstvalue ${firstValue} firstValueCount ${firstValueCount}`)

    if(thirdValue) {
        return 'NO'
    }

    if(!secondValueCount) {
        return 'YES';
    }

    // creating the map is good, I think.
    // The issue is with deciding whether or not the map is good or bad.
    // max and min rather than first or secondvalue? Then you only have to
    // worry about removing one from the max. Or removing 1 from the min if the min is 1



    if(Math.abs(secondValue - firstValue) > 1) {
        if(secondValueCount == 1 || firstValueCount == 1) {
            return 'YES'
        } else {
            console.log("in abs secondValue - firstValue > 1")
            return 'NO';
        }
    } else {
        if(secondValueCount > 1 && firstValueCount > 1) {
            console.log("in secondValueCount >1 && FirstValueCount >1")
            return 'NO';
        } else {
            console.log('in else');
            return 'YES'
        }
    }
}
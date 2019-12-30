//https://www.hackerrank.com/challenges/migratory-birds/problem

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let totals = [0, 0, 0, 0, 0, 0]
    //get totals
    for(let i=0;i<arr.length;i++) {
        let birdType = arr[i];
        totals[birdType]++;
    }

    let type = 1;
    let runningTotal = totals[1];
    //find most common
    for(let i=2;i<totals.length;i++) {
        if(totals[i] > runningTotal) {
            type = i;
            runningTotal = totals[i]
        }
    }

    return type;
}
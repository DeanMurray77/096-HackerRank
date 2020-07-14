

function pageCount(numberOfPages, goToPage) {
    console.log(`numberOfPages: ${numberOfPages} goToPage: ${goToPage}`);
    let pageTurns;
    if(numberOfPages/2 >= goToPage) {
        pageTurns = turnFromStart(numberOfPages, goToPage);
    } else {
        pageTurns = turnFromBack(numberOfPages,goToPage);
    }

    return pageTurns;
}

function turnFromBack(numberOfPages, goToPage) {
    //if even pageTotal, you open to 1 page at the back
    //if odd pageTotal, you open to 2 pages at the back

    let pagesAtBack = (numberOfPages % 2) + 1
    console.log("Pages at back: " + pagesAtBack)
    for(let i=0; i < numberOfPages; i++) {
        if( (numberOfPages - ((i*2)+pagesAtBack))  < goToPage) {
            console.log("Returning. i: " + i);
            return i;
        }
    }
}

function turnFromStart(numberOfPages, goToPage) {
    console.log(`numberOfPages: ${numberOfPages} goToPage: ${goToPage}`);
    for(let i=0; i < numberOfPages; i++) {
        if( ((i*2)+1) >= goToPage) {
            console.log("Returning. i: " + i);
            return i;
        }
    }
}

pageCount(2, 1);

// pageCount(37455, 29835);
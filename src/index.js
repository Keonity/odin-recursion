import './styles.css';

console.log(`Welcome To The Odin Recursion Project`);

function fibs(n) {
    let fibNum = 0 // Sequence begins at 0
    const fibArray =  new Array(n);
    // fibArray[0] = fibNum;

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            // Do nothing
        }
        else if (i === 1 || i === 2) {
            fibNum = 1;
        }
        else {
            fibNum = (fibArray[i - 2] + fibArray[i - 1]);
        }
        fibArray[i] = fibNum;
        console.log(i, fibArray);
    }
    return fibArray;
}

function fibsRec(n) {
    let fibNum = 0;
    if (n === 0) {
        const fibArray = [0];
        return fibArray;
    }
    if (n === 1) {
        const fibArray = [0, 1];
        return fibArray;
    }
    else {
        const currArray = fibsRec(n - 1);
        currArray.push(currArray[currArray.length - 1] + currArray[currArray.length - 2]);
        return currArray;
    }
    // return;
}

function facsRec(n) {
    // const fibArray = new Array(n);
    if (n === 1) {
        // fibsArray[i] = 1;
        return 1;
    }
    else {
        // fibsArray
        return n * facsRec(n - 1);
    }
};

console.log(facsRec(5));

fibs(8);

console.log(fibsRec(8));

// console.log(fibs(8));
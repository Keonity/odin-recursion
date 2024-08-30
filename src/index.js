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
    console.log("This function was printed recursively.");
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

function merge(firstArray, secondArray) {
    let newArray = [];

    while (firstArray.length > 0 && secondArray.length > 0) {
        if (firstArray[0] < secondArray[0]) {
            newArray.push(firstArray.shift());
        }
        else {
            newArray.push(secondArray.shift());
        }
    }

    while (firstArray.length) {
        newArray.push(firstArray.shift());
    }
    while (secondArray.length) {
        newArray.push(secondArray.shift());
    }

    return newArray;
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    else {
        let mid = Math.floor(array.length / 2);
        // console.log(`MergeSort: ` + array);
        let leftHalf = array.slice(0, mid);
        let rightHalf = array.slice(mid);
        return merge(mergeSort(leftHalf), mergeSort(rightHalf));
    }
}


// console.log(facsRec(5));

fibs(8);

console.log(fibsRec(8));

let mergeArray = [3, 2, 1, 13, 8, 5, 0, 1];
// console.log(`MergeArray Type: ` + typeof mergeArray);
// console.log(mergeArray);

console.log(`Merge Sort: ` + mergeSort(mergeArray));

// console.log(fibs(8));
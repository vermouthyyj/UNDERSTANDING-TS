function combine(input1: number | string, input2: number | string) { 
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else { 
        result = input1.toString() + input2.toString();
    }
    return result;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { 
    const result = n1 + n2;
    cb(result)
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);
addAndHandle(10, 20, (result) => { 
    console.log(result);
})
function getMinInt(n) { 
    if (n < 10) { 
        return n;
    }
    let res = [];
    // if the integer is greater than 10
    let firstDigit = n % 9;
    let num_9 = Math.floor(n / 9);
    
    for (let i = 0; i < num_9; i++) { 
        res.push('9');
    }
    res.unshift(firstDigit);
    return parseInt(res.join(''));
}

console.log(getMinInt(13));
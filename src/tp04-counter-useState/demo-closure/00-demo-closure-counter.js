function compteur() {
    let count = 0;

    return function() {
        return count++;
    };
}

let plusUn = compteur();
console.log(plusUn());
console.log(plusUn());
console.log(plusUn());
// plusUn = undefined;

let plusUnBIS = compteur();
console.log('BIS');
console.log(plusUnBIS());
console.log(plusUnBIS());
console.log(plusUn());

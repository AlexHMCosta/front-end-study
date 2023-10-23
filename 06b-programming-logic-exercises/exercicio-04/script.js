function isPrime(n) {
    let dividers = 0;
    for (let i=0; i<=n; i++) {
        if (n % i === 0) {
            dividers ++;
        }
    }
    if (dividers === 2) {
        return true;
    } else {
        return false;
    }
}


let target = 100
let count = 0

for(let i = 1 ; i<=target; i++) {
    if (isPrime(i)) {
        console.log(i);
        count++;
    }
    
}
console.log(`Existem ${count} números primos de 1 a ${target}`)
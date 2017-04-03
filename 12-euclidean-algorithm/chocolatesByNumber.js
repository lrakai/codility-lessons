function gcd(a, b) {
    if(a % b === 0) { 
        return b;
    } else {
        return gcd(b, a%b);
    }
}

function solution(N, M) {
    if (typeof K === "undefined") {
        M = N.M;
        N = N.N;
    }
    // write your code in JavaScript (Node.js 6.4.0)
    return N / gcd(N,M);
}


let tv = [{ N: 10, M: 4 }];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
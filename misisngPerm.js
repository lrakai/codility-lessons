function swapCycle(N, i) {
    while(N[i] !== i+1 && i !== N.length) {
        let j = N[i];
        N[i] = N[j-1];
        i = N[j-1];
        N[j-1] = j;
        i = i - 1;
    }
}

function swapPass(N) {
    for (let i = 0; i < N.length; i++) {
        if (N[i] !== i + 1 && N[i] !== N.length+1) {
            swapCycle(N, i);
        }
    }
    for(let i=0; i < N.length; i++) {
        if(N[i] === N.length+1) {
            return i+1;
        }
    }
    return N.length+1;
}

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    //return swapPass(N);
    let sum = 0;
    for(let i = 0; i < N.length; i++) {
        sum += N[i];
    }
    return (N.length+1)*(N.length+2)/2 - sum;
}

let tv = [[5, 3, 2, 1], [3,1,4,2], [5,4,3,2]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
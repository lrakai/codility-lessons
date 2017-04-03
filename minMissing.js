function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let candidates = new Array(N.length+1).fill(false);
    for(let v of N) {
        if (v>0 && v < N.length+1) {
            candidates[v-1] = true;
        }
    }
    return candidates.findIndex(v => !v) + 1;
}

let tv = [[1,3,6,4,1,2], [1,2,3,4,5], [3, 1, 2, 4, 3], [5, 3, 2, 1], [3, 1, 4, 2], [5, 4, 3, 2], [-3, -1], [-1000, 1000]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
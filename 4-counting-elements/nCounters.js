
function solution(A, K) {
    if (typeof K === "undefined") {
        K = A.K;
        A = A.A;
    }
    // write your code in JavaScript (Node.js 6.4.0)

    let counters = new Array(K).fill(0);
    let currentMax = 0;
    let level = 0;
    for (let v of A) {
        if (v === K + 1) {
            level = currentMax;
        } else {
            if (counters[v - 1] < level) {
                counters[v - 1] = level;
            }
            counters[v - 1]++;
            currentMax = Math.max(currentMax, counters[v - 1]);
        }
    }
    for (let i = 0; i < K; i++) {
        if (counters[i] < level) {
            counters[i] = level;
        }
    }
    return counters;
}


let tv = [{ A: [3, 4, 4, 6, 1, 4, 4], K: 5 }];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
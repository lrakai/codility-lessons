function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    if (N.length === 0) {
        return 0;
    }
    N.sort();
    let last = N[0], distinct = 1;
    for (let i = 0; i < N.length; i++) {
        if (N[i] != last) {
            distinct++;
        }
        last = N[i];
    }
    return distinct;
}

let tv = [[1, 3, 6, 4, 1, 2], [1, 2, 3, 4, 5], [3, 1, 2, 4, 3], [5, 3, 2, 1], [3, 1, 4, 2], [5, 4, 3, 2], [-3, -1], [-1000, 1000]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
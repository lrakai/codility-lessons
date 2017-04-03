
function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)

    let odd = 0;
    for (let v of N) {
        odd ^= v;
    }
    return odd;
}

let tv = [[9, 3, 9, 3, 9, 7, 9], [9, 9, 9], [9, 9, 7, 7, 7], [9, 9, 9, 7, 7]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}

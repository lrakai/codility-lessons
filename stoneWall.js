function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let stones = 0;
    let h = [N[0]];
    for (let i = 1; i < N.length; i++) {
        if (N[i] > h[h.length - 1]) {
            h.push(N[i]);
        } else if(N[i] < h[h.length - 1]) {
            while (N[i] < h[h.length - 1] && h.length > 0) {
                stones++;
                h.pop();
            }
            if(N[i] > h[h.length - 1] || h.length === 0) {
                h.push(N[i]);
            }
        }
    }
    stones += h.length;
    return stones;
}

let tv = [[3, 2, 1], [8, 8, 5, 7, 9, 8, 7, 4, 8], [10, 2, 5, 1, 8, 20]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
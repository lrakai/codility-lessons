
function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var currS = N[0], maxS = N[0];
    for (var i = 1; i < N.length; i++) {
        currS = Math.max(N[i], currS + N[i]);
        maxS = Math.max(maxS, currS);
    }
    return maxS;
}

var tv = [[3, 2, -6, 4, 0], [-10], [23171, 21011, 21123, 21366, 21013, 21367], [8, 8, 5, 7, 9, 8, 7, 4, 8], [10, 2, 5, 1, 8, 20]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
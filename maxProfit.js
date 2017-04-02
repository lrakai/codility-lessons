
function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var currS = 0, maxS = 0, currP = N[0];
    for (var i = 1; i < N.length; i++) {
        currS = Math.max(0, (N[i]-currP));
        maxS = Math.max(maxS, currS);
        if(N[i] < currP) {
            currP = N[i];
        }
    }
    return maxS;
}

var tv = [[23171, 21011, 21123, 21366, 21013, 21367], [8, 8, 5, 7, 9, 8, 7, 4, 8], [10, 2, 5, 1, 8, 20]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
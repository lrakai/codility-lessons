function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var left = N[0];
    var right = N.reduce((acc, v) => acc + v, 0) - N[0];
    var minDiff = Math.abs(left - right);
    for (var i = 1; i < N.length-1; i++) {
        left += N[i];
        right -= N[i];
        var diff = Math.abs(left - right);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    return minDiff;
}

var tv = [[3, 1, 2, 4, 3], [5, 3, 2, 1], [3, 1, 4, 2], [5, 4, 3, 2], [-3, -1], [-1000, 1000]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
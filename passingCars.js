function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var first = N[0], sum = 0, count = 0;
    for(var i =0; i < N.length; i++) {
        N[i] === first ? count++ : sum += count;
        if(sum > 1e9) {
            return -1;
        }
    }
    return sum;
}

var tv = [[0,1,0,1,1], [1,1,1,1,1], [0,1], [0,0], [1,1], [1,0]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
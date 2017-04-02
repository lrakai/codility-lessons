
function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
/*    var matches = {};
    for(var v of N) {
        if(typeof matches[v] === "undefined") {
            matches[v] = 1;
        } else {
            matches[v]++;
        }
    }
    for(var p in matches) {
        if(matches[p] % 2 === 1) {
            return parseInt(p);
        }
    }*/

    var odd = 0;
    for(var v of N) {
        odd ^= v;
    }
    return odd;
}

var tv = [[9,3,9,3,9,7,9], [9,9,9], [9,9,7,7,7], [9,9,9,7,7]];
for(t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}

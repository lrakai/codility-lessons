function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    N.sort((a,b) => a-b);
    var length = N.length;
    var pqrs = [[0, 1, 2], [0, 1, length - 1], [0, length - 2, length - 1], [length - 3, length - 2, length - 1]];
    var maxProd = N[pqrs[0][0]] * N[pqrs[0][1]] * N[pqrs[0][2]];
    for(var i = 1; i < pqrs.length; i++) {
        var prod = N[pqrs[i][0]] * N[pqrs[i][1]] * N[pqrs[i][2]];
        if(prod > maxProd) {
            maxProd = prod;
        }
    }
    return maxProd;
}

var tv = [[-5, -6, -4, -7, -10], [-3, 1, 2, -2, 5, 6], [1, 2, 3, 4, 5], [3, 1, 2, 4, 3], [5, 3, 2, 1], [3, 1, 4, 2], [5, 4, 3, 2], [-3, -1], [-1000, 1000]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
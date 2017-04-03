function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    N.sort((a,b) => a-b);
    for(let i =0; i < N.length-2; i++) {
        if(N[i]+N[i+1] > N[i+2]) {
            return 1;
        }
    }
    return 0;
}

let tv = [[10,2,5,1,8,20],[10,50,5,1],[-3, 1, 2, -2, 5, 6], [1, 2, 3, 4, 5], [3, 1, 2, 4, 3], [5, 3, 2, 1], [3, 1, 4, 2], [5, 4, 3, 2], [-3, -1], [-1000, 1000]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
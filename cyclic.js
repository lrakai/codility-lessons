function solution(A, K) {
    if(typeof K === "undefined") {
        K=A.K;
        A=A.A;
    }
    // write your code in JavaScript (Node.js 6.4.0)
    var B = A.slice();
    for(var i = 0; i < A.length; i++) {
        B[(i+K)%A.length] = A[i];
    }
    return B;
}


var tv = [{A:[3, 8, 9, 7, 6], K:3}, {A:[9,3,9,3,9,7,9], K:3},{A:[],K:10},{A:[1],K:100}];
for(t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
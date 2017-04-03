function solution(A, B, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    return Math.floor(B / K) - Math.ceil(A / K) + 1;
}
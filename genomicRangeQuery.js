function calculateCumsums(S) {
    let A = new Array(S.length+1).fill(0);
    let C = A.slice(), G = A.slice(), T = A.slice();
    let cumsums = {
        A: A, C: C, G: G, T: T
    };
    for(let i = 0; i < S.length; i++) {
        cumsums.A[i+1] = cumsums.A[i];
        cumsums.C[i+1] = cumsums.C[i];
        cumsums.G[i+1] = cumsums.G[i];
        cumsums.T[i+1] = cumsums.T[i];
        let c = S[i];
        cumsums[c][i+1]++;
    }
    return cumsums;
}

function query(S, cumsums, P, Q) {
    return cumsums.A[Q+1] - cumsums.A[P] > 0 ? 1
        : cumsums.C[Q+1] - cumsums.C[P] > 0 ? 2
        : cumsums.G[Q+1] - cumsums.G[P] > 0 ? 3
        : 4;
}

function solution(S,P,Q) {
    if (typeof P === "undefined") {
        P = S.P;
        Q = S.Q;
        S = S.S;
    }
    // write your code in JavaScript (Node.js 6.4.0)
    let cumsums = calculateCumsums(S);
    let qs = new Array(P.length);
    for(i = 0; i < P.length; i++) {
        qs[i] = query(S, cumsums, P[i], Q[i]);
    }
    return qs;
}


let tv = [{S: "AC", P:[0,1,0], Q:[0,1,1]}, {S: "CA", P:[0,1,0], Q:[0,1,1]}, { S: "CAGCCTA", P: [2,5,0], Q: [4,5,6] }, {S: "GGGGGGG", P:[2,5,0], Q:[4,5,6]}, {S: "GGGAGGG", P:[2,5,0], Q:[4,5,6]}];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
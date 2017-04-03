function nextNearest(nearest, spots){
    while(++nearest < spots.length+1 && spots[nearest-1]);
    return nearest;
}

function solution(A, K) {
    if (typeof K === "undefined") {
        K = A.K;
        A = A.A;
    }
    // write your code in JavaScript (Node.js 6.4.0)
    let spots = new Array(K).fill(false);
    let nearest = 1;
    for (let i=0; i < A.length; i++) {
        spots[A[i]-1] = true;
        if(A[i] === nearest) {
            nearest = nextNearest(nearest, spots);
            if(nearest === K+1) {
                return i;
            }
        }
    }
    return -1;
}


let tv = [{ A: [1, 3, 1, 4, 2, 3, 5, 4], K: 5 }];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
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
    var spots = new Array(K).fill(false);
    var nearest = 1;
    for (var i=0; i < A.length; i++) {
        spots[A[i]-1] = true;
        if(A[i] === nearest) {
            nearest = nextNearest(nearest, spots);
            if(nearest === K+1) {
                return i;
            }
        }
    }
}


var tv = [{ A: [1, 3, 1, 4, 2, 3, 5, 4], K: 5 }];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var R = [];
    for (var i = 0; i < N.length; i++) {
        R.push({ x: i - N[i], d: 1 }, { x: i + N[i], d: -1 });
    }
    R.sort((a, b) => {
        if (a.x < b.x || (a.x == b.x && a.d > b.d)) {
            return -1;
        } else if (a.x == b.x && a.d == b.d) {
            return 0;
        } else {
            return 1;
        }
    });
    var intersections = 0, active = 1;
    for (i = 1; i < R.length; i++) {
        if (R[i].d === 1) {
            intersections += active;
            if (intersections > 1e7) {
                return -1;
            }
        }
        active += R[i].d;
    }

    return intersections;
}

var tv = [[1, 5, 2, 1, 4, 0], [10, 2, 5, 1, 8, 20], [10, 50, 5, 1], [-3, 1, 2, -2, 5, 6], [1, 2, 3, 4, 5], [3, 1, 2, 4, 3], [5, 3, 2, 1], [3, 1, 4, 2], [5, 4, 3, 2], [-3, -1], [-1000, 1000]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
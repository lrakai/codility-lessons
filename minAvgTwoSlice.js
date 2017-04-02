function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var cumsum = new Array(N.length);
    cumsum[0] = 0;
    for(var i = 0; i < N.length; i++) {
        cumsum[i+1] = cumsum[i] + N[i];
    }
    var minI = 0, currAvg = (cumsum[2]-cumsum[0])/2, minAvg = currAvg, startI = 0;
    for(var i = 2; i < N.length; i++) {
        var currAvg = (cumsum[i+1]-cumsum[startI])/(i-startI+1);
        var testStartI = startI + 1;
        while(i - testStartI > 0) {
            var shiftAvg = (cumsum[i+1]-cumsum[testStartI])/(i-testStartI+1)
            if(shiftAvg < currAvg) {
                startI = testStartI;
                currAvg = shiftAvg; 
            }
            testStartI++;
        }
        if(currAvg < minAvg) {
            minAvg = currAvg;
            minI = startI;
        }
        if(i - startI > 3) {
            startI = i - 3;
        }
    }
    return minI;
}

var tv = [[10, 10, -1, 2, 4, -1, 2, -1], [4,2,2,5,1,5,8], [1, 3, 6, 4, 1, 2], [1, 2, 3, 4, 5], [3, 1, 2, 4, 3], [5, 3, 2, 1], [3, 1, 4, 2], [5, 4, 3, 2]];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
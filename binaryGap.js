function toBinary(N) {
    var binaryArray = [];
    while(N > 0) {
        var rightBit = N % 2;
        binaryArray.unshift(rightBit);
        N = Math.floor(N / 2);
    }
    return binaryArray;
}

function longestSequence(binaryArray) {
    var longest = 0;
    var current = 0;
    var started = false; // found a 1 to start a gap
    for(var i = binaryArray.length; i >= 0; i--) {
        if(current > longest) {
            longest = current;
        }
        if(binaryArray[i] == 1) {
            started = true;
            current = 0;
        } else if (started) {
            current++;
        }
    }
    return longest;
}

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var binaryArray = toBinary(N);
    var longest = longestSequence(binaryArray);
    return longest;
}

var tv = [1041, 16, 51712];
for(t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}

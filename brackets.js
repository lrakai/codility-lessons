function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var s = [];
    for(var c of N) {
        if(c === '{' || c === '(' || c === '[') {
            s.push(c);
        } else {
            var last = s.pop();
            if (last === undefined || last === "{" && c !== "}" || last === "[" && c !== "]" || last === "(" && c !== ")") {
                return 0;
            }
        }
    }
    if (s.length > 0) {
        return 0;
    }
    return 1;
}

var tv = [ ")", "{[{()}]}","{(})"];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
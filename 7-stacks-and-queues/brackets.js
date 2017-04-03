function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let s = [];
    for (let c of N) {
        if (c === '{' || c === '(' || c === '[') {
            s.push(c);
        } else {
            let last = s.pop();
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

let tv = [")", "{[{()}]}", "{(})"];
for (t of tv) {
    console.log(`input: ${t}, output: ${solution(t)}`)
}
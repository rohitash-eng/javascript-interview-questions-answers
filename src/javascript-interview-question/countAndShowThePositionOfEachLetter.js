function countLetters(str) {
    let coutString = {};
    for(let i=0; i<str.length; i++) {
        if(!coutString[str[i]]){
            coutString[str[i]] = [];
        }
        coutString[str[i]].push(i);
    }
    return coutString;
}
console.log(countLetters("rohitashRohitash"));
function countLetters(str) {
    let coutString = {};
    for(let i=0; i<str.length; i++) {
        if(!coutString[str[i]]){
            coutString[str[i]] = 0;
        }
        coutString[str[i]] = coutString[str[i]] +1;
    }
    return coutString;
}
console.log(countLetters("rohitashRohitash"));
const repeatChar = function(s) {
    const freq = {};

    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1;
        if(freq[ch] > 1) return ch;
    }

    
    return "_";
}

console.log(repeatChar("abcdbca"));
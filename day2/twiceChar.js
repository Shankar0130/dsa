const twiceChar = function(s) {
    const freq = {};

    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1;
        
    }

    for(let ch of s){
        if(freq[ch] === 2) return ch;
    }

    
    return "_";
}

console.log(twiceChar("abcde"));
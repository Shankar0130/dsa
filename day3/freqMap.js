const freqMap = function(s){
    const freq = new Map();

    for(let ch of s){
        freq.set(ch,((freq.get(ch) || 0)+1));
    }

    for(let ch of s){
        if(freq.get(ch) > 1) return ch;
    }
    
    return '_';
}

console.log(freqMap('abcdef'));

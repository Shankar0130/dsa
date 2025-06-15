function firstUniqueChar(s){
    const freq = {};

    for(let ch of s){
        freq[ch] = (freq[ch] || 0) + 1;
    }

    console.log(freq);
    for(let i in s){
        if (freq[s[i]] === 1) return i;
    }
    return -1;
}

console.log(firstUniqueChar("loveleetcode"));
const longSub = function(s){
    const freq = new Map();
    let left = 0;
    let maxLen = 0;
    let startIdx = 0;

    for(let right = 0; right<s.length; right++){
        freq.set(s[right],(freq.get(s[right]) || 0) + 1);

        while(freq.size > 2){
            const leftChar = s[left];
            freq.set(leftChar,freq.get(leftChar)-1);
            if(freq.get(leftChar) === 0) freq.delete(leftChar);
            left++;
        }

        if(right-left+1 > maxLen){
            maxLen = right-left+1;
            startIdx=left;
        }
        
    }

    const result = s.slice(startIdx, startIdx + maxLen);
  console.log("Substring:", result);
  console.log("Length:", maxLen);

    return maxLen;
}

longSub("eceba");
const uniqueSubStr = function(s) {
    let left = 0;
    const set = new Set();
    let maxLen = 0;
    let startIdx = 0;

    for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);

        if(right-left+1 > maxLen){
            maxLen = right-left+1;
            startIdx = left;
        }
    }

    const newStr = s.slice(startIdx,startIdx+maxLen);
    console.log(newStr + maxLen);
}

uniqueSubStr("aaaaaaaa");
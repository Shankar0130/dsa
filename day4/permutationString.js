function mapsEqual(map1 , map2){
    if(map1.size !== map2.size) return false;
    for( let [key, val] of map1){
        if(map2.get(key) !== val) return false;
    }
    return true;
}

const permutateString = function(s1,s2) {

    if(s1.length > s2.length ) return false;

    const k = s1.length;
    const map = new Map();
    const windowMap = new Map();
    for(let i=0; i<s1.length;i++){
        map.set(s1[i], (map.get(s1[i]) || 0) + 1 );
    }

    console.log(map);

    for(let i=0; i<s2.length; i++){
        windowMap.set(s2[i],(windowMap.get(s2[i]) || 0) + 1);

        if(i>=k){
            const leftChar = s2[i-k];
            if(windowMap.get(leftChar) === 1){
                windowMap.delete(leftChar);
            }else{
                windowMap.set(leftChar,windowMap.get(leftChar) -1);
            }
        }

        console.log(windowMap);

        if(mapsEqual(map,windowMap)) return true;
    }

    return false

}

const s1 = "ab", s2 = "eidbaooo";

console.log(permutateString(s1,s2));
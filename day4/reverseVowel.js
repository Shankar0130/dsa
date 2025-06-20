function reverseVowel(s){
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

    const newS = s.split("");

    let left = 0;
    let right = newS.length-1;

    while(left < right){
        while(left < right && !vowels.has(newS[left])) left++;
        while(left < right && !vowels.has(newS[right])) right--;

        [newS[left], newS[right]] = [newS[right], newS[left]];
        left++;
        right--;
    }
    
    return newS.join("");
}

console.log(reverseVowel("IceCreAm"))
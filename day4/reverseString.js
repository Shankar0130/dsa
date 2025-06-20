function reverse(s){
    let left = 0;
    let right = s.length -1;

    while(left < right){
        let temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
    }
    return s;
}

console.log(reverse(["h","e","l","l","o"]));
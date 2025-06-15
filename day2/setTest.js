const seen = new Set();

seen.add("a");
seen.add('b');
seen.add('c');
seen.add('b');
seen.add('d');

console.log(seen);

const arr = [1,2,3,4,5,6,7,5,4,3,23];

console.log(seen.has('a'));


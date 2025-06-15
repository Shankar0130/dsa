const obj = {name: "shankar", title: "yadav" , hobby: {food: "pasta"}};

 let two = obj;

// two.name = "kanchan";

// two = {name: "ravi" , title:"yadav"};

//two = null;

const three = structuredClone(obj);

three.hobby.food = "maggi";

console.log(obj.hobby.food);
console.log(three.hobby.food);



//console.log(two.name);

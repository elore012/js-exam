word = "Hello My Friend";
sentence = word.split(" ");
newArray = [];
for (let i = 0; i < sentence.length; i++){
   
    if (i == 0) {
        newArray.push(sentence[i].toUpperCase());
    }
    else {
        newArray.push(sentence[i]);
    }
}

let output = newArray.join(" ");
console.log(output);



function buildTower(num){
    let totalChars = (num * 2) - 1;
    // console.log(totalChars);
    let asterisks = '*';
    let tower = [];
    for(let i = 0; i < num; i++){
        // console.log(astrics.length)
        let totalSpaces = (totalChars - asterisks.length) / 2;
        // console.log(totalSpaces)
        let newString = ' '.repeat(totalSpaces) + asterisks + ' '.repeat(totalSpaces);
        tower.push(newString);
        asterisks += '**';
    }

    return tower;
}

let array = buildTower(5);
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
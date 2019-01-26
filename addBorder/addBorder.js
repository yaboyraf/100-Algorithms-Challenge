// const picture = [
//     "abc",
//     "def",
// ]
// function addBorder(param) {
//     const paramLength = param[0].length;
//     let result = [];
//     result.push("*".repeat(paramLength + 2));
//     param.forEach(param => {
//         result.push(`*${param}*`)
//     });
//     result.push("*".repeat(paramLength + 2));
//     console.log(result);
// }
// addBorder(picture);

function addBorder(picture) {
    const lengthOfwall = picture[0].length + 2;
    let wall = '';

    for (let i = 0; i < lengthOfwall; i++) {
        wall = wall.concat('*');
    }

    picture.unshift(wall);
    picture.push(wall);

    return wall;
}

console.log(addBorder(["abc", "ded"]));


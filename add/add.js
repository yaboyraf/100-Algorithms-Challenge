function add(param1, param2) {
    return param1 + param2;
};
//console.log(add(2, 1))
//console.log(add(3, 2))

function add2(...myStuff) {
    // console.log(arguments);
    let total = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     total = total + arguments[i];
    // }
    // console.log(total);
    // return total;
    myStuff.forEach(arg => {
      total = total + arg;   
    })
    console.log(total);
    console.log(myStuff);
};


add2(2, 3, 5, 7);
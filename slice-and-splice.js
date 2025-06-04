function frankenSplice(array1, array2, index) {

    //original
    // console.log(array2);
    
    let newArray = [...array2];

    let remainingInArray2 = newArray.splice(index);

    return newArray.concat(array1).concat(remainingInArray2);

}

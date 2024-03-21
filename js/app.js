// You have an array of numbers arr = [10, 2, 4, 28, 47, 9, 25] you must 

var scors=[10, 2, 4, 28, 47, 9, 25];
console.log( scors, typeof scors );

// 1-add 3 for each number that is less than or equal 20

var index = 0;
while (index < scors.length) {

    if (scors[index] <= 20) {
        // console.log(scors[index] ,scors[index] += 3 );
        console.log(`before adding 3: number = ${ scors[index] } after adding 3: number = ${ scors[index] += 3 }`);

    }

    // 2-subtract 5 from any number that is greater than 20 and less than or equal 30

    else if (scors[index] > 20 && scors[index] <= 30) {
        // console.log(scors[index] , scors[index] -=5);
        console.log(`before adding 5: number = ${ scors[index] } after adding 5: number = ${ scors[index] -= 5 }`);
    }

    // 3-multiply 2 for each number that is greater than 30
    else if (scors[index] > 30) {
        // console.log(scors[index] , scors[index] *=2);
        console.log(`multiplying by 2: number = ${ scors[index] } multiplying by 2: number = ${ scors[index] *= 2 }`);
    }

    index += 1;
}

    




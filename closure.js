// CLOSURES

const parentFunction = () => {
    let value = 0; 

    console.log(value);

    // function childFunction(){
    //     value += 1;
    //     console.log(`Updated value : ${value}`);
    // }

    // return childFunction;

    // return () => {
    //     value += 1;
    //     console.log(`Updated value : ${value}`);  
    // }

    const childFunction = () => {
        value += 1;
        console.log(`Updated value : ${value}`);  
        // return -1;
    };

    return childFunction;
    

};

// console.log(parentFunction());
parentFunction();
    

// IMMEDIATELY InVOKED FUNCTION EXPRESSION

// const credits = (
//     (num) => {
//         let credits  = num;
//         console.log(`initial : ${credits}`);
//         return () => {
//             if(credits > 0 ) {
//                 // console.log('Continue game');
//                 console.log(`${credits -= 1} credit(s) remaining`);
//             }

//             else console.log('not enough credits');

//         }
//     }
// )(3);

// credits();
// credits();
// credits();
// credits();


// const privateCounter = (() => {

//     let count = 0;
//     console.log(`initial count : ${count}`);

//     return () => { count +=1; console.log(count);} 
//     // return function(){count +=1; console.log(count)}
// })();


// let result = privateCounter();
// console.log(result())
// result();
// result();
// Assignment Part -I
// getRandomNumber() is a function which creates a Promise
// The promise will create a random number after waiting for 5 seconds
// 1. Since timeout will always execute, reject is not needed and not coded
const getRandomNumber = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Math.Random will create a random number after 0.5 seconds. 500 is 0.5 second
            resolve(Math.floor(Math.random() * 100) + 1);
        }, 500);
    });
};

// Assignment Part -II
// This is async function that is calling the getRandomNumber() 
// await code will make it wait until getRandomNumber returns the value
async function myasync(){
    let resp = await getRandomNumber() ;
    console.log(resp) ;

}

// Assignment Part-III
//invoking the async function and this will print the random number in console
myasync() ;

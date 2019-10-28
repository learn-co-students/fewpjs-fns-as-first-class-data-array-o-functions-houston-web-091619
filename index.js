// console.log("Wake Byron the poodle");
var wakeDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

// console.log("Leash Byron the poodle");
var leashDog = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }

// console.log("Walk to the park with Byron the poodle");
var walkToPark = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }

//   console.log("Throw the frisbee for Byron the poodle");
var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}
// console.log("Walk home with Byron the poodle");
var walkHome = function(dogName="Byron", dogBreed="poodle") {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}
// console.log("Unleash Byron the poodle");
var unleashDog = function(dogName="Bryon", dogBreed="poodle"){
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}
// ## Create the Array o' Functions
const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]


// The function's implementation should

// * Iterate over the `routine` `Array`
// * Call each function in the array and
// * pass the `dogName` and `dogBreed` received by `exerciseDog()` to the function as they are _called_
// * capture the result of each function's call
// * return an `Array` of all those functions' return values

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
  }
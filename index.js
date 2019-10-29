function wakeDog(dogName, dogBreed){
    let wakeString = `Wake ${dogName} the ${dogBreed}`
    console.log(wakeString);
    return wakeString
}

function leashDog(dogName, dogBreed){
    let leashString = `Leash ${dogName} the ${dogBreed}`
    console.log(leashString)
    return leashString
}

function walkToPark(dogName, dogBreed){
    let parkString = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(parkString)
    return parkString
}

function throwFrisbee(dogName, dogBreed){
    let throwString = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(throwString)
    return throwString
}

function walkHome(dogName,dogBreed){
    let homeString = `Walk home with ${dogName} the ${dogBreed}`
    console.log(homeString)
    return homeString
}

function unleashDog(dogName,dogBreed){
    let unleashString = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleashString)
    return unleashString
}

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName,dogBreed){
    let exerciseArr = []
    for(let i=0;i<routine.length; i++ ){
        // console.log(routine[i](dogName,dogBreed))
        exerciseArr.push(routine[i](dogName,dogBreed))
    }
    // debugger
    return exerciseArr

    // return routine.map(function(r){
    //     // console.log(r)
    //     return r(dogName,dogBreed)
    // })
}

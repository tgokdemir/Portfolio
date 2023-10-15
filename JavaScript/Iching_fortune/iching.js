/* This script generates a random name  for the user and also 
generates a divination using the ancient Chinese divination text called
"I Ching"*/

// Function to generate random numbers
function genRandNum(num){
    // Generates a random number between 0 to num-1
    return Math.floor(Math.random()*num);
}

const namesAndAdjectives ={
    names: ['alligator', 'fox', 'lion', 'wolf', 'deer', 'rabbit', 'machine'
    , 'robot'],
    adjectives1: [],
    adjectives2: []
}

/* A factory function that generates random avatar name objects for 
the user*/
function genRandName(){
    return {}
}

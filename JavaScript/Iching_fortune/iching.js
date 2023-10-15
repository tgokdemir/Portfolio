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
    adjectives1: ['beautifull','ugly','fast', 'excited','charming','irresistable', 
        'sleeping'],
    adjectives2: ['runner','fainter','liar','vibrant','Exquisite']
}

/* A factory function that generates random avatar name objects for 
the user*/
function genRandName(){
    return {
        adjective1: namesAndAdjectives.adjectives1[genRandNum(namesAndAdjectives.adjectives1.length)],
        adjective2: namesAndAdjectives.adjectives2[genRandNum(namesAndAdjectives.adjectives2.length)],
        name: namesAndAdjectives.names[genRandNum(namesAndAdjectives.names.length)],
        get fullName(){
            return `${this.adjective1}${this.adjective2}${this.name}`
        }
    }
}


const name1 =genRandName();

console.log(name1.fullName);
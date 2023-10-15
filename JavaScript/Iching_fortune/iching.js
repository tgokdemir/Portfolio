/* This script generates a random name  for the user and also 
generates a divination using the ancient Chinese divination text called
"I Ching"*/

// Function to generate random numbers
function genRandNum(num){
    // Generates a random number between 0 to num-1
    return Math.floor(Math.random()*num);
}

// names and adjectives database for generating random names
const namesAndAdjectives ={
    names: ['Alligator', 'Fox', 'Lion', 'Wolf', 'Deer', 'Rabbit', 'Machine'
    , 'Robot'],
    adjectives1: ['Beautifull','Ugly','Fast', 'Excited','Charming','Irresistable', 
        'Sleeping'],
    adjectives2: ['Runner','Fainter','Liar','Vibrant','Exquisite']
}

// I Ching hexagrams for divination
const iChingHexagrams = [
    {
        number: 32,
        name : 'Permanance',
        lines : ' - -\n'+'  - -\n'+'  ---\n'+'  ---\n'+'  ---\n'+'  - -'
                        
    }, {
        number: 24,
        name : 'Return',
        lines : ' - -\n'+'  - -\n'+'  - -\n'+'  - -\n'+'  - -\n'+'  ---'
                        
    }, {
        number: 4,
        name : 'Ignorance',
        lines : ' ---\n'+'  - -\n'+'  - -\n'+'  - -\n'+'  ---\n'+'  - -'
                        
    }, {
        number: 1,
        name : 'Sunrise',
        lines : ' ---\n'+'  ---\n'+'  ---\n'+'  ---\n'+'  ---\n'+'  ---'
                        
    }, {
        number: 41,
        name : 'Reduction',
        lines : ' ---\n'+'  - -\n'+'  - -\n'+'  - -\n'+'  ---\n'+'  ---'
                        
    }, {
        number: 11,
        name : 'Passing Through',
        lines : ' - -\n'+'  - -\n'+'  - -\n'+'  ---\n'+'  ---\n'+'  ---'
                        
    }, {
        number: 33,
        name : 'Withdrawal',
        lines : ' ---\n'+'  ---\n'+'  ---\n'+'  ---\n'+'  - -\n'+'  - -'
                        
    }, {
        number: 28,
        name : 'Too Much',
        lines : ' - -\n'+'  ---\n'+'  ---\n'+'  ---\n'+'  ---\n'+'  - -'
                        
    }, {
        number: 43,
        name : 'Deciding',
        lines : ' - -\n'+'  ---\n'+'  ---\n'+'  ---\n'+'  ---\n'+'  ---'
                        
    }, {
        number: 9,
        name : 'Minor Restraint',
        lines : ' ---\n'+'  ---\n'+'  - -\n'+'  ---\n'+'  ---\n'+'  ---'
                        
    }
]

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


// A function that makes an I ching divination
function iChingDivination(){
    let userName = genRandName();
    let hexagram = iChingHexagrams[genRandNum(iChingHexagrams.length)];
    console.log(`\nDear ${userName.fullName}, here are the results of your I ching consultation:\n${hexagram.number}. ${hexagram.name} \n Hexagram lines:\n ${hexagram.lines}`  )
}

// Make a divination
iChingDivination()


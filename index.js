//takes an array of driver names and a string as arguments
//returns the matching list of drivers
//should be case insensitive

function findMatching(array, name) {
    const foundMatch = array.filter((element) => {
       if (name.toUpperCase() === element.toUpperCase()) {
        return element;
       }
    })
    return foundMatch;
}

//takes an array of drivers names and a string as arguments for querying the array
//returns all drivers whose names begin with the provided letters

function fuzzyMatch(array, letters) {
    const lengthOfLetters = letters.length;
    const foundLetter = array.filter((element) => {
        let driver = element.slice(0, lengthOfLetters);
            return driver === letters;
    })
    return foundLetter;
}

//fuzzyMatch(["Sally", "Bob", "Sam", "Charlie"], ["A", "S", "B"]);

//takes an array of driver objects and a string as arguments
//each driver object has two properties: name and hometown
//return each element whose name property matches the provided string argument

function matchName(driverObject, string) {
    const nameMatch = driverObject.filter((element) => {
        if (string === element.name) {
            return element;
        }
    })
    return nameMatch;
}
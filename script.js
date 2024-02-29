const userInputString = prompt("Enter flavors seperated by a comma");

const stringArray = userInputString.split(",");

function createObject(array) {
    const observedFlavors = {}
    for(let i = 0; i < array.length; i++) {
        if(observedFlavors[array[i]] == undefined) {
            observedFlavors[array[i]] = 1;
        } else {
            observedFlavors[array[i]] += 1;
        }
    }
    return observedFlavors;
}

console.table(createObject(stringArray));
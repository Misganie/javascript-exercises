const findTheOldest = function(people) {
    let oldest = null;
    for (const person of people) {
        const age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        if (oldest === null || age > oldest.age) {
            oldest = {
                name: person.name,
                age: age
            };
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

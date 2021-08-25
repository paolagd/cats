// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, printFunction) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    printFunction(data);
  });
}

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// export the function
module.exports = breedDetailsFromFile;
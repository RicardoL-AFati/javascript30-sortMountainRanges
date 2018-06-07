// Array of moutain ranges and selecting the unordered list and buttons
const mountains = ['Sawatch Range', 'Sangre de Cristo Mountains', 'San Juan Mountains', 'Mosquito Range', 'Front Range', 'Elk Mountains', 'Gore Range', 'Medicine Bow Mountains', 'Flat Tops', 'Rabbit Ears Range', 'Park Range', 'White River Plateau', 'Grand Mesa', 'Laramie Mountains', 'Uncompaghre Plateau', 'Ute Mountain', 'Raton Mesa'];
const mountainList = document.querySelector('#mountains');
const sortButtons = document.querySelectorAll('button');

// Creating copy to sort
const sortedMountains = [...mountains];
// Regex to match any 'range, mountains, plateau, etc' in range name
const regex = /\s(Mountain|Mountains|Range|Plateau|Mesa)/;
// Updates unordered list with passed in array
function updateList(mountainArray) {
  mountainList.innerHTML = mountainArray.map(mountain => `<li>${mountain}</li>`).join('');   
}
// Sorts mountains (after removing regex match) in ascending or descending order
function sortMountains() {  
  sortedMountains.sort((a, b) => {
    a = a.replace(regex, '');
    b = b.replace(regex, '');
    if (this.id === "ascending") {
        return (a < b) ? -1 : 1;
    } else {
        return (a > b) ? -1: 1;
    }
  });
  // Updating list with sorted array
  updateList(sortedMountains);
}
// Populating list on page load
updateList(mountains);
// Click event for sort buttons
sortButtons.forEach(button => button.addEventListener('click', sortMountains));

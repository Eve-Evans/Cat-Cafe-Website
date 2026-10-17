// ------------------------------
// Cat Photo Gallery
// ------------------------------
// University Of Worcester (2026) Arrays, Objects, and Loops COMP1441 Web Technologies. Available at: https://worcesterbb.blackboard.com/ultra/courses/_56065_1/outline/file/_2970200_1 (Accessed: 30 April 2026)
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const button = document.querySelector('.full-img .dark');
const overlay = document.querySelector('.overlay');
const catName = document.getElementById('cat-name');
const catAge = document.getElementById('cat-age');
const catPersonality = document.getElementById('cat-personality');

// ------------------------------
// Array of cats
// ------------------------------
const cats = [
  { src: 'IMG_0300.jpg', name: 'Fifi',   age: '2 years old', personality: 'Mischievous' },
  { src: 'IMG_0301.jpg', name: 'Harry', age: '2 years old', personality: 'Very cuddly' },
  { src: 'IMG_0302.jpg', name: 'Izzy', age: '1 year old', personality: 'Playful' },
  { src: 'IMG_0303.jpg', name: 'Lola', age: '3 years old', personality: 'Sometimes Calm' },
  { src: 'IMG_0304.jpg', name: 'Niall', age: '2 years old', personality: 'Energetic and wishes he could sing like Niall Horan' },
  { src: 'IMG_0305.jpg', name: 'Biscuit', age: '1 year old', personality: 'Shy but loves Harry Styles' },
  { src: 'IMG_0306.jpg', name: 'Fluffy', age: '4 years old', personality: 'Strong Independent Queen. Dont mess with her' }
];
// ------------------------------
// Looping through images in array
// ------------------------------
for (const cat of cats) {
  const newImage = document.createElement('img'); // Create a new img element for each cat
  newImage.setAttribute('src', `media/${cat.src}`);
  thumbBar.appendChild(newImage); // Add the new image to the thumbBar
  newImage.addEventListener('click', (e) => { // When the thumbnail is clicked, update the displayed image and cat info
    displayedImage.src = e.target.src;
    catName.textContent = cat.name;
    catAge.textContent = `Age: ${cat.age}`;
    catPersonality.textContent = cat.personality;
  });
}
// ------------------------------
// Clicking on the darken button
// ------------------------------
button.addEventListener('click', () => {
  const currentClass = button.getAttribute('class');
    if (currentClass === 'dark') { // If the button is currently in 'dark' mode, switch to 'light' mode
      button.setAttribute('class', 'light');
      button.textContent = 'Lighten';
      overlay.style.backgroundColor = '#00000080';
    } else { // If the button is currently in 'light' mode, switch to 'dark' mode
      button.setAttribute('class', 'dark');
      button.textContent = 'Darken';
      overlay.style.backgroundColor = '#00000000';
    }
}); 
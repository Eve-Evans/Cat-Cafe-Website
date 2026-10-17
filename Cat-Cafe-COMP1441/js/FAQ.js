// ------------------------------
// Accordian header: FAQ buttons 
// ------------------------------
//w3schools (2026). How TO - Collapsibles/Accordion. Available at :  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion( 13 April 2026)
const accordionFAQbutton = document.getElementsByClassName('FAQ-button');

for (var i = 0; i < accordionFAQbutton.length; i++) { // Loop through all FAQ buttons
  accordionFAQbutton[i].addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle the 'active' class on the clicked button
    const panel = this.nextElementSibling; // Get the next sibling element, which is the panel containing the answer
    if (panel.style.display === 'block') { // If the panel is currently displayed, hide it
      panel.style.display = 'none';
    } else { // If the panel is currently hidden, show it
      panel.style.display = 'block';
    }
  });
}

// ------------------------------
// Theme & Font Size Preferences
// ------------------------------
// University Of Worcester (2026) Client-Side Storage COMP1441 Web Technologies. Available at: https://worcesterbb.blackboard.com/ultra/courses/_56065_1/outline/file/_2970200_1 (Accessed: 30 April 2026)
// Creates an object to store the users preferences with a main theme and font size.
let userPreferences = { 
    theme: "pink",
    fontSize: 16  // These are the default preferences
};

// See if preferences exist in localStorage, if so, load them. If not, save the default preferences.
let storedThemePreferences = localStorage.getItem("userPreferences");
if (storedThemePreferences) { // If preferences exist
    userPreferences = JSON.parse(storedThemePreferences); // The stored JSON string is converted back to an object and assigned to userPreferences
} else { // If no preferences exist, save the default preferences to localStorage
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences)); 
}

// ------------------------------
// Apply Theme & Font Size
// ------------------------------
function applyPreferences() {
    updateTheme(userPreferences.theme);
    updateFontSize(userPreferences.fontSize);

    // Update the theme dropdown
    const themeSelector = document.getElementById("theme-selector");
    if (themeSelector) themeSelector.value = userPreferences.theme;

    // Update the font size input
    const fontSizeInput = document.getElementById("font-size");
    if (fontSizeInput) fontSizeInput.value = userPreferences.fontSize;
}

// ------------------------------
// Save & Update Font Size
// ------------------------------
function updateFontSizePreference(e) {
    const newSize = Number(e.target.value); // The new font size from users input
    userPreferences.fontSize = newSize;
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));// The new font size is set in local storage
    updateFontSize(newSize); // The updateFontSize function is called to apply the new font size to the page
}
// ------------------------------
// Save & Update Theme
// ------------------------------
function updateThemePreference(e) {
    const newTheme = e.target.value; // The new theme from users input
    userPreferences.theme = newTheme;
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences)); // The new theme is set in local storage
    updateTheme(newTheme); // The updateTheme function is called to apply the new theme to the page
}
// ------------------------------
// Font Size Function
// ------------------------------
function updateFontSize(size) {
    const mainContent = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    const aside = document.querySelector('.aside');
    const navLinks = document.querySelectorAll('nav a');
    const footerLinks = document.querySelectorAll('footer a');

    mainContent.style.fontSize = size + "px";  
    footer.style.fontSize = size + "px";
    aside.style.fontSize = size + "px";
    for (let link of navLinks) {
        link.style.fontSize = size + "px";
    }
    for (let link of footerLinks) {
        link.style.fontSize = size + "px";
    }
}


// ------------------------------
// Theme Function
// ------------------------------
function updateTheme(theme) {
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const aside = document.querySelector('.aside');
    const footerLinks = document.querySelectorAll('footer a');
    const container = document.querySelector('.container');
    const nav = document.querySelectorAll('nav ul');
    const navLinks = document.querySelectorAll('nav a');
    const sampleText = document.getElementById('sample-text');
    const menuBox = document.querySelectorAll('.menu-box');
    const menuSection = document.querySelectorAll('.menu-section');
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');
    const catInfo = document.getElementById('cat-info');
    const thumbBar = document.querySelectorAll('.thumb-bar img');
    const displayedImage = document.getElementById('displayed-image');
    const faqButtons = document.querySelectorAll('.FAQ-button');
    const faqAnswers = document.querySelectorAll('.FAQ-answer');

    if (theme === "pink") {
        main.style.backgroundColor = "#f8d7cd";
        main.style.color = "#02024e";
        header.style.backgroundColor = "#ee91a9";
        header.style.color = "#7A3B46";
        footer.style.backgroundColor = "#ee91a9";
        footer.style.color = "black";
        aside.style.backgroundColor = "#f6de9e";
        aside.style.color = "black"; 
        for (let link of footerLinks) {
            link.style.color = "black";
        }
        container.style.backgroundColor = "#fab49f";
        for (let item of nav) {
            item.style.backgroundColor = "#f6de9e";
        }
        for (let link of navLinks) {
            link.style.color = "#02024e";
            link.style.borderColor = "#ee91a9";
        }
        sampleText.style.color = "#02024e";
        for (let box of menuBox) {
            box.style.backgroundColor = "#ee91a881";
            box.style.color = "#333";
        }
        for (let section of menuSection) {
            section.style.backgroundColor = "#ee91a83d";
            section.style.borderColor = "#ee91a8";
            section.style.color = "#333";
        }
        if (bookingForm) {
            bookingForm.style.backgroundColor = "#f2f2f2";
            bookingForm.style.color = "#02024e";
            bookingForm.style.borderColor = "#ee91a9";
        }
        if (contactForm) {
            contactForm.style.backgroundColor = "#f2f2f2";
            contactForm.style.color = "#02024e";
            contactForm.style.borderColor = "#ee91a9";
        }
        if (catInfo) {
            catInfo.style.backgroundColor = "#ee91a86c";
            catInfo.style.borderColor = "#ee91a9";
            catInfo.style.color = "#02024e";
        }
        if (thumbBar) {
            for (let img of thumbBar) {
                img.style.borderColor = "#ee91a9";
            }
        }
        if (displayedImage) {
            displayedImage.style.borderColor = "#ee91a9";
        }
        for (let button of faqButtons) {
            button.style.backgroundColor = "#f6de9e";
            button.style.color = "#02024e";
        }
        for (let answer of faqAnswers) {
            answer.style.backgroundColor = "#f8d7cd";
            answer.style.color = "#02024e";
        }

    } else if (theme === "light") {
        main.style.backgroundColor = "white";
        main.style.color = "black";    
        header.style.backgroundColor = "#ebc1cc";
        header.style.color = "black";
        footer.style.backgroundColor = "#ebc1cc";
        footer.style.color = "black";
        aside.style.backgroundColor = "#f8eed1";
        aside.style.color = "black";
        for (let link of footerLinks) {
            link.style.color = "black";
        }
        container.style.backgroundColor = "#f7d3c8";
        for (let item of nav) {
            item.style.backgroundColor = "#f8eed1";
            item.style.color = "black";
        }
        for (let link of navLinks) {
            link.style.color = "black";
            link.style.borderColor = "#ebc1cc";
        }
        sampleText.style.color = "black";
        for (let box of menuBox) {
            box.style.backgroundColor = "#ebc1cc59";
            box.style.color = "black";
        }
        for (let section of menuSection) {
            section.style.backgroundColor = "#ebc1cc6b";
            section.style.borderColor = "#ebc1cc";
            section.style.color = "black";
        }
        if (bookingForm) {
            bookingForm.style.backgroundColor = "#f2f2f2";
            bookingForm.style.color = "black";
            bookingForm.style.borderColor = "#ebc1cc";
        }
        if (contactForm) {
            contactForm.style.backgroundColor = "#f2f2f2";
            contactForm.style.color = "black";
            contactForm.style.borderColor = "#ebc1cc";
        }
        if (catInfo) {
            catInfo.style.backgroundColor = "#ebc1cc6b";
            catInfo.style.borderColor = "#ebc1cc";
            catInfo.style.color = "black";

        }
        if (thumbBar) {
            for (let img of thumbBar) {
                img.style.borderColor = "#ebc1cc";
            }
        }
        if (displayedImage) {
            displayedImage.style.borderColor = "#ebc1cc";
        }
        for (let button of faqButtons) {
            button.style.backgroundColor = "#f8eed1";
            button.style.color = "black";
        }
        for (let answer of faqAnswers) {
            answer.style.backgroundColor = "white";
            answer.style.color = "black";
        }
        
    } else if (theme === "dark") {
        main.style.backgroundColor = "#35424A";
        main.style.color = "white";
        header.style.backgroundColor = "#282C34";
        header.style.color = "white";
        footer.style.backgroundColor = "#282C34";
        footer.style.color = "white";
        aside.style.backgroundColor = "#312E40";
        aside.style.color = "white";
        for (let link of footerLinks) {
            link.style.color = "white";
        }
        container.style.backgroundColor = "#35374A";
        for (let item of nav) {
            item.style.backgroundColor = "#2E3D40";
            item.style.color = "white";
        }
        for (let link of navLinks) {
            link.style.color = "white";
            link.style.borderColor = "#282C34";
        }
        sampleText.style.color = "white";
        for (let box of menuBox) {
            box.style.backgroundColor = "#282c34c4";
            box.style.color = "white";
        }
        for (let section of menuSection) {
            section.style.backgroundColor = "#282c34c4";
            section.style.borderColor = "#282C34";
            section.style.color = "white";
        }
        if (bookingForm) {
            bookingForm.style.backgroundColor = "#282c34c4";
            bookingForm.style.color = "white";
            bookingForm.style.borderColor = "#282C34";
        }
        if (contactForm) {
            contactForm.style.backgroundColor = "#282c34c4";
            contactForm.style.color = "white";
            contactForm.style.borderColor = "#282C34";
        }
        if (catInfo) {
            catInfo.style.backgroundColor = "#282c34c4";
            catInfo.style.borderColor = "#282C34";
            catInfo.style.color = "white";
        }
        if (thumbBar) {
            for (let img of thumbBar) {
                img.style.borderColor = "#282C34";
            }
        }
        if (displayedImage) {
            displayedImage.style.borderColor = "#282C34";
        }
        for (let button of faqButtons) {
            button.style.backgroundColor = "#312E40";
            button.style.color = "white";
        }
        for (let answer of faqAnswers) {
            answer.style.backgroundColor = "#35424A";
            answer.style.color = "white";
        }
    } else if (theme === "rainbow") {
        main.style.backgroundColor = "#FFB671";
        main.style.color = "#386462";
        header.style.backgroundColor = "#AAE37F";
        header.style.color = "FF817F";
        footer.style.backgroundColor = "#FF817F";
        footer.style.color = "#FFEE90";
        aside.style.backgroundColor = "#FFEE90";
        aside.style.color = "#FF817F";
        for (let link of footerLinks) {
            link.style.color = "#FFEE90";
        }
        container.style.backgroundColor = "#63B0AC";
        for (let item of nav) {
            item.style.backgroundColor = "#FF817F";
            item.style.color = "white";
        }
        for (let link of navLinks) {
            link.style.color = "white";
            link.style.borderColor = "#AAE37F";
        }
        sampleText.style.color = "#FF817F";
        for (let box of menuBox) {
            box.style.backgroundColor = "#63B0ACa9";
            box.style.color = "white";
        }
        for (let section of menuSection) {
            section.style.backgroundColor = "#63B0ACa9";
            section.style.borderColor = "#63B0AC";
            section.style.color = "white";
        }
        if (bookingForm) {
            bookingForm.style.backgroundColor = "#63B0ACa9";
            bookingForm.style.color = "white";
            bookingForm.style.borderColor = "#63B0AC";
        }
        if (contactForm) {
            contactForm.style.backgroundColor = "#63B0ACa9";
            contactForm.style.color = "white";
            contactForm.style.borderColor = "#63B0AC";
        }
        if (catInfo) {
            catInfo.style.backgroundColor = "#63B0ACa9";
            catInfo.style.borderColor = "#63B0AC";
            catInfo.style.color = "white";
        }
        if (thumbBar) {
            for (let img of thumbBar) {
                img.style.borderColor = "#63B0AC";
            }
        }
        if (displayedImage) {
            displayedImage.style.borderColor = "#63B0AC";   
        }
        for (let button of faqButtons) {
            button.style.backgroundColor = "#FFEE90";
            button.style.color = "#386462";
        }
        for (let answer of faqAnswers) {
            answer.style.backgroundColor = "#FFB671";
            answer.style.color = "#386462";
        }

    }
}

// ------------------------------
// Event Listeners
// ------------------------------
// These listen for when the user changes the font size or theme 
const fontSizeInput = document.getElementById('font-size');
fontSizeInput.addEventListener('input', updateFontSizePreference);

const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', updateThemePreference);

// ------------------------------
// Running the function
// ------------------------------
applyPreferences();

// ------------------------------
// Modal popup for cat yoga
// ------------------------------
//w3schools (2026). How TO – CSS/JS Modal. Available at : https://www.w3schools.com/howto/howto_css_modals.asp (26 April 2026) 
const yogaModal = document.getElementById("cat-yoga-advirtisement-modal");
const openModal = document.getElementById("open-cat-yoga-advirtisement");

openModal.addEventListener("click", () => {
  yogaModal.style.display = "flex"; // Changes CSS when the button is clicked to show the modal
});

window.addEventListener("click", (e) => {
  if (e.target === yogaModal) {
    yogaModal.style.display = "none"; // Changes CSS when the user clicks outside the modal to hide it
  }
});
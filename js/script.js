
// function checkPassword() {
//     const password = prompt("Enter the password:");

//     // Check if the user clicked "Cancel"
//     if (password === null) {
//         return; // Do nothing if canceled
//     }

//     const correctPassword = "123456789"; // Change this to your desired password

//     if (password === correctPassword) {
//         window.location.href = "about.html"; // Change this to your desired URL
//     } else {
//         alert("Incorrect password. Please try again.");
//     }
// }

// Define the passwords here
const passwords = {
    'about.html': '123456789', // Password for About page
    'contact.html': '987654321' // Password for Contact page
};

function checkPassword(targetPage) {
    const correctPassword = passwords[targetPage]; // Get the correct password for the target page
    const password = prompt("Enter the password:");

    // Check if the user clicked "Cancel"
    if (password === null) {
        return; // Do nothing if canceled
    }

    if (password === correctPassword) {
        window.location.href = targetPage; // Redirect to the specified page
    } else {
        alert("Incorrect password. Please try again.");
    }
}

const menu = document.querySelector('#device-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Here you could implement an AJAX call to send this data to a server

    // Temporary feedback response for demonstration
    document.getElementById("feedbackResponse").innerText = `Thank you, ${name}, for your feedback!`;

    // Clear the form
    document.getElementById("feedbackForm").reset();
});

// === FORM VALIDATION
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', e => {
    let messages = [];
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }
    if (email.value === '' || email.value == null) {
        messages.push('Email is required');
    }
    if (subject.value === '' || subject.value == null) {
        messages.push('Fill subject field');
    }
    if (message.value === '' || message.value == null) {
        messages.push('Write message');
    }
    if (messages.length>0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});
// ACTIVATE SEND MAIL NOTIFICATION
function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value, 
    }
    emailjs.send("service_ldxz9j1","template_ud8lsjn",params).then(alert("Message sent!"));
}
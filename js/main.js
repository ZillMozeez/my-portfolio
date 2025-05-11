// === TYPING ANIMATION
// var typed = new Typed(".typing", {
//     strings:["Web Developer", "YouTuber"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// });

// === FORM VALIDATION
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
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

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});

// function validateForm(){
//     let name = document.forms["form"]["name"].value;
//     if(name === ""){
//         alert("Name field is empty");
//         return false;
//     }

//     let email = document.forms["form"]["email"].value;
//         alert("Email is required");
//         return false;
// }

// const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_56tn7xd';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });

function sendForm(){
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_ldxz9j1", "template_56tn7xd", params).then(function(res){
        alert("Success! " + res.status);
    })
}
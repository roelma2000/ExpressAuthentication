 //  Filename: validate.js
 //  Student Name: Rowel Almuete - 301137911 
 //  Date: 2022-Feb-03  

function submitMe() {
    alert("Thank you. I will respond to you ASAP. Here are the details you entered:" + "\n\n"
        +"Your Email: " + document.getElementById("email").value + "\n"
        + "Your Last Name: " + document.getElementById("lname").value + "\n"
        + "Your First Name: " + document.getElementById("fname").value + "\n"
        + "Your Message:\n           " + document.getElementById("message").value + "\n"
    );
}
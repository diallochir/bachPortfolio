document.getElementById("sendEmailButton").addEventListener("click", function() {
    const name = document.getElementById("idName").value;
    const email = document.getElementById("idEmail").value;
    const message = document.getElementById("idMessage").value;
    

    if (!name || !email || !message) {
        alert("Please review the fields in the form.");
        return;
    }
    
    Email.send({
        SecureToken: "8c3bd232-7a9a-4516-8651-9fb19f2127c0",
        To: "diallochir@gmail.com",
        From: "diallochir@gmail.com",
        Subject: `New contact from ${name}`,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then(
        message => alert("Email sent successfully!")
    ).catch(
        error => alert("Failed to send email: " + error)
    );
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Fetch form data
    var formData = new FormData(this);

    // Send form data using AJAX
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
            this.reset(); // Reset form fields
        } else {
            throw new Error('Failed to send email');
        }
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
});
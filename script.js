document.getElementById('registrationForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const address = document.getElementById('address').value;
    const packageSelected = document.getElementById('package').value;

    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            whatsapp: whatsapp,
            address: address,
            package: packageSelected
        }),
    }).then(response => response.json())
      .then(data => {
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form.');
      });
}

document.getElementById('registrationForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const address = document.getElementById('address').value;
    const packageSelected = document.getElementById('package').value;

    fetch('https://script.google.com/macros/s/AKfycbzJfWIb7MX0x4c8xmNKeAZChPq2df34A8tWc7YInsjn-WyOeqJCB1VDrQMK5BEJuOmm/exec', {
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
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form. Check console for details.');
    });
}

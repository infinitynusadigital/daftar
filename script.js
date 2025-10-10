document.getElementById('registrationForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const address = document.getElementById('address').value;
    const packageSelected = document.getElementById('package').value;

    fetch('https://script.google.com/macros/s/AKfycbyyRrxgmD-bV2lC1FgIACQXlG1DyeOSwZc7yiy0PN9XEXlEJbW2x-fKLEklrQiO2i7B/exec', {
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
.then(response => response.json())
.then(data => {
    alert('Form submitted successfully!');
})
.catch(error => {
    console.error('Error:', error); // Ini akan tampil di console browser
    alert('Error submitting form. Check console for details.');
});

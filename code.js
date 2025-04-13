document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputs = form.querySelectorAll('input');
        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const password = inputs[2].value.trim();
        const confirmPassword = inputs[3].value.trim();
        const location = inputs[4].value.trim();
        const zip = inputs[5].value.trim();
        const city = document.getElementById('Location').value;
        const checkbox = document.getElementById('checkbox').checked;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const zipRegex = /^\d{4,10}$/;

        let isValid = true;

        if (!name) {
            alert('Please enter your full name.');
            isValid = false;
        }

        if (!email || !emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (!password) {
            alert('Please enter a password.');
            isValid = false;
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters.');
            isValid = false;
        }

        if (!confirmPassword) {
            alert('Please confirm your password.');
            isValid = false;
        } else if (password !== confirmPassword) {
            alert('Passwords do not match.');
            isValid = false;
        }

        if (!location) {
            alert('Please enter your location.');
            isValid = false;
        }

        if (!zip || !zipRegex.test(zip)) {
            alert('Please enter a valid zip code.');
            isValid = false;
        }

        if (!city) {
            alert('Please select a city.');
            isValid = false;
        }

        if (!checkbox) {
            alert('You must agree to the Terms and Conditions.');
            isValid = false;
        }

        if (!isValid) return;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Location:', location);
        console.log('Zip:', zip);
        console.log('City:', city);
        console.log('Terms Accepted:', checkbox);

        alert('Registration Successful!');
        form.reset();
    });
});

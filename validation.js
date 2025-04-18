    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;
        let username = document.getElementById('username').value;
        let aadhar = document.querySelector('Aadhar').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.querySelector('Confirmpassword').value;

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(msg => msg.textContent = "");

        // Username validation
        if (username.length < 6) {
            alert('Username must be at least 6 characters long.');
            isValid = false;
            return;
        }

        // Aadhar number validation
        const aadharPattern = /^\d{12}$/; // Aadhar number should be exactly 12 digits
        if (!aadharPattern.test(aadhar)) {
            alert('Aadhar number must be exactly 12 digits.');
            isValid = false;
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
        if (email && !emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
            return;
        }

        // Password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            isValid = false;
            return;
        } else if (!passwordPattern.test(password)) {
            alert('Password must include at least one uppercase letter, lowercase letter, digit, and special character.');
            isValid = false;
            return;
        }

        // Confirm Password validation
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            isValid = false;
            return;
        }

        if (isValid) {
            alert('Registration successful!');
        }
    });
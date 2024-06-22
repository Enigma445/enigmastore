document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Check if password has exactly 8 digits
        const passwordPattern = /^\d{8}$/;
        if (!passwordPattern.test(password) || !passwordPattern.test(confirmPassword)) {
            alert("Password must be exactly 8 digits");
            return;
        }

        // If validation passes, redirect to home page
        window.location.href = 'home.html';
    });
});
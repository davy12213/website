
        function login() {
            const username = document.getElementById('username').value; // Get username
            const password = document.getElementById('password').value; // Get password

            // Check credentials
            if (username === 'Group15' && password === 'admin123') {
                alert('Login successful');
                window.location.href = 'dashboard.html'; // Redirect to dashboard
            } else {
                alert('Incorrect username or password');
            }
        }
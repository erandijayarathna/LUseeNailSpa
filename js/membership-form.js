document.addEventListener('DOMContentLoaded', function() {
    // Try to get package from URL first
    const urlParams = new URLSearchParams(window.location.search);
    let package = urlParams.get('package');
    
    // If no URL parameter, try localStorage
    if (!package) {
        package = localStorage.getItem('selectedMembership');
        if (package) {
            localStorage.removeItem('selectedMembership');
            // Update URL to show the package
            window.history.replaceState({}, '', `?package=${package}`);
        }
    }

    const packageInfo = document.getElementById('packageInfo');
    const packageInput = document.getElementById('membershipPackage');
    
    // Define package details (should match main.js)
    const packages = {
        'blossom': {
            name: 'Blossom Elegance Package',
            price: 'LKR9,000/month',
            features: [
                '10% off all services',
                'Priority booking',
                'Free regular polish change',
                'Monthly special offers'
            ]
        },
        'royal': {
            name: 'Royal Glow Package',
            price: 'LKR18,000/month',
            features: [
                '20% off all services',
                'Free monthly manicure',
                'Free nail art design',
                'Exclusive product discounts',
                'Priority booking'
            ]
        }
    };
    
    // Display package or redirect
    if (package && packages[package.toLowerCase()]) {
        const selectedPackage = packages[package.toLowerCase()];
        packageInput.value = selectedPackage.name;
        
        packageInfo.innerHTML = `
            <h3>${selectedPackage.name}</h3>
            <p class="price">${selectedPackage.price}</p>
            <ul>
                ${selectedPackage.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    } else {
        // Show error message and redirect after delay
        packageInfo.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>No package selected. Redirecting to memberships page...</p>
            </div>
        `;
        setTimeout(() => {
            window.location.href = '../memberships.html';
        }, 3000);
    }
    
    // Form submission
    document.getElementById('membershipForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            package: packageInput.value,
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };
        
        // Here you would typically send to server
        console.log('Form submitted:', formData);
        alert('Thank you for your membership application! We will contact you shortly to complete your registration.We will connect you via your email.');
        
        // Reset form
        this.reset();
    });
});


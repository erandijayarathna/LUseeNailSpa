
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz1ENPZFKv8cbpB5658nL10d2jL1N8DMgqpXe1xkSYC_WCeLH1aUoEqVRGPNz2PsM5hYw/exec';
  const form = document.querySelector('form'); // This selects the form on your spa site

  form.addEventListener('submit', e => {
    e.preventDefault(); // Prevents the page from reloading
    
    // Show a "Loading" message to the user
    alert("Sending your booking request...");

    fetch(scriptURL, { 
      method: 'POST', 
      body: new FormData(form) 
    })
    .then(response => {
      alert("Success! Your appointment at LUsee Nail Spa is booked.");
      form.reset(); // Clears the form for the next user
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert("Something went wrong. Please try again.");
    });
  });
// DOM Elements
const appointmentForm = document.getElementById('appointmentForm');
const serviceSelect = document.getElementById('service');
const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');

// Services for Booking
const bookingServices = [
    { name: 'Classic Manicure', duration: '30 min' },
    { name: 'Spa Manicure', duration: '45 min' },
    { name: 'Classic Pedicure', duration: '45 min' },
    { name: 'Spa Pedicure', duration: '60 min' },
    { name: 'Gel Polish Application', duration: '+20 min' },
    { name: 'Acrylic Full Set', duration: '90 min' },
    { name: 'Acrylic Fill', duration: '60 min' },
    { name: 'Nail Art (per nail)', duration: '+5 min' }
];

// Available Time Slots
const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

// Initialize Date Picker
function initDatePicker() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    
    // Disable Sundays
    dateInput.addEventListener('input', function() {
        const selectedDate = new Date(this.value);
        if (selectedDate.getDay() === 0) { // Sunday
            alert('We are closed on Sundays. Please select another date.');
            this.value = '';
        }
    });
}

// Load Services into Select
function loadServices() {
    serviceSelect.innerHTML = '<option value="">Select Service</option>';
    bookingServices.forEach(service => {
        const option = document.createElement('option');
        option.value = service.name;
        option.textContent = `${service.name} (${service.duration})`;
        serviceSelect.appendChild(option);
    });
}

// Load Time Slots
function loadTimeSlots() {
    timeSelect.innerHTML = '<option value="">Select Time</option>';
    timeSlots.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
}

// Form Submission
appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: serviceSelect.value,
        date: dateInput.value,
        time: timeSelect.value
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real app, you would send this data to your server
    console.log('Booking submitted:', formData);
    alert(`Thank you, ${formData.name}! Your appointment for ${formData.service} on ${formData.date} at ${formData.time} has been booked. We'll send a confirmation to ${formData.email}.`);
    
    // Reset form
    this.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initDatePicker();
    loadServices();
    loadTimeSlots();
});




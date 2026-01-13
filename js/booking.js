const scriptURL = 'https://script.google.com/macros/s/AKfycbwA5XoovuHTiAkMPGuxW2EL8cQBIRL0oa66zTvjKyLJQwg-lw7bm6W7GjKNvGpiMjkycQ/exec';

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

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

// 1. Initialize Date Picker
function initDatePicker() {
    const today = new Date();
    dateInput.min = today.toISOString().split('T')[0];
    dateInput.addEventListener('input', function() {
        const selectedDate = new Date(this.value);
        if (selectedDate.getDay() === 0) {
            alert('We are closed on Sundays. Please select another date.');
            this.value = '';
        }
    });
}

// 2. Load Dropdowns
function loadDropdowns() {
    serviceSelect.innerHTML = '<option value="">Select Service</option>';
    bookingServices.forEach(s => serviceSelect.add(new Option(`${s.name} (${s.duration})`, s.name)));
    
    timeSelect.innerHTML = '<option value="">Select Time</option>';
    timeSlots.forEach(t => timeSelect.add(new Option(t, t)));
}

// 3. Merged Form Submission (Validation + Automation)
appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // UI Feedback
    const submitBtn = this.querySelector('button[type="submit"]');
    
    // Manual Validation Check
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !phone || !serviceSelect.value || !dateInput.value || !timeSelect.value) {
        alert('Please fill in all fields before booking.');
        return;
    }

    // Start Automation Process
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending Data...";

    const formData = new FormData(appointmentForm);
    
    fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
        alert(`Success! Thank you, ${name}. Your appointment for ${serviceSelect.value} has been saved to our system.`);
        appointmentForm.reset();
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert("Automation Error: Could not connect to Google Sheets.");
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Book Appointment";
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initDatePicker();
    loadDropdowns();
});


// WhatsApp Widget Functionality
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappPanel = document.getElementById('whatsappPanel');
    const closeWhatsApp = document.getElementById('closeWhatsApp');
    const whatsappForm = document.getElementById('whatsappForm');
  
    // Toggle WhatsApp panel
    whatsappBtn.addEventListener('click', function() {
      whatsappPanel.classList.toggle('active');
    });
  
    // Close panel
    closeWhatsApp.addEventListener('click', function() {
      whatsappPanel.classList.remove('active');
    });
  
    // Form submission
    whatsappForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = this.querySelector('input[type="text"]').value;
      const message = this.querySelector('input[type="text"]:nth-child(2)').value;
      
      // Replace with your WhatsApp number (remove spaces and special characters)
      const phoneNumber = "1234567890";
      
      // Open WhatsApp with prefilled message
      window.open(`https://wa.me/${phoneNumber}?text=Hi%20LUsee%20Nail%20Spa!%20My%20name%20is%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`, '_blank');
      
      // Reset form and close panel
      this.reset();
      whatsappPanel.classList.remove('active');
    });
  
    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.whatsapp-widget')) {
        whatsappPanel.classList.remove('active');
      }
    });
  });
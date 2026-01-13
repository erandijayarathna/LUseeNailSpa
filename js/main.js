console.log("Main.js loaded!");

// DOM Elements
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const backToTop = document.getElementById('backToTop');
const servicesContainer = document.getElementById('servicesContainer');
const galleryContainer = document.getElementById('galleryContainer');
const membershipContainer = document.getElementById('membershipContainer');
const testimonialsContainer = document.getElementById('testimonialsContainer');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Services Data

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    const servicesContainer = document.getElementById('servicesContainer');
    console.log("Services container element:", servicesContainer);
    
    if (!servicesContainer) {
        console.error("Could not find services container!");
        return;
    }
    
    const services = [
        {
            icon: 'fas fa-paint-brush',
            title: 'Nail Art',
            description: 'Creative and customized nail designs to express your unique style with precision and flair.'
        },
        {
            icon: 'fas fa-hand-sparkles',
            title: 'Manicure & Pedicure',
            description: 'Classic and spa treatments to pamper your hands and feet, leaving them refreshed and rejuvenated.'
        },
        {
            icon: 'fas fa-gem',
            title: 'Gel/Acrylic Nails',
            description: 'Long-lasting enhancements that provide strength and beauty with our premium gel and acrylic options.'
        },
        {
            icon: 'fas fa-spa',
            title: 'Spa Treatments',
            description: 'Luxurious treatments including paraffin wax, hot stone massage, and deep conditioning for ultimate relaxation.'
        },
        {
            icon: 'fas fa-hand-holding-water',
            title: 'Paraffin Wax Therapy',
            description: 'Deeply moisturize and soothe dry hands or feet with our warm paraffin wax treatment, leaving skin incredibly soft and joints relaxed.'
        },
        {
            icon: 'fas fa-band-aid',
            title: 'Nail Rescue Treatment',
            description: 'Specialized care for damaged nails with our strengthening system that repairs cracks, splits and peeling for healthier natural nails.'
        }
    ];
    
    servicesContainer.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
    
    console.log("Services should be loaded now");
});

// Gallery Data
const gallery = [
    {
        image: 'https://stylezuri.com/wp-content/uploads/2024/08/7aaa76f0-0a93-4485-89cc-6f647472c3a9.jpeg',
        alt: 'Nail Design 1'
    },
    {
        image: 'https://i.pinimg.com/564x/6e/97/5e/6e975efaea427448c5cdb49128df0989.jpg',
        alt: 'Nail Design 2'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71mCOMmpIxL._UF1000,1000_QL80_.jpg',
        alt: 'Nail Design 3'
    },
    {
        image: 'https://i.pinimg.com/736x/06/30/e0/0630e0a32813469b3ac60108978eea96.jpg',
        alt: 'Nail Design 4'
    },
    {
        image: 'https://i.pinimg.com/1200x/8b/8f/8f/8b8f8fcf8d1ee514edc60d129ad60faf.jpg',
        alt: 'Nail Design 5'
    },
    {
        image: 'https://i.pinimg.com/736x/74/59/36/7459360b6e5aa0c4eda5b9e8c9daaecd.jpg',
        alt: 'Nail Design 6'
    },
    {
        image: 'https://i.pinimg.com/736x/1b/3e/61/1b3e619c34f5ba0e08520b66fb442eda.jpg',
        alt: 'Nail Design 7'
    },
    {
        image: 'https://i.pinimg.com/236x/f2/19/27/f219272d1a5ce1c20a824ef4a9275e94.jpg',
        alt: 'Nail Design 8'
    },
];

// Membership Data
const memberships = [
    {
        title: ' Blossom Elegance Package',
        price: 'LKR9,000/month',
        features: [
            '10% off all services',
            'Priority booking',
            'Free regular polish change',
            'Monthly special offers'
        ],
        featured: false
    },
    {
        title: 'Royal Glow Package',
        price: 'LKR18,000/month',
        features: [
            '20% off all services',
            'Free monthly manicure',
            'Free nail art design',
            'Exclusive product discounts',
            'Priority booking'
        ],
        featured: true
    }
];


// Load Gallery
function loadGallery() {
    galleryContainer.innerHTML = gallery.map(item => `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.alt}" loading="lazy">
        </div>
    `).join('');
}

// Load Memberships

function loadMemberships() {
    membershipContainer.innerHTML = memberships.map((membership, index) => `
        <div class="membership-card ${membership.featured ? 'featured' : ''}">
            <h3>${membership.title}</h3>
            <p class="price">${membership.price}</p>
            <ul>
                ${membership.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="html/memberships-signup.html?package=${membership.featured ? 'royal' : 'blossom'}" 
               class="btn btn-primary" 
               data-package="${membership.featured ? 'royal' : 'blossom'}">
                Join Now
            </a>
        </div>
    `).join('');
}

      // the click handler 
document.querySelectorAll('.membership-card .btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const package = this.getAttribute('data-package');
        
        // Store in localStorage as fallback
        localStorage.setItem('selectedMembership', package);
        
        // Redirect with URL parameter
        window.location.href = `/html/memberships-signup.html?package=${package}`;
    });
});





// Load Testimonials

document.addEventListener('DOMContentLoaded', function() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    
    const testimonials = [
     {
        stars: 5,
        content: 'The nail artists here are true artists! I showed a picture of a complex floral design and they recreated it perfectly, even adding 3D elements. Got so many compliments all month long.',
        author: 'Jenny De Silva.',
        role: 'Nail Art Enthusiast',
        image: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?semt=ais_hybrid&w=740&q=80'
      }, 
      {
        stars: 5,
        content: 'As a nurse, I amm extremely particular about cleanliness. LUsee exceeds all hygiene standards - they open sealed tool packages in front of you and sterilize everything. My go-to place for 2 years now!',
        author: 'Dr. Nicole Tomes.',
        role: 'Medical Professional',
        image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827774.jpg?semt=ais_hybrid&w=740'
      },
      
      {
        stars: 5,
        content: 'Absolutely love LUsee Nail Spa! The attention to detail is incredible and my nails always look perfect.',
        author: 'Sarah Jasmin.',
        role: 'Regular Client',
        image: 'https://t3.ftcdn.net/jpg/07/14/70/78/360_F_714707845_iXB3PMasWrD2s3X0xRL7pmKm0XfUMXDs.jpg'
      },
      {
        stars: 5,
        content: 'Best nail spa in town! I\'ve been going here for over a year and have never been disappointed.',
        author: 'Emily Taniya.',
        role: 'Regular Client',
        image: 'https://media.istockphoto.com/id/936265072/photo/smiling-mature-woman.jpg?s=612x612&w=0&k=20&c=fPetrAec8PaHeZ7FNu-GeQ83nT3jLsSOUgNltlpUKm0='
      },
      {
        stars: 5,
        content: 'I came for my wedding nails and they exceeded all my expectations. Highly recommend!',
        author: 'Jessica Margrat.',
        role: 'Bride',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP7Vif2h0ILraTcFSL4QpeVeTCnOSfHyEV8wGvHLg-q4jXk4iti421L-td6Fe9nxi8nY&usqp=CAU'
      },
      {
        stars: 5,
        content: 'Best nail spa in town! I\'ve been going here for over a year and have never been disappointed.',
        author: 'Susi T.',
        role: 'Regular Client',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKzPzAZOK2q9aCpVDC5HRDSNxvAsJ45lo1pd5fwIemlI72-3FRTvxzVmEerdGo4SP8OY&usqp=CAU'
      },
      
      {
        stars: 4.5,
        content: 'Booked LUsee for my entire bridal party and they accommodated all 8 of us beautifully. The nail artists perfectly matched our wedding colors and everyone looked flawless in photos. They even served us champagne!',
        author: 'Sophia Luwis.',
        role: 'Bride',
        image: 'https://media.istockphoto.com/id/1089394192/photo/bride.jpg?s=612x612&w=0&k=20&c=gfWbaMhgZWfhIMSVxorAdtnEydzC3bEgXwWXTUJb36s='
      },
      
      {
        stars: 4.5,
        content: 'Never thought I had enjoy a manicure until my wife dragged me here. The gentlemens grooming service is top-notch - no polish, just clean, buffed nails and an amazing hand massage. I amm converted!',
        author: 'Micle Perera.',
        role: 'First-Time Client',
        image: 'https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg'
      },
      {
        stars: 4.5,
        content: 'The moment I walked into LUsee, I felt transported to a luxury spa. The massage chairs for pedicures are heavenly, and my gel manicure lasted a full 4 weeks without chipping. Worth every penny!',
        author: 'Amanda Roges.',
        role: 'Loyal Customer',
        image: 'https://t3.ftcdn.net/jpg/06/20/73/04/360_F_620730419_9cf73do9dxGaNJCztZPETHdB5bdrbW5D.jpg'
      }
    ];
  
    function renderStars(rating) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
          stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
          stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
          stars += '<i class="far fa-star"></i>';
        }
      }
      return stars;
    }
  
    testimonialsContainer.innerHTML = testimonials.map(testimonial => `
      <div class="testimonial-card">
        <div class="stars">
          ${renderStars(testimonial.stars)}
        </div>
        <p class="testimonial-content">"${testimonial.content}"</p>
        <div class="testimonial-author">
          <img src="${testimonial.image}" alt="${testimonial.author}">
          <div>
            <h4>${testimonial.author}</h4>
            <p>${testimonial.role}</p>
          </div>
        </div>
      </div>
    `).join('');
  });

const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');

testimonialPrev.addEventListener('click', () => {
    testimonialsContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

testimonialNext.addEventListener('click', () => {
    testimonialsContainer.scrollBy({ left: 300, behavior: 'smooth' });
});
  

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('testimonialsContainer');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    // Calculate scroll amount based on card width
    const scrollAmount = () => {
      const card = document.querySelector('.testimonial-card');
      return card ? card.offsetWidth + 30 : 300; // 30px is the gap
    };
    
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });
    
    // Disable/enable buttons based on scroll position
    const updateNavButtons = () => {
      prevBtn.disabled = slider.scrollLeft <= 0;
      nextBtn.disabled = slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 1);
    };
    
    slider.addEventListener('scroll', updateNavButtons);
    updateNavButtons(); // Initial check
  });

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    loadGallery();
    loadMemberships();
    loadTestimonials();
    loadMemberships();
    setupFormClose();
});




//  login form handler 2
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const { token } = await loginUser({ email, password });
        localStorage.setItem('token', token);
        alert('Login successful!');
        window.location.href = 'profile.html';
    } catch (error) {
        console.error('Login error:', error);
        alert(error.message);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // ===== Mobile Menu Toggle =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav__links');
    const menuIcon = menuToggle?.querySelector('i');
    
    if(menuToggle && navLinks && menuIcon){
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-times');
            });
        });
    }
    
    // ===== Home Background Slider =====
    const homeSlides = document.querySelectorAll('.home-slide');
    let homeCurrentIndex = 0;
    
    function showHomeSlide(index){
        homeSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    if(homeSlides.length > 0){
        setInterval(() => {
            homeCurrentIndex = (homeCurrentIndex + 1) % homeSlides.length;
            showHomeSlide(homeCurrentIndex);
        }, 5000);
    }
    
    // ===== Gallery Slider =====
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const galleryDots = document.querySelectorAll('.gallery-dots .dot');
    let galleryCurrentIndex = 0;
    
    function showGallerySlide(index){
        gallerySlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        galleryDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }
    
    const nextGalleryBtn = document.querySelector('.next-btn');
    const prevGalleryBtn = document.querySelector('.prev-btn');
    
    nextGalleryBtn?.addEventListener('click', () => {
        galleryCurrentIndex = (galleryCurrentIndex + 1) % gallerySlides.length;
        showGallerySlide(galleryCurrentIndex);
    });
    
    prevGalleryBtn?.addEventListener('click', () => {
        galleryCurrentIndex = (galleryCurrentIndex - 1 + gallerySlides.length) % gallerySlides.length;
        showGallerySlide(galleryCurrentIndex);
    });
    
    galleryDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            galleryCurrentIndex = index;
            showGallerySlide(galleryCurrentIndex);
        });
    });
    
    // ===== Projects Tab Functionality =====
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Here you would typically filter projects based on the selected tab
        });
    });
    
    // ===== Smooth Scrolling for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            
            const targetId = anchor.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: elementPosition - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== Form Submission =====
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if(!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    
    // Set Current Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.className = 'bx bx-sun';
        } else {
            themeIcon.className = 'bx bx-moon';
        }
    }

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            menuIcon.className = 'bx bx-x';
        } else {
            menuIcon.className = 'bx bx-menu';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.className = 'bx bx-menu';
        });
    });

    // Fade-in Animation on Scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150; // offset for navbar
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Video Modal Logic
    const btnViewRive = document.getElementById('btn-view-rive');
    const videoModal = document.getElementById('video-modal');
    const closeModal = document.getElementById('close-modal');
    
    if (btnViewRive && videoModal && closeModal) {
        btnViewRive.addEventListener('click', (e) => {
            e.preventDefault();
            videoModal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        closeModal.addEventListener('click', () => {
            videoModal.classList.remove('show');
            document.body.style.overflow = '';
        });

        // Close on outside click
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    // 3D Model Modal Logic
    const btnExplore3d = document.getElementById('btn-explore-3d');
    const modelModal = document.getElementById('model-modal');
    const closeModelModal = document.getElementById('close-model-modal');

    if (btnExplore3d && modelModal && closeModelModal) {
        btnExplore3d.addEventListener('click', (e) => {
            e.preventDefault();
            modelModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        closeModelModal.addEventListener('click', () => {
            modelModal.classList.remove('show');
            document.body.style.overflow = '';
        });

        modelModal.addEventListener('click', (e) => {
            if (e.target === modelModal) {
                modelModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

});

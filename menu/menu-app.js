
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('nav-bar');
            if (window.scrollY > 50) {
                navbar.style.padding = '3px 0'; 
            } else {
                navbar.style.padding = '3px 0'; 
            }
        });

        // Close mobile menu on click
        document.querySelectorAll('.nav-link').forEach(item => {
            item.addEventListener('click', () => {
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.getElementById('navbarNav');
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
                    bsCollapse.hide();
                }
            })
        });
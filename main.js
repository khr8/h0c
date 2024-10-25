document.addEventListener('DOMContentLoaded', function() {
    const searchItems = document.querySelectorAll('.search-item');
    
    // Toggle active states for search items
    searchItems.forEach(item => {
        const input = item.querySelector('input');
        
        input.addEventListener('focus', () => {
            searchItems.forEach(si => si.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Handle search button click
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        const location = document.querySelector('.location input').value;
        const dates = document.querySelector('.dates input').value;
        const guests = document.querySelector('.guests input').value;
        
        console.log('Search params:', { location, dates, guests });
    });

    // Close active states when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchItems.forEach(item => item.classList.remove('active'));
        }
    });

    // Mobile menu toggle
    const createMobileMenu = () => {
        const navbar = document.querySelector('.navbar');
        const navLeft = document.querySelector('.nav-left');
        
        if (window.innerWidth <= 1024) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '☰';
            menuBtn.style.cssText = `
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                color: var(--primary-color);
            `;
            
            if (!document.querySelector('.mobile-menu-btn')) {
                navbar.insertBefore(menuBtn, navbar.firstChild);
            }
            
            menuBtn.addEventListener('click', () => {
                navLeft.style.display = navLeft.style.display === 'none' ? 'flex' : 'none';
            });
            
            navLeft.style.cssText = `
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: white;
                flex-direction: column;
                padding: 1rem;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            `;
        } else {
            const menuBtn = document.querySelector('.mobile-menu-btn');
            if (menuBtn) {
                menuBtn.remove();
            }
            navLeft.style = '';
        }
    };

    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});
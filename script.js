class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.currentTheme = localStorage.getItem('theme') || 'light';
        
        this.init();
    }
    
    init() {
        this.setTheme(this.currentTheme);
        
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    setTheme(theme) {
        if (theme === 'dark') {
            this.body.setAttribute('data-theme', 'dark');
            this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            this.body.removeAttribute('data-theme');
            this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }
    
    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

class MobileNav {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }
    
    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }
    
    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            this.observerOptions
        );
        
        const animatedElements = document.querySelectorAll(
            '.skill-category, .experience-item, .project-card, .contact-item'
        );
        
        animatedElements.forEach(el => {
            this.observer.observe(el);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = window.scrollY;
        
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            this.navbar.style.background = this.getNavbarBackground();
            this.navbar.style.boxShadow = 'var(--shadow-medium)';
        } else {
            this.navbar.style.background = this.getNavbarBackground(true);
            this.navbar.style.boxShadow = 'none';
        }
        
        this.lastScrollY = currentScrollY;
    }
    
    getNavbarBackground(transparent = false) {
        const isDark = document.body.hasAttribute('data-theme');
        
        if (transparent) {
            return isDark 
                ? 'rgba(15, 23, 42, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
        }
        
        return isDark 
            ? 'rgba(15, 23, 42, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
    }
}

class TypingAnimation {
    constructor() {
        this.roleElement = document.querySelector('.role');
        this.roles = [
            'Desenvolvedor Full-Stack',
            'Desenvolvedor Frontend',
            'Desenvolvedor Backend',
            'Estudante de Sistemas'
        ];
        this.currentRoleIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typeSpeed = 100;
        this.deleteSpeed = 50;
        this.pauseTime = 2000;
        
        this.init();
    }
    
    init() {
        setTimeout(() => this.type(), 1000);
    }
    
    type() {
        const currentRole = this.roles[this.currentRoleIndex];
        
        if (this.isDeleting) {
            this.roleElement.textContent = currentRole.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.roleElement.textContent = currentRole.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }
        
        let typeSpeedCurrent = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        
        if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
            typeSpeedCurrent = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        }
        
        setTimeout(() => this.type(), typeSpeedCurrent);
    }
}

class ParticleBackground {
    constructor() {
        this.canvas = this.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.init();
    }
    
    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.3';
        
        document.body.appendChild(canvas);
        return canvas;
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.getParticleColor();
            this.ctx.fill();
        });
        
        this.drawConnections();
        
        requestAnimationFrame(() => this.animate());
    }
    
    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = this.getConnectionColor(distance);
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }
    
    getParticleColor() {
        const isDark = document.body.hasAttribute('data-theme');
        return isDark ? 'rgba(129, 140, 248, 0.6)' : 'rgba(102, 126, 234, 0.6)';
    }
    
    getConnectionColor(distance) {
        const opacity = 1 - (distance / 100);
        const isDark = document.body.hasAttribute('data-theme');
        return isDark 
            ? `rgba(129, 140, 248, ${opacity * 0.3})` 
            : `rgba(102, 126, 234, ${opacity * 0.3})`;
    }
}

class ProjectCards {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.init();
    }
    
    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.addGlow(card));
            card.addEventListener('mouseleave', () => this.removeGlow(card));
        });
    }
    
    addGlow(card) {
        card.classList.add('glow');
    }
    
    removeGlow(card) {
        card.classList.remove('glow');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new SmoothScroll();
    new MobileNav();
    new ScrollAnimations();
    new NavbarScroll();
    new TypingAnimation();
    new ParticleBackground();
    new ProjectCards();
    
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

const mobileNavCSS = `
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: var(--bg-primary);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: var(--shadow-medium);
        border-top: 1px solid var(--border-color);
        padding: 2rem 0;
        z-index: 998;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-menu li {
        margin: 1rem 0;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
}
`;

const style = document.createElement('style');
style.textContent = mobileNavCSS;
document.head.appendChild(style);

if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - 70;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    let start = null;
                    
                    const step = (timestamp) => {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        const percentage = Math.min(progress / duration, 1);
                        
                        window.scrollTo(0, startPosition + distance * easeInOutCubic(percentage));
                        
                        if (progress < duration) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    
                    window.requestAnimationFrame(step);
                }
            });
        });
    };
    
    const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    
    smoothScrollPolyfill();
}

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

window.addEventListener('scroll', throttle(() => {}, 16));
// Portfolio data structure
const portfolioData = [
    // Animation projects
{
        category: 'animation',
        title: 'Shoe advertisement',
        description: 'An advertisement made by Photoshop and After Effects.  ',
        file: './asset/animation/running.mp4',
        type: 'video'
    },
    {
        category: 'animation',
        title: 'Chicko',
        description: 'A short film about the daily life of chicko .',
        file: './asset/animation/egg.mp4',
        type: 'video'
    },
    {
        category: 'animation',
        title: 'Summer vibe',
        description: 'An animation made by Photoshop.',
        file: './asset/animation/butterfly.mp4',
        type: 'video'
    },
    {
        category: 'animation',
        title: 'Monster Verse',
        description: 'An animation about monsters based on 12 rules of animation.',
        file: './asset/animation/monster.mp4',
        type: 'video'
    },
    // Background projects
    {
        category: 'background',
        title: 'Eyeland',
        description: 'Mystical background use for fiction films and games.',
        file: './asset/background/eyebg_2.png',
        type: 'image'
    },
    {
        category: 'background',
        title: 'Eyeland',
        description: 'Using complementary colors to make the screen more attractive .',
        file: './asset/background/eyebg.png',
        type: 'image'
    },
    {
        category: 'background',
        title: 'The sleeping fairy ',
        description: 'A green background feels relaxing and mysterious.',
        file: './asset/background/sleeping_fairy.png',
        type: 'image'
    },
    // Character Design projects
    {
        category: 'character',
        title: 'Willow the owl',
        description: 'A character design about Willow-a heroic and curious owl, but also an apprentice wizard .',
        file: './asset/character_design/character.png',
        type: 'image'
    },
    // Book Cover projects
    {
        category: 'book',
        title: 'Book cover remake',
        description: 'A book cover by me and my friend ( Le Ba Quynh Huong ).',
        file: './asset/book_cover/contest.png',
        type: 'image'
    },
    // Color Painting projects
    {
        category: 'painting',
        title: 'Street Vendor',
        description: 'water color painting.',
        file: './asset/color_painting/eating.jpg',
        type: 'image'
    },
    {
        category: 'painting',
        title: 'Arowana',
        description: 'Poster color painting.',
        file: './asset/color_painting/fish.jpg',
        type: 'image'
    },
    {
        category: 'painting',
        title: 'Fresh fish',
        description: 'Water color painting.',
        file: './asset/color_painting/fishes.jpg',
        type: 'image'
    },
    {
        category: 'painting',
        title: 'Lemon and blue',
        description: 'Water color painting.',
        file: './asset/color_painting/lemon.jpg',
        type: 'image'
    },
    {
        category: 'painting',
        title: 'Under Water ',
        description: 'Water color and pen.',
        file: './asset/color_painting/man_and_fish.jpg',
        type: 'image'
    },
    {
        category: 'painting',
        title: 'Study painting',
        description: 'Digital painting.',
        file: './asset/color_painting/orange.png',
        type: 'image'
    },
    {
        category: 'painting',
        title: 'Tomato',
        description: 'Water color painting.',
        file: './asset/color_painting/tomato.jpg',
        type: 'image'
    },
    {
        category: 'painting',
        title: 'Portrait',
        description: 'Water color paiting.',
        file: './asset/color_painting/woman.jpg',
        type: 'image'
    },
    // Icon projects
    {
        category: 'icon',
        title: 'Lemon lantern',
        description: '.',
        file: './asset/icon/Artboard_1.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Kiwi clock',
        description: '.',
        file: './asset/icon/Artboard_2.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Pomelo tea pot',
        description: '',
        file: './asset/icon/Artboard_3.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Bellflower',
        description: '',
        file: './asset/icon/Artboard_4.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Mushroom lamp',
        description: '',
        file: './asset/icon/Artboard_5.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Lemon lantern',
        description: '',
        file: './asset/icon/Artboard_6.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Kiwi clock',
        description: '',
        file: './asset/icon/Artboard_7.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Pomelo tea pot',
        description: '',
        file: './asset/icon/Artboard_8.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Bellflower',
        description: '',
        file: './asset/icon/Artboard_9.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Mushroom lamp',
        description: '',
        file: './asset/icon/Artboard_10.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Kiwi clock',
        description: '',
        file: './asset/icon/Artboard_11.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Pomelo tea pot',
        description: '',
        file: './asset/icon/Artboard_12.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Lemon lantern',
        description: '',
        file: './asset/icon/Artboard_13.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Mushroom lamp',
        description: '',
        file: './asset/icon/Artboard_14.jpg',
        type: 'image'
    },
    {
        category: 'icon',
        title: 'Bellflower',
        description: '',
        file: './asset/icon/Artboard_15.jpg',
        type: 'image'
    },
    // Pattern projects
    {
        category: 'pattern',
        title: 'Children Pattern',
        description: 'Using animals and pastel colors to make it child-friendly.',
        file: './asset/pattern/circle.jpg',
        type: 'image'
    },
    {
        category: 'pattern',
        title: 'Floral Pattern',
        description: 'Delicate floral motifs for decorative purposes.',
        file: './asset/pattern/flower.jpg',
        type: 'image'
    },
    {
        category: 'pattern',
        title: 'Floral Pattern',
        description: 'Delicate floral motifs for decorative purposes.',
        file: './asset/pattern/flower_2.jpg',
        type: 'image'
    },
    {
        category: 'pattern',
        title: 'Geometric Pattern',
        description: 'Inspired by the portrayal of women.',
        file: './asset/pattern/eye.jpg',
        type: 'image'
    },
    {
        category: 'pattern',
        title: 'Food Pattern',
        description: 'Inspired by a hunger for balut.',
        file: './asset/pattern/egg.jpg',
        type: 'image'
    },
    {
        category: 'pattern',
        title: ' Floral pattern',
        description: 'Delicate floral motifs for decorative purposes.',
        file: './asset/pattern/moon.jpg',
        type: 'image'
    },
    {
        category: 'pattern',
        title: 'Food Pattern',
        description: 'Inspired by a hunger for bun bo hue.',
        file: './asset/pattern/noodle.jpg',
        type: 'image'
    },
    {
        category: 'pattern',
        title: 'Children Pattern',
        description: 'Using animals and pastel colors to make it child-friendly.',
        file: './asset/pattern/sheep.jpg',
        type: 'image'
    },
    {
        category: 'pattern',
        title: 'Children Pattern',
        description: 'Using animals and pastel colors to make it child-friendly.',
        file: './asset/pattern/pig.jpg',
        type: 'image'
    },
    // Pencil Drawing projects
    {
        category: 'pencil',
        title: 'Character sketch',
        description: '',
        file: './asset/pencil_drawing/astronaut.jpg',
        type: 'image'
    },
    {
        category: 'pencil',
        title: 'Character Sketch',
        description: '',
        file: './asset/pencil_drawing/girl_2.jpg',
        type: 'image'
    },
    {
        category: 'pencil',
        title: 'Character Sketch',
        description: '',
        file: './asset/pencil_drawing/girl.jpg',
        type: 'image'
    },
    {
        category: 'pencil',
        title: 'Character Sketch',
        description: '',
        file: './asset/pencil_drawing/halloween.jpg',
        type: 'image'
    },
    {
        category: 'pencil',
        title: 'Statuary drawing',
        description: '',
        file: './asset/pencil_drawing/man_2.jpg',
        type: 'image'
    },
    {
        category: 'pencil',
        title: 'Portrait drawing',
        description: '',
        file: './asset/pencil_drawing/man.jpg',
        type: 'image'
    },
    {
        category: 'pencil',
        title: 'Character Sketch',
        description: '',
        file: './asset/pencil_drawing/santa.jpg',
        type: 'image'
    },
    {
        category: 'pencil',
        title: 'Portrait drawing',
        description: '',
        file: './asset/pencil_drawing/woman.jpg',
        type: 'image'
    },
    // Storyboard projects
    {
        category: 'storyboard',
        title: 'MV Storyboard',
        description: '',
        file: './asset/story_board/page_1.png',
        type: 'image'
    },
    {
        category: 'storyboard',
        title: 'MV Storyboard',
        description: '',
        file: './asset/story_board/page_2.png',
        type: 'image'
    },
    {
        category: 'storyboard',
        title: 'MV storyboard',
        description: '',
        file: './asset/story_board/page_3.png',
        type: 'image'
    },
    // Typography projects
    {
        category: 'typography',
        title: 'Seafood typography',
        description: 'Alphabet design using seafood painting.',
        file: './asset/typography/alphabet.png',
        type: 'image'
    },
    {
        category: 'typography',
        title: 'Letter design',
        description: 'Design the letter "S" by using iconic images of Sai Gon .',
        file: './asset/typography/SAIGON.jpg',
        type: 'image'
    },
];

// Generate portfolio items
function generatePortfolioItems() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = '';

    portfolioData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.setAttribute('data-category', item.category);

        const mediaElement = item.type === 'video'
            ? `<video src="${item.file}" muted loop onmouseover="this.play()" onmouseout="this.pause()" onerror="this.outerHTML='<div style=\\'height:250px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;color:#666;\\'>Video not found</div>'"></video>`
            : `<img src="${item.file}" alt="${item.title}" onerror="this.outerHTML='<div style=\\'height:250px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;color:#666;\\'>Image not found</div>'">`;

        portfolioItem.innerHTML = `
                    ${mediaElement}
                    <div class="portfolio-item-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <span class="category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                    </div>
                `;

        portfolioItem.addEventListener('click', () => {
            openModal(item);
        });

        portfolioGrid.appendChild(portfolioItem);
    });
}

// Filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                    item.style.display = 'block';
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Modal functionality
function openModal(item) {
    const modal = document.getElementById('modal');
    const modalMedia = document.getElementById('modal-media');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category');

    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    modalCategory.textContent = item.category.charAt(0).toUpperCase() + item.category.slice(1);

    if (item.type === 'video') {
        modalMedia.innerHTML = `<video src="${item.file}" controls autoplay style="width:100%;height:auto;max-height:70vh;" onerror="this.outerHTML='<div style=\\'height:300px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;color:#666;\\'>Video not found</div>'"></video>`;
    } else {
        modalMedia.innerHTML = `<img src="${item.file}" alt="${item.title}" style="width:100%;height:auto;max-height:70vh;" onerror="this.outerHTML='<div style=\\'height:300px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;color:#666;\\'>Image not found</div>'">`;
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    // Stop any playing video
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Smooth scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form submission
function setupContactForm() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const project = formData.get('project');
        const message = formData.get('message');

        // Simulate form submission
        alert(`Thank you ${name}! Your message has been received. I'll get back to you soon about your ${project || 'project'}.`);
        form.reset();
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
        navLinks.style.padding = '1rem';
        navLinks.style.backdropFilter = 'blur(10px)';
        navLinks.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    });
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generatePortfolioItems();
    setupFilters();
    setupSmoothScrolling();
    setupContactForm();
    setupMobileMenu();

    // Setup modal close functionality
    const closeBtn = document.querySelector('.close');
    const modal = document.getElementById('modal');

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Setup scroll animations after a short delay
    setTimeout(() => {
        setupScrollAnimations();
    }, 100);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Preload hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const video = item.querySelector('video');
        if (video) {
            video.play().catch(() => {
                // Handle autoplay restrictions
            });
        }
    });

    item.addEventListener('mouseleave', () => {
        const video = item.querySelector('video');
        if (video) {
            video.pause();
        }
    });
});
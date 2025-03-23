document.addEventListener('DOMContentLoaded', () => {
    // Add background stickers
    addRandomStickers();
    
    // Create flower elements for later use
    createFlowers();
    
    // Initial welcome animation
    setTimeout(() => {
        const welcomeMessage = document.querySelector('.welcome-message');
        
        // Start the sticker shower
        createStickerShower();
        
        // Reveal flowers with staggered animation
        revealFlowers();
        
        // Show welcome message
        setTimeout(() => {
            welcomeMessage.classList.add('visible');
            addGlitter(welcomeMessage);
        }, 600);
    }, 800);
    
    // Scroll animations for love messages with improved effect
    const messages = document.querySelectorAll('.message');
    
    const showMessages = () => {
        messages.forEach((message, index) => {
            const messagePosition = message.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (messagePosition < screenPosition) {
                setTimeout(() => {
                    message.style.transform = 'translateX(0)';
                    message.style.opacity = '1';
                }, index * 100); // Staggered animation effect
            }
        });
    };
    
    // Set initial state for messages
    messages.forEach(message => {
        message.style.opacity = '0';
        message.style.transition = 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease';
        
        // Add hover effect listener for enhanced interactivity
        message.addEventListener('mouseenter', () => {
            // Add subtle glossy animation
            const glowIntensity = Math.random() * 0.3 + 0.7; // Random intensity for varied effect
            message.style.boxShadow = `0 20px 40px rgba(255, 105, 180, ${glowIntensity * 0.2}),
                                    inset 0 0 20px rgba(255, 105, 180, ${glowIntensity * 0.2})`;
            
            // Create mini heart burst on hover
            const rect = message.getBoundingClientRect();
            const heartX = rect.left + rect.width / 2;
            const heartY = rect.top;
            createMiniHeartBurst(heartX, heartY);
        });
    });
    
    // Initial check on load
    showMessages();
    
    // Check on scroll with debounce for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(showMessages, 50);
    });
    
    // Function to create and position flower elements
    function createFlowers() {
        const flowerContainer = document.querySelector('.flower-container');
        const flowerTypes = ['🌸', '🌹', '🌺', '🌻', '🌼', '💐', '🌷'];
        
        for (let i = 0; i < 25; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
            
            // Randomize position and appearance
            flower.style.left = `${5 + Math.random() * 90}%`;
            flower.style.top = `${5 + Math.random() * 90}%`;
            flower.style.fontSize = `${1.2 + Math.random() * 2}rem`;
            flower.style.transform = 'scale(0) rotate(0deg)';
            flower.style.opacity = '0';
            flower.style.transitionDelay = `${0.1 + Math.random() * 1.8}s`;
            flower.style.zIndex = '5';
            
            flowerContainer.appendChild(flower);
        }
    }
    
    // Function to reveal flowers with staggered animation
    function revealFlowers() {
        const flowers = document.querySelectorAll('.flower');
        flowers.forEach((flower, index) => {
            setTimeout(() => {
                flower.classList.add('visible');
            }, index * 50);
        });
    }
    
    // Function to create the sticker shower
    function createStickerShower() {
        const stickerShower = document.querySelector('.sticker-shower');
        const stickers = ['❤️', '💕', '💖', '💗', '💓', '💞', '💘', '💝', '💟', '♥️'];
        
        for (let i = 0; i < 60; i++) {
            const sticker = document.createElement('div');
            sticker.className = 'falling-sticker';
            sticker.innerHTML = stickers[Math.floor(Math.random() * stickers.length)];
            
            // Randomize position, size, and animation duration
            sticker.style.left = `${Math.random() * 100}%`;
            sticker.style.fontSize = `${0.8 + Math.random() * 1.8}rem`;
            const duration = 3 + Math.random() * 6;
            sticker.style.animationDuration = `${duration}s`;
            sticker.style.animationDelay = `${Math.random() * 5}s`;
            
            stickerShower.appendChild(sticker);
        }
    }
    
    // Love prompt button behavior
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const lovePrompt = document.getElementById('love-prompt');
    const loveResponse = document.getElementById('love-response');
    
    // Make the No button run away when hovered
    noBtn.addEventListener('mouseover', () => {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
    
    // Disable No button click
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton();
        // Show a mini heart burst when clicking
        createMiniHeartBurst(e.clientX, e.clientY);
    });
    
    function moveNoButton() {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }
    
    // Yes button behavior
    yesBtn.addEventListener('click', (e) => {
        // Create heart burst effect before transition
        createHeartBurst(e.clientX, e.clientY);
        
        // Hide prompt and show response
        setTimeout(() => {
            lovePrompt.classList.add('hidden');
            loveResponse.classList.remove('hidden');
            loveResponse.classList.add('visible');
            
            // Create floating hearts
            createFloatingHearts();
        }, 500);
    });
    
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = getRandomHeartEmoji();
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 2 + 1}rem`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.opacity = '0';
            heart.style.animation = `float ${Math.random() * 3 + 3}s linear infinite`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.setProperty('--x', Math.random() * 2 - 1);
            
            heartsContainer.appendChild(heart);
        }
    }
    
    function addGlitter(element) {
        for (let i = 0; i < 10; i++) {
            const glitter = document.createElement('div');
            glitter.className = 'glitter';
            glitter.style.top = `${Math.random() * 100}%`;
            glitter.style.left = `${Math.random() * 100}%`;
            glitter.style.animationDelay = `${Math.random() * 5}s`;
            element.appendChild(glitter);
        }
    }
    
    function addRandomStickers() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            for (let i = 0; i < 3; i++) {
                const sticker = document.createElement('div');
                sticker.className = 'sticker';
                sticker.innerHTML = getRandomHeartEmoji();
                sticker.style.position = 'absolute';
                sticker.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
                sticker.style.top = `${Math.random() * 80 + 10}%`;
                sticker.style.left = `${Math.random() * 80 + 10}%`;
                sticker.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
                sticker.style.opacity = '0.7';
                sticker.style.zIndex = '1';
                section.appendChild(sticker);
            }
        });
    }
    
    function createHeartBurst(x, y) {
        const burstContainer = document.createElement('div');
        burstContainer.className = 'heart-burst';
        burstContainer.style.position = 'fixed';
        burstContainer.style.left = `${x}px`;
        burstContainer.style.top = `${y}px`;
        burstContainer.style.zIndex = '9999';
        document.body.appendChild(burstContainer);
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = getRandomHeartEmoji();
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 1.5 + 0.8}rem`;
            heart.style.transform = `translate(-50%, -50%)`;
            heart.style.animation = `burst 2s forwards`;
            heart.style.animationDelay = `${Math.random() * 0.2}s`;
            
            const angle = Math.random() * Math.PI * 2; // Random angle in radians
            const distance = Math.random() * 100 + 50;
            
            heart.style.setProperty('--cos-angle', Math.cos(angle));
            heart.style.setProperty('--sin-angle', Math.sin(angle));
            heart.style.setProperty('--distance', `${distance}px`);
            
            burstContainer.appendChild(heart);
        }
        
        // Remove the burst container after animation completes
        setTimeout(() => {
            document.body.removeChild(burstContainer);
        }, 2000);
    }
    
    function createMiniHeartBurst(x, y) {
        const burstContainer = document.createElement('div');
        burstContainer.className = 'heart-burst';
        burstContainer.style.position = 'fixed';
        burstContainer.style.left = `${x}px`;
        burstContainer.style.top = `${y}px`;
        burstContainer.style.zIndex = '9999';
        document.body.appendChild(burstContainer);
        
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 0.8 + 0.5}rem`;
            heart.style.transform = `translate(-50%, -50%)`;
            heart.style.animation = `burst 1s forwards`;
            
            const angle = Math.random() * Math.PI * 2; // Random angle in radians
            const distance = Math.random() * 40 + 20;
            
            heart.style.setProperty('--cos-angle', Math.cos(angle));
            heart.style.setProperty('--sin-angle', Math.sin(angle));
            heart.style.setProperty('--distance', `${distance}px`);
            
            burstContainer.appendChild(heart);
        }
        
        // Remove the burst container after animation completes
        setTimeout(() => {
            document.body.removeChild(burstContainer);
        }, 1000);
    }
    
    function getRandomHeartEmoji() {
        const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞', '💘', '💝', '💟', '♥️'];
        return hearts[Math.floor(Math.random() * hearts.length)];
    }
    
    // Add a CSS rule for the heart burst animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes burst {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(0.1);
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translate(
                    calc(var(--distance) * var(--cos-angle)), 
                    calc(var(--distance) * var(--sin-angle))
                ) scale(1);
            }
        }
        
        .glitter {
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
            filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.8));
            animation: glitter 4s ease-in-out infinite;
        }
        
        @keyframes glitter {
            0%, 100% {
                opacity: 0.2;
                transform: scale(0.6);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .sticker {
            animation: float-sticker 5s ease-in-out infinite;
        }
        
        @keyframes float-sticker {
            0%, 100% {
                transform: translateY(0) rotate(var(--rotate, 0deg));
            }
            50% {
                transform: translateY(-10px) rotate(var(--rotate, 0deg));
            }
        }
    `;
    document.head.appendChild(styleSheet);
}); 
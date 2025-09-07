document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    createParticles();
    setupEventListeners();
    initializeMedia();
});

function initializePage() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.7s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}

function initializeMedia() {
    // Пытаемся показать видео сначала
    setTimeout(() => {
        const video = document.getElementById('secretVideo');
        const fallbackGif = document.getElementById('fallbackGif');
        const ultimateFallback = document.getElementById('ultimateFallback');
        
        if (video) {
            try {
                video.style.display = 'block';
                video.play().catch(() => {
                    showFallback();
                });
            } catch (error) {
                showFallback();
            }
        }
    }, 1000);
}

function showFallback() {
    const video = document.getElementById('secretVideo');
    const fallbackGif = document.getElementById('fallbackGif');
    const ultimateFallback = document.getElementById('ultimateFallback');
    
    if (video) video.style.display = 'none';
    if (fallbackGif) {
        fallbackGif.style.display = 'block';
    } else {
        showUltimateFallback();
    }
}

function showUltimateFallback() {
    const fallbackGif = document.getElementById('fallbackGif');
    const ultimateFallback = document.getElementById('ultimateFallback');
    
    if (fallbackGif) fallbackGif.style.display = 'none';
    if (ultimateFallback) ultimateFallback.style.display = 'block';
}

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const symbols = ['✨', '⭐', '🌟', '💫', '🎉', '🎊', '🎂', '🎁'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDuration = (Math.random() * 12 + 6) + 's';
        particle.style.animationDelay = (Math.random() * 5) + 's';
        particle.style.fontSize = (Math.random() * 18 + 12) + 'px';
        particle.style.opacity = Math.random() * 0.4 + 0.1;
        particle.style.color = `hsl(${Math.random() * 360}, 80%, 65%)`;
        
        container.appendChild(particle);
    }
}

function setupEventListeners() {
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('secretModal');
        if (modal && e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openCard() {
    const card = document.querySelector('.birthday-card');
    card.classList.add('open');
    createConfetti();
    showNotification('С днём рождения! 🎉');
}

function selectGift(element, emoji, message) {
    const allGifts = document.querySelectorAll('.gift-option');
    const result = document.getElementById('giftResult');
    
    allGifts.forEach(gift => {
        gift.style.background = '';
        gift.style.borderColor = '';
        gift.style.color = '';
        gift.style.transform = '';
    });
    
    element.style.background = 'linear-gradient(135deg, var(--accent-light), var(--accent))';
    element.style.borderColor = 'var(--gold)';
    element.style.color = 'white';
    element.style.transform = 'scale(1.1)';
    
    result.textContent = `${emoji} ${message}`;
    result.style.animation = 'pulse 1s ease';
    
    setTimeout(() => {
        result.style.animation = '';
    }, 1000);
    
    createConfetti();
    showNotification('Прекрасный выбор! 🎁');
}

function createConfetti() {
    const container = document.getElementById('effectsContainer');
    if (!container) return;
    
    const emojis = ['✨', '🎉', '🎂', '🎁', '🌟', '🎊', '💫', '🥳'];
    
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 1) + 's';
        confetti.style.fontSize = (Math.random() * 25 + 20) + 'px';
        confetti.style.color = `hsl(${Math.random() * 360}, 80%, 65%)`;
        
        container.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function createFireworks() {
    const container = document.getElementById('effectsContainer');
    if (!container) return;
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFirework(container);
        }, i * 300);
    }
    
    showNotification('Фейерверк запущен! 🎆');
}

function createFirework(container) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    
    const emojis = ['✨', '🎉', '🌟', '🎊', '💫', '⭐'];
    firework.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    firework.style.fontSize = (Math.random() * 30 + 25) + 'px';
    
    container.appendChild(firework);
    
    setTimeout(() => {
        firework.remove();
    }, 2500);
}

function createButterflies() {
    const container = document.getElementById('effectsContainer');
    if (!container) return;
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            createButterfly(container);
        }, i * 400);
    }
    
    showNotification('Бабочки летят! 🦋');
}

function createButterfly(container) {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.textContent = '🦋';
    butterfly.style.left = Math.random() * 100 + 'vw';
    butterfly.style.animationDuration = (Math.random() * 4 + 3) + 's';
    butterfly.style.fontSize = (Math.random() * 20 + 25) + 'px';
    
    container.appendChild(butterfly);
    
    setTimeout(() => {
        butterfly.remove();
    }, 4000);
}

function showSecret() {
    const modal = document.getElementById('secretModal');
    if (modal) {
        modal.style.display = 'block';
        createConfetti();
        showNotification('Секрет найден! 🎊');
    }
}

function closeModal() {
    const modal = document.getElementById('secretModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function createSpecialEffects() {
    createConfetti();
    createFireworks();
    createButterflies();
    
    showNotification('Волшебство запущено! 🔮');
    setTimeout(closeModal, 2000);
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Добавляем CSS анимации
const animationStyles = `
@keyframes confettiFall {
    0% { transform: translateY(-100px) rotate(0deg) scale(1); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg) scale(0.5); opacity: 0; }
}

@keyframes firework {
    0% { transform: translateY(100vh) scale(0); opacity: 1; }
    50% { opacity: 1; transform: translateY(40vh) scale(1.5); }
    100% { transform: translateY(0) scale(1); opacity: 0; }
}

@keyframes butterflyFly {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

.confetti {
    position: absolute;
    animation: confettiFall 3s ease-in forwards;
    pointer-events: none;
    z-index: 100;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.firework {
    position: absolute;
    animation: firework 2.5s ease-out forwards;
    pointer-events: none;
    z-index: 100;
}

.butterfly {
    position: absolute;
    animation: butterflyFly 4s ease-in-out forwards;
    pointer-events: none;
    z-index: 100;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);
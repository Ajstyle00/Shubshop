// Currency Toggle
const currencySelect = document.getElementById('currency');
const prices = document.querySelectorAll('.price');
const exchangeRate = 0.012; // 1 INR = 0.012 USD (approximate, update as needed)

currencySelect.addEventListener('change', () => {
    const currency = currencySelect.value;
    prices.forEach(price => {
        const basePrice = price.getAttribute('data-base-price');
        if (currency === 'USD') {
            price.textContent = `$${Math.round(basePrice * exchangeRate)}`;
        } else {
            price.textContent = `₹${basePrice}`;
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Newsletter Pop-up
const popup = document.getElementById('newsletter-popup');
const closePopup = document.querySelector('.popup .close');

setTimeout(() => {
    popup.style.display = 'block';
}, 3000);

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Glide.js Carousel
new Glide('.glide', {
    type: 'carousel',
    perView: 2,
    gap: 20,
    breakpoints: {
        768: { perView: 1 }
    }
}).mount();

// Countdown Timer
const countdown = document.getElementById('countdown');
const endDate = new Date();
endDate.setDate(endDate.getDate() + 1);

function updateCountdown() {
    const now = new Date();
    const timeLeft = endDate - now;
    if (timeLeft <= 0) {
        countdown.textContent = 'Deal Ended!';
        return;
    }
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    countdown.textContent = `${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// Scroll Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.testimonial-item').forEach(item => {
    observer.observe(item);
});

// Product Image Zoom
document.querySelectorAll('.zoom-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const img = icon.parentElement.parentElement.style.backgroundImage;
        const zoomPopup = document.createElement('div');
        zoomPopup.className = 'popup';
        zoomPopup.innerHTML = `
            <div class="popup-content">
                <span class="close">&times;</span>
                <div style="background-image: ${img}; height: 500px; background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
            </div>
        `;
        document.body.appendChild(zoomPopup);
        zoomPopup.querySelector('.close').addEventListener('click', () => {
            zoomPopup.remove();
        });
    });
});
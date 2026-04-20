document.addEventListener('DOMContentLoaded', function() {
    console.log("StudentPortfolio JavaScript Loaded!");

    // 1. Alert for the Hero Button
    const heroBtn = document.querySelector('.hero-section .btn');
    heroBtn.addEventListener('click', function(e) {
        console.log("User clicked View My Work");
        // The scroll is handled by CSS, but we can log activity here
    });

    // 2. Simple Scroll Animation for Navbar
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });
});
// Add a button to your HTML and then use this:
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    
    // Save preference to local storage so it stays on refresh
    const isDark = body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Check for saved theme on load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('themeToggle');
    const body = document.body;

    // 1. Check Local Storage on Load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        if(themeBtn) themeBtn.innerText = '☀️ Light Mode';
    }

    // 2. Toggle Event
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                themeBtn.innerText = '☀️ Light Mode';
            } else {
                localStorage.setItem('theme', 'light');
                themeBtn.innerText = '🌙 Dark Mode';
            }
        });
    }
});
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-white');
    
    // Toggle button text and icon
    if (body.classList.contains('bg-dark')) {
        themeToggle.innerHTML = "☀️ Light Mode";
        themeToggle.classList.replace('btn-outline-info', 'btn-outline-warning');
    } else {
        themeToggle.innerHTML = "🌙 Dark Mode";
        themeToggle.classList.replace('btn-outline-warning', 'btn-outline-info');
    }
});
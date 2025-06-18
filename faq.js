document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const faqSearchInput = document.getElementById('faq-search');
    if (searchForm && faqSearchInput) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = faqSearchInput.value.toLowerCase();
            document.querySelectorAll('.faq-item').forEach(faq => {
                const question = faq.querySelector('.faq-question').textContent.toLowerCase();
                if (question.includes(query) || query === "") {
                    faq.classList.remove('hidden');
                } else {
                    faq.classList.add('hidden');
                }
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            contactForm.reset();
            alert(`Your message is submitted to tujijenge@gmail.com!`);
        });
    }

    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const faqItem = btn.closest('.faq-item');
            faqItem.classList.toggle('open');
        });
    });

    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            navToggle.classList.toggle('open');
        });

        document.querySelectorAll('.links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 900) {
                    navLinks.classList.remove('open');
                    navToggle.classList.remove('open');
                }
            });
        });
    }
});
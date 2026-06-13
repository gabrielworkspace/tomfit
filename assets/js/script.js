document.addEventListener('DOMContentLoaded', () => {
    
    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');

        questionBtn.addEventListener('click', () => {
            const isActive = questionBtn.classList.contains('active');

            // Close all open FAQs
            faqItems.forEach(otherItem => {
                const otherBtn = otherItem.querySelector('.faq-question');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherBtn.classList.remove('active');
                otherAnswer.style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                questionBtn.classList.add('active');
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
            }
        });
    });

    // --- Smooth Scroll Logic ---
    // Specifically for internal links (like the 'Ver como funciona' button)
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if it's an internal link
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate offset taking the fixed navbar into account (approx 80px)
                    const navHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 80;
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Read More Logic ---
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.testimonial-card');
            const dots = card.querySelector('.dots');
            const moreText = card.querySelector('.more-text');

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                moreText.style.display = "none";
                this.textContent = "Ler mais";
            } else {
                dots.style.display = "none";
                moreText.style.display = "inline";
                this.textContent = "Ler menos";
            }
        });
    });

});

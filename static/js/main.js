// main.js — students will add JavaScript here as features are built

// Modal functionality
(function() {
    const modal = document.getElementById('how-it-works-modal');
    const modalTrigger = document.querySelector('[data-modal-trigger="how-it-works-modal"]');
    const modalClose = modal.querySelector('.modal-close');
    const modalVideo = document.getElementById('modal-youtube');
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    // Open modal
    modalTrigger.addEventListener('click', function() {
        modal.classList.add('active');
        modalVideo.src = videoUrl;
        document.body.style.overflow = 'hidden';
    });

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        modalVideo.src = '';
        document.body.style.overflow = '';
    }

    // Close on close button click
    modalClose.addEventListener('click', closeModal);

    // Close on overlay click (outside modal)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();

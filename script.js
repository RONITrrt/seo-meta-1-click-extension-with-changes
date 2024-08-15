document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');

    function showSection(sectionId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.remove('hidden');
        activeSection.classList.add('active');

        navLinks.forEach(link => {
            link.setAttribute('aria-current', 'false');
        });
        document.querySelector(`nav a[href="#${sectionId}"]`).setAttribute('aria-current', 'page');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Show dashboard by default
    showSection('dashboard');
});
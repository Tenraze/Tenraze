// Select all sections to animate
const sections = document.querySelectorAll('section');

// Create an observer to detect when a section enters the viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the section is in view
});

// Add hidden class to each section, and observe
sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
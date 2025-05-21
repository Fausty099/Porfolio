document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const imagess = track.querySelectorAll('img');
    
    // Calculate total width needed
    let totalWidth = 0;
    images.forEach(img => {
      totalWidth += img.offsetWidth + 15; // Include margin
    });
    
    // Set track width to exactly double the original content
    track.style.width = `${totalWidth / 2}px`;
    
    // Pause on hover
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });
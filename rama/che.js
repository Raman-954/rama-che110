const videoWrapper = document.querySelector('.video-wrapper');
let isScrolling = false;

function scrollVideos(direction) {
  if (!isScrolling) {
    isScrolling = true;
    const scrollDistance = 500; // Adjust the scroll distance as needed
    if (direction === 'left') {
      videoWrapper.scrollLeft -= scrollDistance;
    } else if (direction === 'right') {
      videoWrapper.scrollLeft += scrollDistance;
    }
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Adjust the delay between scrolls as needed
  }
}

// Scroll left button event listener
document.getElementById('scroll-left').addEventListener('click', function() {
  scrollVideos('left');
});

// Scroll right button event listener
document.getElementById('scroll-right').addEventListener('click', function() {
  scrollVideos('right');
});

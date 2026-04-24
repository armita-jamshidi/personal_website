const heart = document.querySelector('.heart-cursor');

if (heart) {
  window.addEventListener('mousemove', (event) => {
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
  });
}

const updateSwimShift = () => {
  document.documentElement.style.setProperty('--swim-shift', `${window.scrollY}px`);
};

window.addEventListener('scroll', updateSwimShift, { passive: true });
updateSwimShift();

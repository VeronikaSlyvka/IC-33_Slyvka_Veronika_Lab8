const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    modalImage.src = e.target.src;
    modal.classList.add('active');
  }
});

modal.addEventListener('click', () => {
  modal.classList.remove('active');
  modalImage.src = '';
});
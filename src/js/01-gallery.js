// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";

image.addEventListener('click', () => {
  image.classList.toggle('zoomed');
});
function toggleImageVisibility() {
  var image = document.getElementById('image');
  image.classList.toggle('hidden');
}
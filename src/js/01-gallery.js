// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";

// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";
document.addEventListener("DOMContentLoaded", function () {
    // Your previous JavaScript code here
    function enlargeImage(image) {
      const enlargedContainer = document.createElement('div');
      enlargedContainer.classList.add('enlarged');
      enlargedContainer.onclick = () => document.body.removeChild(enlargedContainer);

      const enlargedImage = document.createElement('img');
      enlargedImage.src = image.src;

      enlargedContainer.appendChild(enlargedImage);
      document.body.appendChild(enlargedContainer);
    }
    // Example usage of SimpleLightbox
    const gallery = new SimpleLightbox('.gallery a');
});

console.log(galleryItems);
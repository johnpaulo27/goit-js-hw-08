// Import the Vimeo player library
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Get the Vimeo player element by ID
const vimeoPlayer = new Vimeo(document.getElementById('vimeo-player'));

// Check if there is a saved playback time in local storage
const savedTime = localStorage.getItem('vimeoPlaybackTime');

// If there is a saved time, seek to that time
if (savedTime) {
  vimeoPlayer.setCurrentTime(parseFloat(savedTime));
}

// Throttle the saving of playback time to avoid saving it too frequently
const savePlaybackTimeThrottled = throttle(function (currentTime) {
  localStorage.setItem('vimeoPlaybackTime', currentTime.toString());
}, 1000); // Throttle to save every 1000ms (1 second)

// Listen for the 'timeupdate' event to save the current playback time
vimeoPlayer.on('timeupdate', function (data) {
  const currentTime = data.seconds;

  // Save the current playback time to local storage, throttled
  savePlaybackTimeThrottled(currentTime);
});


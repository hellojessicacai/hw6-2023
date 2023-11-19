// Get the video element
var video = document.getElementById('player1');

// Initialize the video, turn off autoplay and looping
window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video.autoplay = false;
    video.loop = false;
})

// Play the video and update the volume information, slider
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
})

var volumeSlider = document.getElementById('slider');
var volumeDisplay = document.getElementById('volume');

volumeSlider.addEventListener('input', function () {
    console.log("Volume Change");
    volumeDisplay.textContent = volumeSlider.value + '%';
    video.volume = volumeSlider.value / 100;
})

// Pause the video
document.querySelector("#pause").addEventListener("click", function(){
    console.log("Pause Video");
    video.pause();
})


// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function(){
    console.log("original video speed before slow down", video.playbackRate);
    video.playbackRate = video.playbackRate * 0.9;
	console.log("new video speed after slow down", video.playbackRate);
})


// Speed up
document.querySelector("#faster").addEventListener("click", function(){
	console.log("original video speed before speed up",video.playbackRate);
	video.playbackRate = video.playbackRate / 0.9;
	console.log("newvideo speed after speed up",video.playbackRate);

})


// Advance the current video by 10 seconds.
document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip ahead 10 seconds")
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
        // If exceeded, go back to the start, no farther
        video.currentTime = 0;
    }
	console.log('Current Location:', video.currentTime);
})

// mute
var muteButton = document.querySelector('#mute');

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
        video.muted = false;
        muteButton.textContent = 'Mute';
    }
	else {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    }
})


// style
document.querySelector("#vintage").addEventListener("click", function(){
	video.className = "oldSchool";

})
document.querySelector("#orig").addEventListener("click", function(){
	video.className = "video";

})